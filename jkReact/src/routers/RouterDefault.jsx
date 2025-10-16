import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// 라우터 통합경로
import routerConfig from "./routerConfig";

// 레이아웃
import LayoutMain from "@/layouts/LayoutMain";
import LayoutPortfolio from "@/layouts/LayoutPortfolio";
import LayoutLcn from "@/layouts/LayoutLcn";

const layouts = {
  main: LayoutMain,
  portfolio : LayoutPortfolio,
  lcn : LayoutLcn
};

function RouterDefault() {
  return (
    <Routes>
      {routerConfig.map((route) => {

        const Layout = layouts[route.layout || "portfolio"]; // 기본값은 'main'

        return (
          <Route key={route.path} path={route.path} element={
              <Layout>
                <Suspense fallback={
                  <div className="loadingBar">
                    <div className='music'>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                      <div className='bar'></div>
                    </div>
                  </div>
                  }>
                  <route.component />
                </Suspense>
              </Layout>
            }
          />
        );
        
      })}
    </Routes>
  );
}

export default RouterDefault;