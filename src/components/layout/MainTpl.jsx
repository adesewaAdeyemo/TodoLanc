import React from "react";
import SideNav from './Nav/SideNav'
import TopNav from './Nav/TopNav'


export default function MainTpl({content}) {

  return (

    
    <div className="">
      <TopNav />
      <div className="flex flex-row">
        <SideNav />
        <div className="main w-full p-9 overflow-scroll">{content}</div>
      </div>
    </div>

  );
}
