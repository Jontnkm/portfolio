import React from "react";
import Lnb from '@/components/menu'
import Curtain from '@/components/curtain'
import Floating from '@/components/floating'

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
    </>
  )
}

export default Page
