import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom"
import {pfImg} from "@/assets/images/index.js";
import imgBack from "@/assets/images/ic_back.webp";

const List = () => {
    const [filterType, setFilterType] = useState("total");
  
    // 목록 카운트 함수
    function listCount() {
        const counts = {
            pc: document.querySelectorAll(".listCont ul li.pc").length,
            mo: document.querySelectorAll(".listCont ul li.mo").length,
            rs: document.querySelectorAll(".listCont ul li.rs").length,
            mt: document.querySelectorAll(".listCont ul li.mt").length,
            wa: document.querySelectorAll(".listCont ul li.wa").length,
            cf: document.querySelectorAll(".listCont ul li.cf").length,
        };

        const total = counts.pc + counts.mo + counts.rs + counts.cf;

        // 카운트 값을 탭에 업데이트
        document.querySelectorAll(".listTab ul li").forEach((menu) => {
            const type = menu.dataset.type;
            if (counts[type] !== undefined) {
                menu.querySelector("b").textContent = counts[type];
            } else if (type === "total") {
                menu.querySelector("b").textContent = total;
            }
        }); 
    }

    const handleFilterChange = (type) => {
        setFilterType(type);
        console.log(type);
        
        var def = document.querySelectorAll(".listCont ul li");
        var listTy = document.querySelectorAll(".listCont ul li." + type);
        
        def.forEach(function(all){
            all.style.display = "none";
        })

        listTy.forEach(function(showList){
            showList.style.display = "block";
        })
    };

    useEffect(() => {
        listCount(); // 컴포넌트가 렌더링될 때마다 카운트 업데이트
    }, [filterType]);


    function goBack() {
		var pf = document.querySelector('.portfolio');
		pf.classList.remove('on');
	}

    return (
        <>
            <div className="back">
                <button className="backBtn" onClick={()=> goBack()}><img src={imgBack} alt="" /></button>
            </div>
            <div className="listTab">
                <ul>
                    <li data-type="total" className={`${filterType === 'total' ? 'active' : ''}`} onClick={() => handleFilterChange("total")}>전체 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="pc" className={`${filterType === 'pc' ? 'active' : ''}`} onClick={() => handleFilterChange("pc")}>PC버전 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="mo" className={`${filterType === 'mo' ? 'active' : ''}`} onClick={() => handleFilterChange("mo")}>모바일버전 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="rs" className={`${filterType === 'res' ? 'active' : ''}`} onClick={() => handleFilterChange("rs")}>반응형 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="wa" className={`${filterType === 'wa' ? 'active' : ''}`} onClick={() => handleFilterChange("wa")}>웹접근성 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="cf" className={`${filterType === 'cf' ? 'active' : ''}`} onClick={() => handleFilterChange("cf")}>cafe24 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="mt" className={`${filterType === 'maintanance' ? 'active' : ''}`} onClick={() => handleFilterChange("mt")}>유지보수 <span className="cnt">(<b>11</b>)</span></li>
                </ul>
            </div>
            <div className="listCont">
                <ul>
                {/* start area of portfolio */}

                <li className="total rs wa">
                    <Link to="https://www.kra.co.kr/main.do" target="_blank">
                        <img src={pfImg.kra} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2025.05 ~ 2025.06</span>
                            </span>
                        </span>
                        <span className="title">한국마사회</span>
                    </Link>
                </li>
                <li className="total rs wa">
                    <Link to="https://park.kra.co.kr/main/seoul" target="_blank">
                        <img src={pfImg.letsrun01} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2025.05 ~ 2025.06</span>
                            </span>
                        </span>
                        <span className="title">한국마사회-렛츠런파크(서울)</span>
                    </Link>
                </li>
                <li className="total rs wa">
                    <Link to="https://park.kra.co.kr/main/jeju" target="_blank">
                        <img src={pfImg.letsrun02} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2025.05 ~ 2025.06</span>
                            </span>
                        </span>
                        <span className="title">한국마사회-렛츠런파크(제주)</span>
                    </Link>
                </li>
                <li className="total rs wa">
                    <Link to="https://park.kra.co.kr/main/busan" target="_blank">
                        <img src={pfImg.letsrun03} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2025.05 ~ 2025.06</span>
                            </span>
                        </span>
                        <span className="title">한국마사회-렛츠런파크(부산경남)</span>
                    </Link>
                </li>
                <li className="total rs wa">
                    <Link to="https://spowell.kspo.or.kr" target="_blank">
                        <img src={pfImg.spowell} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.11 ~ 2025.03</span>
                            </span>
                        </span>
                        <span className="title">체육인복지지원</span>
                    </Link>
                </li>
                <li className="total rs ">
                    <Link to="https://btvtownad.com/" target="_blank">
                        <img src={pfImg.btv} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.08 ~ 2024.11</span>
                            </span>
                        </span>
                        <span className="title">SK Btv 우리동네광고</span>
                    </Link>
                </li>
                <li className="total pc">
                    <Link to="https://www.barocredit.com/" target="_blank">
                        <img src={pfImg.baro} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.03 ~ 2024.06</span>
                            </span>
                        </span>
                        <span className="title">바로크레디트대부 PC</span>
                    </Link>
                </li>
                <li className="total mo">
                    <Link to="https://m.barocredit.com/" target="_blank">
                        <img src={pfImg.baro} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.03 ~ 2024.06</span>
                            </span>
                        </span>
                        <span className="title">바로크레디트대부 모바일</span>
                    </Link>
                </li>
                <li className="total pc wa">
                    <Link to="https://adiga.kr/" target="_blank">
                        <img src={pfImg.adiga} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2023.07 ~ 2024.02</span>
                            </span>
                        </span>
                        <span className="title">대학입시정보포털 어디가 PC</span>
                    </Link>
                </li>
                <li className="total mo wa">
                    <Link to="https://m.adiga.kr/" target="_blank">
                        <img src={pfImg.adiga} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2023.07 ~ 2024.02</span>
                            </span>
                        </span>
                        <span className="title">대학입시정보포털 어디가 모바일</span>
                    </Link>
                </li>
                <li className="total rs wa mt">
                    <Link to="https://nfa.kspo.or.kr/main.kspo" target="_blank">
                        <img src={pfImg.nfa} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프론트 웹접근성 및 관리자페이지 작업 전담</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2023.01 ~ 2023.04</span>
                            </span>
                        </span>
                        <span className="title">국민체력100(리뉴얼)</span>
                    </Link>
                </li>
                {/* Maintanance & Web Accesability */}
                <li className="total mt wa">
                    <Link to="https://kspo.or.kr/" target="_blank">
                        <img src={pfImg.kspo} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수 및 사이트 리뉴얼 작업</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">구축 간 웹 접근성 인증<br/>웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="dot">유지보수 시 매년 웹접근성 인증마크 획득 웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">국민체육진흥공단 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://svoucher.kspo.or.kr/" target="_blank">
                        <img src={pfImg.svoucher} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포츠강좌이용권 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://dvoucher.kspo.or.kr/" target="_blank">
                        <img src={pfImg.dvoucher} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">장애인 스포츠강좌이용권 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://spoinfo.or.kr/" target="_blank">
                        <img src={pfImg.spoinfo} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">체육시설알리미 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://www.sports.re.kr/index.html" target="_blank">
                        <img src={pfImg.sports} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포츠정책과학원 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://soma.kspo.or.kr/" target="_blank">
                        <img src={pfImg.soma} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">소마미술관 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://sqms.kspo.or.kr/index.kspo" target="_blank">
                        <img src={pfImg.insports} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">체육지도자연수 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://spobiz.kspo.or.kr/" target="_blank">
                        <img src={pfImg.spobiz} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포츠산업지원 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://spoex.com/" target="_blank">
                        <img src={pfImg.spoex} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포엑스 포털</span>
                    </Link>
                </li>
                <li className="total mt wa">
                    <Link to="https://cleansports.kspo.or.kr" target="_blank">
                        <img src={pfImg.cleansports} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">불법스포트토토신고센터 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://88olympic.kspo.or.kr/museum_new/index.asp" target="_blank">
                        <img src={pfImg.museum} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">올림픽체육박물관 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://css.kspo.or.kr/" target="_blank">
                        <img src={pfImg.css} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포츠과학센터 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://88olympic.kspo.or.kr/" target="_blank">
                        <img src={pfImg.olympic} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">올림픽기념관 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://library.kspo.or.kr/" target="_blank">
                        <img src={pfImg.library} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">올림픽자료실 포털</span>
                    </Link>
                </li>
                <li className="total mt">
                    <Link to="https://parktel.co.kr/" target="_blank">
                        <img src={pfImg.parktel} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">올림픽파크텔 포털</span>
                    </Link>
                </li>
                {/* Maintanance */}

                {/* Pc version */}
                <li className="total pc">
                    <Link to="http://www.moducoding.com" target="_blank">
                        <img src={pfImg.modu} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2018.05 ~ 2018.10</span>
                            </span>
                        </span>
                        <span className="title">모두의코딩</span>
                    </Link>
                </li>
                <li className="total pc">
                    <Link to="http://9988hospital.co.kr" target="_blank">
                        <img src={pfImg.nnee} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">9988병원</span>
                    </Link>
                </li>
                <li className="total pc">
                    <Link to="http://dodreamps.com" target="_blank">
                        <img src={pfImg.dodream} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">두드림성형외과</span>
                    </Link>
                </li>
                <li className="total pc">
                    <Link to="http://www.cvrc.kr" target="_blank">
                        <img src={pfImg.crc} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">심혈관연구소</span>
                    </Link>
                </li>
                <li className="total pc">
                    <Link to="http://www.omdi.co.kr" target="_blank">
                        <img src={pfImg.omdi} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">인애한의원</span>
                    </Link>
                </li>
                <li className="total pc">
                    <Link to="http://naturalface.co.kr/index.php" target="_blank">
                        <img src={pfImg.natural} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">자연주의성형외과</span>
                    </Link>
                </li>
                {/* Pc Version */}

                {/* Mo Version */}
                
                {/* Mo Version */}

                {/* Responsive */}
                <li className="total rs">
                    <Link to="http://jnsdream.com" target="_blank">
                        <img src={pfImg.jns} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">JNS 커뮤니케이션</span>
                    </Link>
                </li>
                <li className="total rs">
                    <Link to="http://www.englishegg.co.kr" target="_blank">
                        <img src={pfImg.egg} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축 참여</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">잉글리시에그</span>
                    </Link>
                </li>
                <li className="total rs">
                    <Link to="http://www.doojung.com" target="_blank">
                        <img src={pfImg.doojung} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">두정물산</span>
                    </Link>
                </li>
                <li className="total rs">
                    <Link to="http://www.kmt1.co.kr" target="_blank">
                        <img src={pfImg.kmt} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">(유)케이엠티</span>
                    </Link>
                </li>
                <li className="total rs">
                    <Link to="http://www.perkinelmer.co.kr" target="_blank">
                        <img src={pfImg.perkin} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">퍼킨엘머코리아</span>
                    </Link>
                </li>
                {/* Responsive */}

                {/* Cafe24 */}
                <li className="total cf">
                    <Link to="https://marsmark.com/" target="_blank">
                        <img src={pfImg.marsmark} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">마스마르크 쥬얼리</span>
                    </Link>
                </li>
                {/* <li className="total cf">
                    <Link to="https://revewearing.com/" target="_blank">
                        <img src={pfImg.reve} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">레브 쥬얼리</span>
                    </Link>
                </li> */}
                <li className="total cf">
                    <Link to="https://heradi-jewelry.com/" target="_blank">
                        <img src={pfImg.heradi} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">해러디 쥬얼리</span>
                    </Link>
                </li>
                {/* Cafe24 */}
                </ul>
            </div>
        </>
    )
}

export default List