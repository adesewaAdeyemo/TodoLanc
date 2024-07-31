import React from 'react'
import { Link } from 'react-router-dom';
export default function SideNav() {
  return (
    <div className="bg-white">
      <div className="sidenav flex flex-col pb-3 justify-between w-60 border-r-2 border-gray-100">
        <div className="flex flex-col">
          {/* <div className="logo px-5 pb-4">
            <h1>
              <Link to={#} className="text-3xl text-cyan-800 font-bold">
                CheckOut
              </Link>
            </h1>
          </div> */}
          <div className="home border-b-2 py-2 px-9">
            <Link to={"/"} className="text-md text-gray-900">
              My Space
            </Link>
          </div>
          <div className="task border-b-2 py-2 px-9">
            <Link to={"/todo"} className="text-md text-gray-900">
              Task
            </Link>
          </div>
          <div className="team border-b-2 py-2 px-9">
            <Link to={"/team"} className="text-md text-gray-900">
              Team
            </Link>
          </div>
          <div className="project border-b-2 py-2 px-9">
            <Link to={"/projects"} className="text-md text-gray-900">
              Project
            </Link>
          </div>
        </div>
        <div className="logout border-t-2  pt-2 px-9">
          <Link to={"/"} className="text-md text-gray-900">
            LogOut
          </Link>
        </div>
      </div>
    </div>
  );
}
