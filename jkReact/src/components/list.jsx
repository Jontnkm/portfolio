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
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://www.justintime-capital.com/" target="_blank">
                    <img src={pfImg.just} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.justintime-capital.com/" target="_blank">
                    <img src={pfImg.mo_just} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://sunnycapital.net/" target="_blank">
                    <img src={pfImg.sunny} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.sunnycapital.net/" target="_blank">
                    <img src={pfImg.mo_sunny} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://barocredit.com/" target="_blank">
                    <img src={pfImg.baro} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.barocredit.com/" target="_blank">
                    <img src={pfImg.mo_baro} className="" />
                    </Link>
                </li>
                <li className={`galList pc wa ${filterType === 'total' || filterType === 'pc' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://adiga.kr/" target="_blank">
                    <img src={pfImg.adiga} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://m.adiga.kr/" target="_blank">
                    <img src={pfImg.m_adiga} className="" />
                    </Link>
                </li>
                <li className={`galList res wa ${filterType === 'total' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://nfa.kspo.or.kr/main.kspo" target="_blank">
                    <img src={pfImg.nfa02} className="" />
                    </Link>
                </li>
                {/* Maintanance & Web Accesability */}
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://kspo.or.kr/" target="_blank">
                    <img src={pfImg.kspo} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://svoucher.kspo.or.kr/" target="_blank">
                    <img src={pfImg.sv} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://dvoucher.kspo.or.kr/" target="_blank">
                    <img src={pfImg.dv} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://spoinfo.or.kr/" target="_blank">
                    <img src={pfImg.spoinfo} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance wa ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://sports.re.kr/" target="_blank">
                    <img src={pfImg.kiss} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res wa ${filterType === 'total' || filterType === 'maintanance' || filterType === 'res' || filterType === 'wa' ? 'block' : 'hidden'}`}>
                    <Link to="https://soma.kspo.or.kr/" target="_blank">
                    <img src={pfImg.soma} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://nfa.kspo.or.kr/" target="_blank">
                    <img src={pfImg.nfa} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://insports.or.kr/" target="_blank">
                    <img src={pfImg.insports} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://spobiz.kspo.or.kr/" target="_blank">
                    <img src={pfImg.spobiz} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="https://spoex.com/" target="_blank">
                    <img src={pfImg.spoex} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="https://cleansports.kspo.or.kr" target="_blank">
                    <img src={pfImg.toto} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://88olympic.kspo.or.kr/museum_new/index.asp" target="_blank">
                    <img src={pfImg.museum} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance res ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="https://css.kspo.or.kr/" target="_blank">
                    <img src={pfImg.css_kspo} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://88olympic.kspo.or.kr/" target="_blank">
                    <img src={pfImg.img88olympic} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://library.kspo.or.kr/" target="_blank">
                    <img src={pfImg.library} className="" />
                    </Link>
                </li>
                <li className={`galList maintanance pc ${filterType === 'total' || filterType === 'maintanance' ||  filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="https://parktel.co.kr/" target="_blank">
                    <img src={pfImg.parktel} className="" />
                    </Link>
                </li>
                {/* Maintanance */}

                {/* Pc version */}
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.moducoding.com" target="_blank">
                    <img src={pfImg.modu} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://9988hospital.co.kr" target="_blank">
                    <img src={pfImg.img9988} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://dodreamps.com" target="_blank">
                    <img src={pfImg.dodream} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.nowdc.kr" target="_blank">
                    <img src={pfImg.bpnow} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.cvrc.kr" target="_blank">
                    <img src={pfImg.cvrc} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.seoulista-ps.com" target="_blank">
                    <img src={pfImg.listar} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://yk5151.com" target="_blank">
                    <img src={pfImg.yk} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.omdi.co.kr" target="_blank">
                    <img src={pfImg.omdi} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://naturalface.co.kr/index.php" target="_blank">
                    <img src={pfImg.natural} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://citygas.or.kr" target="_blank">
                    <img src={pfImg.citygas} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.miraedosi.com" target="_blank">
                    <img src={pfImg.miraedosi} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://24onnuri.com" target="_blank">
                    <img src={pfImg.onnuri} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.goyangmaum.org" target="_blank">
                    <img src={pfImg.goyang} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.goodortho.co.kr" target="_blank">
                    <img src={pfImg.goodsmile} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.koreavein.com" target="_blank">
                    <img src={pfImg.central} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.misoskin.com" target="_blank">
                    <img src={pfImg.miso} className="" />
                    </Link>
                </li>
                <li className={`galList pc ${filterType === 'total' || filterType === 'pc' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.woomyun.or.kr" target="_blank">
                    <img src={pfImg.woomyun} className="" />
                    </Link>
                </li>
                {/* Pc Version */}

                {/* Mo Version */}
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://nfa.kspo.or.kr/mo/main/main.do?menu_seq=0" target="_blank">
                    <img src={pfImg.nfa_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://spobiz.kspo.or.kr/mo/index.do" target="_blank">
                    <img src={pfImg.spobiz_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="https://www.sports.re.kr/mo/main/main.do?menu_seq=0" target="_blank">
                    <img src={pfImg.kiss_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.9988hospital.co.kr" target="_blank">
                    <img src={pfImg.img9988_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.nowdc.kr" target="_blank">
                    <img src={pfImg.bpnow_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.yk5151.vizensoft.com:92" target="_blank">
                    <img src={pfImg.yk_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://naturalface.co.kr/m/" target="_blank">
                    <img src={pfImg.natural_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.24onnuri.com" target="_blank">
                    <img src={pfImg.onnuri_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.goodortho.co.kr" target="_blank">
                    <img src={pfImg.goodsmile_m} className="" />
                    </Link>
                </li>
                <li className={`galList mo ${filterType === 'total' || filterType === 'mo' ? 'block' : 'hidden'}`}>
                    <Link to="http://m.koreavein.com" target="_blank">
                    <img src={pfImg.central_m} className="" />
                    </Link>
                </li>
                {/* Mo Version */}

                {/* Responsive */}
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://thebms.co.kr" target="_blank">
                    <img src={pfImg.bms} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://gotitcorp.com" target="_blank">
                    <img src={pfImg.gotit} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://sunshinereport.co.kr" target="_blank">
                    <img src={pfImg.img2bcnc} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://jnsdream.com" target="_blank">
                    <img src={pfImg.jns} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.englishegg.co.kr" target="_blank">
                    <img src={pfImg.egg} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.doojung.com" target="_blank">
                    <img src={pfImg.doojung} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.kmt1.co.kr" target="_blank">
                    <img src={pfImg.kmt} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://www.perkinelmer.co.kr" target="_blank">
                    <img src={pfImg.perkin} className="" />
                    </Link>
                </li>
                <li className={`galList res ${filterType === 'total' ||  filterType === 'res' ? 'block' : 'hidden'}`}>
                    <Link to="http://sjmotor.vizensoft.com:92" target="_blank">
                    <img src={pfImg.shinjung} className="" />
                    </Link>
                </li>
                {/* Responsive */}

                {/* Cafe24 */}
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="http://rabbitstamp.com" target="_blank">
                    <img src={pfImg.rabbitstamp} className="" />
                    </Link>
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="http://a-tune.kr" target="_blank">
                    <img src={pfImg.atune} className="" />
                    </Link>
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="https://marsmark.com/" target="_blank">
                    <img src={pfImg.marmark} className="" />
                    </Link>
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="https://revewearing.com/" target="_blank">
                    <img src={pfImg.reve} className="" />
                    </Link>
                </li>
                <li className={`galList cf ${filterType === 'total' ||  filterType === 'cf' ? 'block' : 'hidden'}`}>
                    <Link to="https://heradi-jewelry.com/" target="_blank">
                    <img src={pfImg.heradi} className="" />
                    </Link>
                </li>
                {/* Cafe24 */}
                </ul>
            </div>
        </>
    )
}

export default List