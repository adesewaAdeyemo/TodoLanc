import React from "react";
import SideNav from './Nav/SideNav'
import TopNav from './Nav/TopNav'


export default function MainTpl({children}) {

  return (

    
    <div className="">
      <TopNav />
      <div className="flex flex-row">
        <SideNav />
        <div className="main w-full p-9 overflow-scroll">{children}</div>
      </div>
    </div>

  );
}
