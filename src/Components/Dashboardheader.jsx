import React from "react";
import youtube from "../Images/youtube.png";
import SearchInput from "./SearchInput";
import profile from "../Images/profile.jpg";
import notifiaction from "../Images/notifications.PNG";
import create from "../Images/create.PNG";
import menu from "../Images/Menu.png";
import { useState } from "react";

// import { Popover, PopoverButton } from "@headlessui/react";

export default function DashboardHeader({ search, setSearch   }) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="px-[1rem]">
            <button onClick={() => setShow(true)}>
              <img alt="menu" src={menu} className="mt-[1rem]" />
            </button>
          </div>
          {show && (
            <p>Understand</p>
          )}
          <img src={youtube} alt="youtube" className="w-[4rem] h-[4rem]" />
          <p className="text-[#000] font-medium text-[1.5rem] mt-[0.7rem]">
            YouTube
          </p>

         
        </div>

        <div className="w-[40%] md:block hidden mt-[0.6rem]">
          <SearchInput
            value={search ?? ""}
            onChange={(value) => setSearch(String(value))}
          />
        </div>

        <div className="flex gap-[1rem]">
          <img src={create} alt="create" className="w-[2.5rem] h-[2.5rem]" />

          <img
            src={notifiaction}
            alt="notify"
            className="w-[2.5rem] h-[2.5rem]"
          />

          <img
            alt="profile"
            src={profile}
            className="w-[2.5rem] h-[2.5rem] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
