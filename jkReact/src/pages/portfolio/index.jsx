import React from "react";
import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import "@/js/isotope.pkgd.min.js"

function Page() {
  
  return (
    <>
      <div className="portfolio">
        <div className="w1200">
          <div className="container">
              <div className="listTab">
                  list filter area
                  <ul>
                    <li data-type="all">All</li>
                    <li data-type="pc">PC</li>
                    <li data-type="mo">Mobile</li>
                    <li data-type="res">Responsive</li>
                    <li data-type="wa">Web Accessibility</li>
                    <li data-type="cf">Cafe24</li>
                    <li data-type="cf">Maintanance</li>
                  </ul>
              </div>

              <div className="listCont">
                  <ul>
                    {/* start area of portfolio */}
                    <li className="pc">
                      <Link to="https://www.justintime-capital.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/just.png" className=""> */}
                            <div className="">
                              <div className="">
                                저스트인타임 대부<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                저스트인타임 대부
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="https://m.justintime-capital.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/mo_just.png" className=""> */}
                            <div className="">
                              <div className="">
                                저스트인타임 대부<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                저스트인타임 대부 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="https://sunnycapital.net/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/sunny.png" className=""> */}
                            <div className="">
                              <div className="">
                                써니캐피탈 대부<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                써니캐피탈 대부
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="https://m.sunnycapital.net/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/mo_sunny.png" className=""> */}
                            <div className="">
                              <div className="">
                                써니캐피탈 대부<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                써니캐피탈 대부 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="https://barocredit.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/baro.png" className=""> */}
                            <div className="">
                              <div className="">
                                바로크레디트 대부<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                바로크레디트 대부
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="https://m.barocredit.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/mo_baro.png" className=""> */}
                            <div className="">
                              <div className="">
                                바로크레디트 대부<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                바로크레디트 대부 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="pc wa">
                      <Link to="https://adiga.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/adiga.png" className=""> */}
                            <div className="">
                              <div className="">
                                대입정보포털 어디가<br/>
                                역할 : 퍼블리싱 PL<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                대입정보포털 어디가
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="https://m.adiga.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/m_adiga.png" className=""> */}
                            <div className="">
                              <div className="">
                                대입정보포털_어디가<br/>
                                역할 : 퍼블리싱 PL
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                대입정보포털 어디가 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="res wa">
                      <Link to="https://nfa.kspo.or.kr/main.kspo" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/nfa02.png" className=""> */}
                            <div className="">
                              <div className="">
                                국민체력100<br/>
                                역할 : admin 퍼블리싱 및 
                                웹접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                국민체력100
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    {/* Maintanance & Web Accesability */}
                    <li className="maintanance res wa">
                      <Link to="https://kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/kspo.png" className=""> */}
                            <div className="">
                              <div className="">
                                국민체육진흥공단<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                국민체육진흥공단
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="maintanance res wa">
                      <Link to="https://svoucher.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/sv.png" className=""> */}
                            <div className="">
                              <div className="">
                                스포츠강좌이용권<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                스포츠강좌이용권
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="maintanance res wa">
                      <Link to="https://dvoucher.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/dv.png" className=""> */}
                            <div className="">
                              <div className="">
                                장애인 스포츠강좌이용권<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                장애인 스포츠강좌이용권
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="maintanance res wa">
                      <Link to="https://spoinfo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/spoinfo.png" className=""> */}
                            <div className="">
                              <div className="">
                                체육시설 알리미<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                체육시설 알리미
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="maintanance wa">
                      <Link to="https://sports.re.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/kiss.png" className=""> */}
                            <div className="">
                              <div className="">
                                한국스포츠정책과학원<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                한국스포츠정책과학원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="maintanance res wa">
                      <Link to="https://soma.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/soma.png" className=""> */}
                            <div className="">
                              <div className="">
                                소마미술관<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수<br/>
                                웹 접근성 인증마크 획득
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                소마미술관
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://nfa.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/nfa.png" className=""> */}
                            <div className="">
                              <div className="">
                                국민체력100<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                국민체력100
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://insports.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/insports.png" className=""> */}
                            <div className="">
                              <div className="">
                                체육지도자연수원<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                체육지도자연수원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://spobiz.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/spobiz.png" className=""> */}
                            <div className="">
                              <div className="">
                                스포츠산업지원<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                스포츠산업지원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance res">
                      <Link to="https://spoex.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/spoex.png" className=""> */}
                            <div className="">
                              <div className="">
                                스포츠레저산업전<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                스포츠레저산업전
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance res">
                      <Link to="https://cleansports.kspo.or.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/toto.png" className=""> */}
                            <div className="">
                              <div className="">
                                불법스포츠토토신고센터<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                불법스포츠토토신고센터
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://88olympic.kspo.or.kr/museum_new/index.asp" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/museum.png" className=""> */}
                            <div className="">
                              <div className="">
                                국립체육박물관<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수 asp 사이트
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                국립체육박물관
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance res">
                      <Link to="https://css.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/css_kspo.png" className=""> */}
                            <div className="">
                              <div className="">
                                지역스포츠과학센터<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                지역스포츠과학센터
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://88olympic.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/88olympic.png" className=""> */}
                            <div className="">
                              <div className="">
                                올림픽기념관<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수 asp 사이트
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                올림픽기념관
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://library.kspo.or.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/library.png" className=""> */}
                            <div className="">
                              <div className="">
                                올림픽기념관 자료실<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                올림픽기념관 자료실
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="maintanance pc">
                      <Link to="https://parktel.co.kr/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/parktel.png" className=""> */}
                            <div className="">
                              <div className="">
                                올림픽파크텔<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수 asp 사이트
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                올림픽파크텔
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    {/* Maintanance */}

                    {/* Pc version */}
                    <li className="pc">
                      <Link to="http://www.moducoding.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/modu.png" className=""> */}
                            <div className="">
                              <div className="">
                                모두의코딩<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                모두의코딩
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://9988hospital.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/9988.png" className=""> */}
                            <div className="">
                              <div className="">
                                9988병원<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                9988병원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://dodreamps.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/dodream.png" className=""> */}
                            <div className="">
                              <div className="">
                                두드림성형외과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                두드림성형외과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.nowdc.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/bpnow.png" className=""> */}
                            <div className="">
                              <div className="">
                                부평나우치과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                부평나우치과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.cvrc.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/cvrc.png" className=""> */}
                            <div className="">
                              <div className="">
                                사단법인 심혈관 연구원<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                사단법인 심혈관 연구원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.seoulista-ps.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/listar.png" className=""> */}
                            <div className="">
                              <div className="">
                                서울리스타성형외과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                서울리스타성형외과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://yk5151.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/yk.png" className=""> */}
                            <div className="">
                              <div className="">
                                압구정YK성형외과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                압구정YK성형외과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.omdi.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/omdi.png" className=""> */}
                            <div className="">
                              <div className="">
                                인애한의원<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                인애한의원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://naturalface.co.kr/index.php" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/natural.png" className=""> */}
                            <div className="">
                              <div className="">
                                자연주의성형외과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                자연주의성형외과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://citygas.or.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/citygas.png" className=""> */}
                            <div className="">
                              <div className="">
                                한국도시가스<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                한국도시가스
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.miraedosi.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/miraedosi.png" className=""> */}
                            <div className="">
                              <div className="">
                                미래도시건설<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                미래도시건설
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://24onnuri.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/onnuri.png" className=""> */}
                            <div className="">
                              <div className="">
                                24시도그앤캣동물의료센터<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 60%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                24시 도그앤캣 동물의료센터
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.goyangmaum.org" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/goyang.png" className=""> */}
                            <div className="">
                              <div className="">
                                고양시정신건강증진센터<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/ 50%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                고양시정신건강증진센터
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.goodortho.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/goodsmile.png" className=""> */}
                            <div className="">
                              <div className="">
                                굿스마일치과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                굿스마일치과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.koreavein.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/central.png" className=""> */}
                            <div className="">
                              <div className="">
                                센트럴흉부외과의원<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                센트럴흉부외과의원
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.misoskin.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/miso.png" className=""> */}
                            <div className="">
                              <div className="">
                                미소지움피부과<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                미소지움피부과
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="pc">
                      <Link to="http://www.woomyun.or.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/woomyun.png" className=""> */}
                            <div className="">
                              <div className="">
                                우면종합사회복지관<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                우면종합사회복지관
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    {/* Pc Version */}

                    {/* Mo Version */}
                    <li className="mo">
                      <Link to="https://nfa.kspo.or.kr/mo/main/main.do?menu_seq=0" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/nfa_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                국민체력100 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                국민체력100 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="https://spobiz.kspo.or.kr/mo/index.do" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/spobiz_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                스포츠산업지원 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                스포츠산업지원 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="https://www.sports.re.kr/mo/main/main.do?menu_seq=0" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/kiss_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                한국스포츠정책과학원 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                퍼블리싱 유지보수
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                한국스포츠정책과학원 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://m.9988hospital.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/9988_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                9988병원 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                9988병원 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://m.nowdc.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/bpnow_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                부평나우치과 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                부평나우치과 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://m.yk5151.vizensoft.com:92" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/yk_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                압구정YK성형외과 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                압구정YK성형외과 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://naturalface.co.kr/m/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/natural_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                자연주의성형외과 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                자연주의성형외과 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://m.24onnuri.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/onnuri_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                24시도그앤캣동물의료센터 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                24시 도그앤캣 동물의료센터 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://m.goodortho.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/goodsmile_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                굿스마일치과 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                굿스마일치과 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="mo">
                      <Link to="http://m.koreavein.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/central_m.png" className=""> */}
                            <div className="">
                              <div className="">
                                센트럴흉부외과의원 모바일<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                센트럴흉부외과의원 모바일
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    {/* Mo Version */}

                    {/* Responsive */}
                    <li className="res">
                      <Link to="http://thebms.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/bms.png" className=""> */}
                            <div className="">
                              <div className="">
                                (주)더비엠에스<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                (주)더비엠에스
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://gotitcorp.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/gotit.png" className=""> */}
                            <div className="">
                              <div className="">
                                (주)갓잇<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                (주)갓잇
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://sunshinereport.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/2bcnc.png" className=""> */}
                            <div className="">
                              <div className="">
                                투비씨앤씨(주)<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                투비씨앤씨(주)
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://jnsdream.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/jns.png" className=""> */}
                            <div className="">
                              <div className="">
                                제이앤에스커뮤니케이션즈<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                제이앤에스커뮤니케이션즈
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://www.englishegg.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/egg.png" className=""> */}
                            <div className="">
                              <div className="">
                                잉글리시에그<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                잉글리시에그
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://www.doojung.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/doojung.png" className=""> */}
                            <div className="">
                              <div className="">
                                두정물산<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                두정물산
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://www.kmt1.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/kmt.png" className=""> */}
                            <div className="">
                              <div className="">
                                케이엠티<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                케이엠티
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://www.perkinelmer.co.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/perkin.png" className=""> */}
                            <div className="">
                              <div className="">
                                퍼킨엘머<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                퍼킨엘머
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="res">
                      <Link to="http://sjmotor.vizensoft.com:92" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/shinjung.png" className=""> */}
                            <div className="">
                              <div className="">
                                (주)신정개발특장차<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                (주)신정개발특장차
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    {/* Responsive */}

                    {/* Cafe24 */}
                    <li className="cf">
                      <Link to="http://rabbitstamp.com" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/rabbitstamp.png" className=""> */}
                            <div className="">
                              <div className="">
                                래빗스템프<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                레빗스템프
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="cf">
                      <Link to="http://a-tune.kr" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/atune.png" className=""> */}
                            <div className="">
                              <div className="">
                                에이튠엔터테인먼트<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                에이튠엔터테인먼트
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="cf">
                      <Link to="https://marsmark.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/marmark.png" className=""> */}
                            <div className="">
                              <div className="">
                                마스마르크 쥬얼리<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                마스마르크 쥬얼리
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="cf">
                      <Link to="https://revewearing.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/reve.png" className=""> */}
                            <div className="">
                              <div className="">
                                레브 쥬얼리<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                레브 쥬얼리
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    <li className="cf">
                      <Link to="https://heradi-jewelry.com/" target="_blank">
                        <div className="">
                          <div className="">
                            {/* <img src="img/sc/heradi.png" className=""> */}
                            <div className="">
                              <div className="">
                                허라디 쥬얼리<br/>
                                역할 : 퍼블리싱<br/>
                                HTML/CSS/JS 100%
                              </div>
                            </div>
                            <span className="">
                              <span className="">
                                허라디 쥬얼리
                              </span>
                            </span>
                            <span className="">
                              <span className=""><i className=""></i></span>
                            </span>
                          </div>
                      </div>
                      </Link>
                    </li>
                    {/* Cafe24 */}
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
