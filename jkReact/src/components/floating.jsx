import React from "react";
import { useState, useEffect } from 'react'
import imgFloat from "@/assets/images/moving_bg.png"
function Floating () {
  return (
    <>   
        <div className="vCont">
            <img src={imgFloat} alt="" className='mv_bg'/>
        </div>
    </>
  )
}
export default Floating
