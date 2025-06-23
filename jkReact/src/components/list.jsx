import React, { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import {Link} from "react-router-dom"

import {pfImg} from "@/assets/images/index.js";

const List = () => {
    const galleryRef = useRef(null);
    const masonryRef = useRef(null);
    const [filterType, setFilterType] = useState("total");

    useEffect(() => {
        if (galleryRef.current && !masonryRef.current) {
            masonryRef.current = new Masonry(galleryRef.current, {
                itemSelector: '.galList',
                columnWidth: 300,
                percentPosition: true,
            });
        }
        return () => {
            if (masonryRef.current) {
                masonryRef.current.destroy();
                masonryRef.current = null;
            }
        };
        
    }, []);

    useEffect(() => {
        if (masonryRef.current) {
            masonryRef.current.layout();
        }
    }, [filterType]);

    const handleFilterChange = (type) => {
        setFilterType(type);
        console.log(type);
        if (masonryRef.current) {
            masonryRef.current.destroy();
            masonryRef.current = null;
        }
        
        if (galleryRef.current) {
            restartMansory();
        }
    };

    function restartMansory() {
        if (galleryRef.current && !masonryRef.current) {
            masonryRef.current = new Masonry(galleryRef.current, {
                itemSelector: '.galList',
                columnWidth: 300,
                percentPosition: true,
            });
        }
    }

    // 목록 카운트 함수
    function listCount() {
        const counts = {
            pc: document.querySelectorAll(".listCont ul li.pc").length,
            mo: document.querySelectorAll(".listCont ul li.mo").length,
            rs: document.querySelectorAll(".listCont ul li.res").length,
            mt: document.querySelectorAll(".listCont ul li.maintanance").length,
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

    useEffect(() => {
        listCount(); // 컴포넌트가 렌더링될 때마다 카운트 업데이트
    }, [filterType]);

    // function setHeight() {
    //     var img = document.querySelectorAll(".imgClss");

    //     img.forEach(function(image){
    //         var imgH = image.offsetHeight;
    //         // console.log(imgH);
    //         image.style.height = imgH + "px";
    //     })
    // }
    
    // setHeight();

    return (
        <>
            <div className="listTab">
                <ul>
                    <li data-type="total" className={`${filterType === 'total' ? 'active' : ''}`} onClick={() => handleFilterChange("total")}>All <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="pc" className={`${filterType === 'pc' ? 'active' : ''}`} onClick={() => handleFilterChange("pc")}>PC <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="mo" className={`${filterType === 'mo' ? 'active' : ''}`} onClick={() => handleFilterChange("mo")}>Mobile <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="rs" className={`${filterType === 'res' ? 'active' : ''}`} onClick={() => handleFilterChange("res")}>Responsive <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="wa" className={`${filterType === 'wa' ? 'active' : ''}`} onClick={() => handleFilterChange("wa")}>Web Accessibility <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="cf" className={`${filterType === 'cf' ? 'active' : ''}`} onClick={() => handleFilterChange("cf")}>Cafe24 <span className="cnt">(<b>11</b>)</span></li>
                    <li data-type="mt" className={`${filterType === 'maintanance' ? 'active' : ''}`} onClick={() => handleFilterChange("maintanance")}>Maintanance <span className="cnt">(<b>11</b>)</span></li>
                </ul>
            </div>
            <div className="listCont">
                <ul className="gallery" ref={galleryRef}>
                {/* start area of portfolio */}
                <li className={`galList res wa ${filterType === 'total' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
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
                <li className={`galList res ${filterType === 'total' || filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="https://www.justintime-capital.com/" target="_blank">
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://www.justintime-capital.com/" target="_blank">
                        <img src={pfImg.just} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.03 ~ 2024.06</span>
                            </span>
                        </span>
                        <span className="title">저스트인타임대부 PC</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.justintime-capital.com/" target="_blank">
                        <img src={pfImg.mo_just} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.03 ~ 2024.06</span>
                            </span>
                        </span>
                        <span className="title">저스트인타임대부 모바일</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://sunnycapital.net/" target="_blank">
                        <img src={pfImg.sunny} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.03 ~ 2024.06</span>
                            </span>
                        </span>
                        <span className="title">써니캐피탈대부 PC</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.sunnycapital.net/" target="_blank">
                        <img src={pfImg.mo_sunny} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">프로젝트 팀 PL</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">웹 호환성 준수<br/>웹 표준 준수</span>
                                <span className="duration">2024.03 ~ 2024.06</span>
                            </span>
                        </span>
                        <span className="title">써니캐피탈대부 모바일</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://barocredit.com/" target="_blank">
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
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.barocredit.com/" target="_blank">
                        <img src={pfImg.mo_baro} className="imgClss" />
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
                <li className={`galList pc wa ${filterType === 'total' || filterType === 'pc' || filterType === 'wa' ? 'block' : 'hidden'}`}>
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
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.adiga.kr/" target="_blank">
                        <img src={pfImg.m_adiga} className="imgClss" />
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
                <li className={`galList res wa ${filterType === 'total' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://nfa.kspo.or.kr/main.kspo" target="_blank">
                        <img src={pfImg.nfa02} className="imgClss" />
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
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
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
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://svoucher.kspo.or.kr/" target="_blank">
                        <img src={pfImg.sv} className="imgClss" />
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
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://dvoucher.kspo.or.kr/" target="_blank">
                        <img src={pfImg.dv} className="imgClss" />
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
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
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
                <li className={`galList maintanance wa ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://sports.re.kr/" target="_blank">
                        <img src={pfImg.kiss} className="imgClss" />
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
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
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
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://nfa.kspo.or.kr/" target="_blank">
                        <img src={pfImg.nfa} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">국민체력100 포털</span>
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://insports.or.kr/" target="_blank">
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
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
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
                <li className={`galList maintanance res ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
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
                <li className={`galList maintanance res ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="https://cleansports.kspo.or.kr" target="_blank">
                        <img src={pfImg.toto} className="imgClss" />
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
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://88olympic.kspo.or.kr/museum_new/index.asp" target="_blank">
                        <img src={pfImg.museum} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">올림픽체육박물관 포털</span>
                    </Link>
                </li>
                <li className={`galList maintanance res ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="https://css.kspo.or.kr/" target="_blank">
                        <img src={pfImg.css_kspo} className="imgClss" />
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
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://88olympic.kspo.or.kr/" target="_blank">
                        <img src={pfImg.img88olympic} className="imgClss" />
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
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
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
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://parktel.co.kr/" target="_blank">
                        <img src={pfImg.parktel} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="dot">매년 웹접근성 인증마크 획득<br/>웹 표준,웹 호환성 작업 진행</span>
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">올림픽파크텔 포털</span>
                    </Link>
                </li>
                {/* Maintanance */}

                {/* Pc version */}
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://9988hospital.co.kr" target="_blank">
                        <img src={pfImg.img9988} className="imgClss" />
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.nowdc.kr" target="_blank">
                        <img src={pfImg.bpnow} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">부평나우치과</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.cvrc.kr" target="_blank">
                        <img src={pfImg.cvrc} className="imgClss" />
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.seoulista-ps.com" target="_blank">
                        <img src={pfImg.listar} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">서울리스타성형외과</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://yk5151.com" target="_blank">
                        <img src={pfImg.yk} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">압구정YK성형외과</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://citygas.or.kr" target="_blank">
                        <img src={pfImg.citygas} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">한국도시가스</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.miraedosi.com" target="_blank">
                        <img src={pfImg.miraedosi} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">미래도시건설</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://24onnuri.com" target="_blank">
                        <img src={pfImg.onnuri} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">온누리동물병원</span>
                    </Link>
                </li>
                {/* <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.goyangmaum.org" target="_blank">
                        <img src={pfImg.goyang} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title"></span>
                    </Link>
                </li> */}
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.goodortho.co.kr" target="_blank">
                        <img src={pfImg.goodsmile} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">굿스마일치과</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.koreavein.com" target="_blank">
                        <img src={pfImg.central} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">센트럴흉부외과</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.misoskin.com" target="_blank">
                        <img src={pfImg.miso} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">미소지움피부과</span>
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.woomyun.or.kr" target="_blank">
                        <img src={pfImg.woomyun} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">우면사회복지관</span>
                    </Link>
                </li>
                {/* Pc Version */}

                {/* Mo Version */}
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://nfa.kspo.or.kr/mo/main/main.do?menu_seq=0" target="_blank">
                        <img src={pfImg.nfa_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>                                
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">국민체력100 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://spobiz.kspo.or.kr/mo/index.do" target="_blank">
                        <img src={pfImg.spobiz_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>                                
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포츠산업지원 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://www.sports.re.kr/mo/main/main.do?menu_seq=0" target="_blank">
                        <img src={pfImg.kiss_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">유지보수</span>
                                <span className="dot">웹퍼블리싱 100%</span>                                
                                <span className="duration">2020.03 ~ 2022.12</span>
                            </span>
                        </span>
                        <span className="title">스포츠정책과학원 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.9988hospital.co.kr" target="_blank">
                        <img src={pfImg.img9988_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">9988병원 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.nowdc.kr" target="_blank">
                        <img src={pfImg.bpnow_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">부평나우치과 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.yk5151.vizensoft.com:92" target="_blank">
                        <img src={pfImg.yk_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">압구정YK성형외과 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://naturalface.co.kr/m/" target="_blank">
                        <img src={pfImg.natural_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">자연주의성형외과 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.24onnuri.com" target="_blank">
                        <img src={pfImg.onnuri_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">온누리동물병원 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.goodortho.co.kr" target="_blank">
                        <img src={pfImg.goodsmile_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">굿스마일치과 모바일</span>
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.koreavein.com" target="_blank">
                        <img src={pfImg.central_m} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">센트럴흉부외과 모바일</span>
                    </Link>
                </li>
                {/* Mo Version */}

                {/* Responsive */}
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://thebms.co.kr" target="_blank">
                        <img src={pfImg.bms} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">더 비엠에스 포털</span>
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://gotitcorp.com" target="_blank">
                        <img src={pfImg.gotit} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">(주)갓잇 포털</span>
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://sunshinereport.co.kr" target="_blank">
                        <img src={pfImg.img2bcnc} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">투비씨엔씨</span>
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
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
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
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
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
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
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
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
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
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
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://sjmotor.vizensoft.com:92" target="_blank">
                        <img src={pfImg.shinjung} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2017.08 ~ 2017.04</span>
                            </span>
                        </span>
                        <span className="title">신정특장차</span>
                    </Link>
                </li>
                {/* Responsive */}

                {/* Cafe24 */}
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="http://rabbitstamp.com" target="_blank">
                        <img src={pfImg.rabbitstamp} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">레빗스템프 쇼핑몰</span>
                    </Link>
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="http://a-tune.kr" target="_blank">
                        <img src={pfImg.atune} className="imgClss" />
                        <span className="dataCover">
                            <span className="siteJob">
                                <span className="dot">사이트 구축</span>
                                <span className="dot">웹퍼블리싱 100%</span>
                                <span className="duration">2019.05 ~ 2020.02</span>
                            </span>
                        </span>
                        <span className="title">에이튠즈엔터테인먼트</span>
                    </Link>
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="https://marsmark.com/" target="_blank">
                        <img src={pfImg.marmark} className="imgClss" />
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
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
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
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
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