import React from "react";
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import "@/js/isotope.pkgd.min.js"

function Page() {
  
  return (
    <>
      <div className="portfolio">
        <div className="container">
            <div className="listTab">
                <ul>
                  <li>All</li>
                  <li>PC</li>
                  <li>Mobile</li>
                  <li>Responsive</li>
                  <li>Web Accessibility</li>
                </ul>
            </div>

            <div className="listCont">
                <div className="grid">
                  <div className="grid-item grid-item--width2">1</div>
                  <div className="grid-item grid-item--height2">2</div>
                  <div className="grid-item">3</div>
                  <div className="grid-item">4</div>
                  <div className="grid-item grid-item--width2 grid-item--height2">5</div>
                  <div className="grid-item grid-item--width2">6</div>
                  <div className="grid-item grid-item--height2">7</div>
                  <div className="grid-item">8</div>
                  <div className="grid-item">9</div>
                  <div className="grid-item">10</div>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Page
