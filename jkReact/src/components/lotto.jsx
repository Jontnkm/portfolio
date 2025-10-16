import React, { useState, useEffect } from "react";
import '../styles/_lcn.scss';
import logo from '../assets/images/logo.webp';

function Lcn() {
  // State 관리
  const [dateInfo, setDateInfo] = useState("");
  const [lottoNumbers, setLottoNumbers] = useState(Array(6).fill(null)); // 초기값을 null로 설정
  const [history, setHistory] = useState([]);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1830);
  const [savedData, setSavedData] = useState("");
  const [isSaveListOpen, setIsSaveListOpen] = useState(false); // 저장목록 열림 상태 추가
  const [isOpeningVisible, setIsOpeningVisible] = useState(true); // opening 요소의 표시 여부

  // 날짜 정보 설정
  useEffect(() => {
    const today = new Date();
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const day = dayNames[today.getDay()];
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    setDateInfo(`${year}년 ${month}월 ${date}일 ${day}요일`);
  }, []);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1830);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 로또 번호 생성 (숫자를 하나씩 시간차를 두고 표시)
  const generateLottoNumbers = () => {
    // opening 요소를 숨김
    setIsOpeningVisible(false);

    // 기존 로직
    setLottoNumbers(Array(6).fill(null));
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    numbers.sort((a, b) => a - b);

    numbers.forEach((num, index) => {
      setTimeout(() => {
        setLottoNumbers((prev) => {
          const updated = [...prev];
          updated[index] = num;
          return updated;
        });
      }, index * 100);
    });

    setTimeout(() => {
      setHistory((prevHistory) => [
        ...prevHistory,
        { id: prevHistory.length + 1, numbers },
      ]);
    }, numbers.length * 100);
  };

  // 로컬 스토리지 저장
  const saveToLocalStorage = () => {
    if (history.length === 0) {
      alert("번호를 생성하지 않았습니다.\n먼저 번호를 생성해주세요");
    } else {
      if (window.confirm("생성된 번호를 저장하시겠습니까?")) {
        const data = JSON.stringify(history);
        localStorage.setItem("data", data);
        setSavedData(data);

        // 저장 후 생성목록 초기화
        setHistory([]); // hisList를 비웁니다.
        setLottoNumbers(Array(6).fill(null)); // 저장 후 lottoNumbers 초기화

        // opening 문구 다시 표시
        setIsOpeningVisible(true);
      }
    }
  };

  // 로컬 스토리지 데이터 불러오기
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setSavedData(data); // 저장된 데이터는 savedData에만 저장
    }

    // 새로고침 시 lottoNumbers 초기화
    setLottoNumbers(Array(6).fill(null));
  }, []);

  // 로컬 스토리지 데이터 삭제
  const clearLocalStorage = () => {
    if (window.confirm("삭제 후 복구는 불가능합니다. 데이터를 삭제하시겠습니까?")) {
      localStorage.clear();
      setSavedData("");
      setHistory([]);
    }
  };

  // 저장된 목록 보기
  const checkMyList = () => {
    setIsSaveListOpen((prev) => !prev); // 열림 상태를 토글
  };

  // 당첨 결과 확인 (임시)
  const checkPrize = () => {
    alert("당첨 결과를 확인합니다.");
  };

  return (
    <div className="lottoCov">
      <p className="tit">로. 친. 놈</p>
      <div className="sub">
        <p>{dateInfo}</p>
      </div>
      <div className="numCov">
        <div className="numBox">
          <ul>
            {lottoNumbers.map((num, index) => (
              <li
                key={index}
                className={
                  num
                    ? `numTy0${Math.ceil(num / 10)}` // 번호에 따라 클래스 적용
                    : ""
                }
              >
                <span>{num || "?"}</span> {/* 번호가 없으면 "?" 표시 */}
              </li>
            ))}
          </ul>
        </div>
        <div className="genBtn">
          <div className="blkGen"></div>
          <button className="generate" onClick={generateLottoNumbers}>
            <img src={logo} alt="" />
          </button>
        </div>
      </div>

      <div className="numHistory">
        <div className={`opening ${isOpeningVisible ? "" : "hidden"}`}>
          <p>Dreams Will Fucking Come True</p>
        </div>
        <div className="hisCov">
          <p className="hisTit">생성목록</p>
          <div>
            <button className="saveHisPc" onClick={saveToLocalStorage} style={{ display: isWideScreen ? "block" : "none" }}>
              저장
            </button>
            <button className="saveHisMo" onClick={saveToLocalStorage} style={{ display: isWideScreen ? "none" : "block" }}>
              저장
            </button>
          </div>
        </div>
        <div className="innerBox">
          <div className="hisList">
            {history.map((item) => (
              <div className="list" key={item.id}>
                <span>{item.id}</span>
                <ul>
                  {item.numbers.map((num, index) => {
                    let className = "";
                    if (num >= 1 && num <= 10) className = "numTy01";
                    else if (num >= 11 && num <= 20) className = "numTy02";
                    else if (num >= 21 && num <= 30) className = "numTy03";
                    else if (num >= 31 && num <= 40) className = "numTy04";
                    else if (num >= 41 && num <= 45) className = "numTy05";

                    return (
                      <li key={`${item.id}-${index}`} className={className}>
                        <span>{num}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`swSvLst ${savedData && JSON.parse(savedData).length > 0 ? "hasData" : "noData"}`}
      >
        <button className="swSvLstBtn" onClick={checkMyList}>
          {isSaveListOpen ? "목록 닫기" : "저장목록보기"}
        </button>
      </div>

      {!isWideScreen && isSaveListOpen && (
      <div className="saveBox">
        <div className="saveCov">
          <p className="saveTit">내가 저장한 번호</p>
          <div>
            {/* <button className="seeResult" onClick={checkPrize}>
              결과보기
            </button> */}
            <button className="delList" onClick={clearLocalStorage}>
              삭제
            </button>
            <button className="clsPopMo" onClick={checkMyList}>
              닫기
            </button>
          </div>
        </div>
        <div className="saveList">
          {savedData &&
            JSON.parse(savedData).map((item, index) => (
              <div className="list" key={index}>
                <span>{item.id}</span>
                <ul>
                  {item.numbers.map((num, idx) => {
                    let className = "";
                    if (num >= 1 && num <= 10) className = "numTy01";
                    else if (num >= 11 && num <= 20) className = "numTy02";
                    else if (num >= 21 && num <= 30) className = "numTy03";
                    else if (num >= 31 && num <= 40) className = "numTy04";
                    else if (num >= 41 && num <= 45) className = "numTy05";

                    return (
                      <li key={idx} className={className}>
                        <span>{num}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
      </div>
    )}
    </div>
  );
}

export default Lcn;