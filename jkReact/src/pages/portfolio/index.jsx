import React from "react";
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import "@/js/isotope.pkgd.min.js"

function Page() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 110
    },
    cellsByRow: {
      columnWidth: 220,
      rowHeight: 220
    },
    masonryHorizontal: {
      rowHeight: 110
    },
    cellsByColumn: {
      columnWidth: 220,
      rowHeight: 220
    }
  });

  var isHorizontal = false;
  var $window = $( window );

  $('.layout-mode-button-group').on( 'click', 'button', function() {
    // adjust container sizing if layout mode is changing from vertical or horizontal
    var $this = $(this);
    var isHorizontalMode = !!$this.attr('data-is-horizontal');
    if ( isHorizontal !== isHorizontalMode ) {
      // change container size if horiz/vert change
      var containerStyle = isHorizontalMode ? {
        height: $window.height() * 0.7
      } : {
        width: 'auto'
      };
      $grid.css( containerStyle );
      isHorizontal = isHorizontalMode;
    }
    // change layout mode
    var layoutModeValue = $this.attr('data-layout-mode');
    $grid.isotope({ layoutMode: layoutModeValue });
  });  

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  return (
    <>
      <div className="portfolio">
        <div className="container">
            <div className="listTab">
                <button data-filter="*">All</button>
                <button data-filter=".pc">PC</button>
                <button data-filter=".mo">Mobile</button>
                <button data-filter=".res">Responsive</button>
                <button data-filter=".wa">Web Accessibility</button>
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
