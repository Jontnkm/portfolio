import React from "react";
import Lnb from '@/components/menu'
import Curtain from '@/components/curtain'
import Floating from '@/components/floating'

import List from "@/components/list2.jsx";

import Lcn from "@/components/lotto.jsx";

function Page() {
  window.addEventListener('resize', function() {
      location.href = location.href;
  });
  return (
    <>
      <div className="web_menu">
        <Lnb/>
      </div>
      
      <div className="mainVisual">
        <Floating/>
      </div>
      
      <Curtain/>

      <div className="portfolio">
        <div className="w1200">
          <div className="container">
              <List></List>
          </div>
        </div>
      </div>

      <div className="lcnBox">
        <div className="lcnContainer">
            <Lcn></Lcn>
        </div>
      </div>
    </>
  )
}

export default Page
