import React, { useEffect, useRef, useState } from "react";
import List from "@/components/list2.jsx";
import Filter from "@/components/filter.jsx";
function Page() {
  return (
    <>
      <div className="portfolio">
        <div className="w1200">
          <div className="container">
              <List></List>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
