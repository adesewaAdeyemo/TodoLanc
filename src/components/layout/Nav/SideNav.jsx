import React, { useState } from 'react'
export default function SideNav() {
  return (
    <div className="bg-white">
      <div className="sidenav flex flex-col pb-3 justify-between w-60 border-r-2 border-gray-100">
        <div className="flex flex-col">
          {/* <div className="logo px-5 pb-4">
            <h1>
              <a href="#" className="text-3xl text-cyan-800 font-bold">
                CheckOut
              </a>
            </h1>
          </div> */}
          <div className="home border-b-2 py-2 px-9">
            <a href="#" className="text-md text-gray-900">
              My Space
            </a>
          </div>
          <div className="task border-b-2 py-2 px-9">
            <a href="#" className="text-md text-gray-900">
              Task
            </a>
          </div>
          <div className="team border-b-2 py-2 px-9">
            <a href="#" className="text-md text-gray-900">
              Team
            </a>
          </div>
          <div className="project border-b-2 py-2 px-9">
            <a href="#" className="text-md text-gray-900">
              Project
            </a>
          </div>
        </div>
        <div className="logout border-t-2  pt-2 px-9">
          <a href="#" className="text-md text-gray-900">
            LogOut
          </a>
        </div>
      </div>
    </div>
  );
}
