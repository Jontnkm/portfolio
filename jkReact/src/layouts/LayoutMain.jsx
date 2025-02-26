import React from "react";
import Header from '@/components/Header'


function Layout({ children }) {
  return (
    <>
      <div className="wrap">
        <Header/>
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default Layout;