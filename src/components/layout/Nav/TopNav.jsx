import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function TopNav(){
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch(`https://api.github.com/users/adesewaAdeyemo`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  
    }, []);


    return user ? (
      <div className="top-nav w-full border-b-2 border-gray-100 py-3 pr-9 pl-9 bg-white">
        <div className="flex flex-row justify-between align-middle items-center">
          <div className="">
            <Link href={"/"} className="text-3xl text-cyan-800 font-bold">
              CheckOut
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url? user.avatar_url: "https://api.dicebear.com/5.x/adventurer/svg"}
              className="rounded-full size-10 object-cover object-center"
            />

            <div className="flex flex-col text-gray-500">
              <h1>{user.name ? user.name : "My UserName"}</h1>
              <p>{user.role ? user.role : "User Role" }</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="top-nav hidden"></div>
    );
}
