import React from "react";
import { useState, useEffect } from 'react'

function Curtain () {
    useEffect(() => {
        setTimeout(()=>{
          curtainOpen();
        },100);
    }, []);

    function curtainOpen() {
        var win_w = window.innerWidth;
        var win_h = window.innerHeight;

        const ct01 = document.querySelector(".curtain01");
        const ct02 = document.querySelector(".curtain02");
        const ct03 = document.querySelector(".curtain03");
        const ct04 = document.querySelector(".curtain04");

        // console.log(win_w , win_h);
        // window.addEventListener("load", function(){
          ct01.style.top = win_h + "px";
          ct02.style.left = win_w + "px";
          ct03.style.right = win_w + "px";
          ct04.style.bottom = win_h + "px";
        // })
    }
    
  return (
    <>
      <div className="curtain_call curtain01"></div>
      <div className="curtain_call curtain02"></div>
      <div className="curtain_call curtain03"></div>
      <div className="curtain_call curtain04"></div>
    </>
  )
}
export default Curtain
