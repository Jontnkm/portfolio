import { React, useState, useEffect } from "react";

function Filter({ onFilterChange }) {
    useEffect(() => {
        listCount();
    }, []);

    function listCount() {
        var pc = document.querySelectorAll(".listCont ul li.pc").length;
        var mo = document.querySelectorAll(".listCont ul li.mo").length;
        var rs = document.querySelectorAll(".listCont ul li.res").length;
        var mt = document.querySelectorAll(".listCont ul li.maintanance").length;
        var wa = document.querySelectorAll(".listCont ul li.wa").length;
        var cf = document.querySelectorAll(".listCont ul li.cf").length;
        var total = parseInt(pc + mo + rs + cf);

        // Count values for display
        var dt = document.querySelectorAll(".listTab ul li");
        dt.forEach(function (menu) {
            if (menu.dataset.type === "total") {
                menu.querySelector("b").textContent = total;
            } else if (menu.dataset.type === "pc") {
                menu.querySelector("b").textContent = pc;
            } else if (menu.dataset.type === "mo") {
                menu.querySelector("b").textContent = mo;
            } else if (menu.dataset.type === "rs") {
                menu.querySelector("b").textContent = rs;
            } else if (menu.dataset.type === "mt") {
                menu.querySelector("b").textContent = mt;
            } else if (menu.dataset.type === "wa") {
                menu.querySelector("b").textContent = wa;
            } else {
                menu.querySelector("b").textContent = cf;
            }
        });
    }

    function handleFilterChange(type) {
        // Trigger the parent component's filter change callback
        onFilterChange(type);
    }

    return (
        <div className="listTab">
            <ul>
                <li data-type="total" onClick={() => handleFilterChange("total")}>All <span className="cnt">(<b>11</b>)</span></li>
                <li data-type="pc" onClick={() => handleFilterChange("pc")}>PC <span className="cnt">(<b>11</b>)</span></li>
                <li data-type="mo" onClick={() => handleFilterChange("mo")}>Mobile <span className="cnt">(<b>11</b>)</span></li>
                <li data-type="rs" onClick={() => handleFilterChange("rs")}>Responsive <span className="cnt">(<b>11</b>)</span></li>
                <li data-type="wa" onClick={() => handleFilterChange("wa")}>Web Accessibility <span className="cnt">(<b>11</b>)</span></li>
                <li data-type="cf" onClick={() => handleFilterChange("cf")}>Cafe24 <span className="cnt">(<b>11</b>)</span></li>
                <li data-type="mt" onClick={() => handleFilterChange("mt")}>Maintanance <span className="cnt">(<b>11</b>)</span></li>
            </ul>
        </div>
    );
}

export default Filter;
