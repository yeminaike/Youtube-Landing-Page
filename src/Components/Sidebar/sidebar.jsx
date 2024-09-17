import React from 'react';
import Home from '../core/Home';
import Shorts from '../core/Shorts';
import Subscriptions from '../core/Subscriptions';
import Music from '../core/Music';
import You from '../core/You';
import Download from '../core/Download'

export default function Sidebar() {
    const linkGroups = [
        {
            img: <Home />,
            text: "Home",
            link: "/"
        },
        {
            img: <Shorts />,
            text: "Shorts",
            link: "/"
        },
        {
            img: <Subscriptions />,
            text: "Subscriptions",
            link: "/"
        },

        {
            img: <Music />,
            text: "Youtube Music",
            link: "/"
        },

        {
            img: <You />,
            text: "You",
            link: "/"
        },

        {
            img: <Download />,
            text: "download",
            link: "/"
        }
    ];

    return (
        <div className="text-black px-[1rem] whitespace-nowrap ">
            <ul>
                {linkGroups.length > 0 ? (
                    linkGroups.map((side, index) => (
                        <li key={index} className="mt-[1.5rem]">
                            <a href={side.link} className="">
                                {side.img} 
                                <span className="">{side.text}</span>
                            </a>
                        </li>
                    ))
                ) : (
                    <p className="text-center">No links available</p>
                )}
            </ul>
        </div>
    );
}
