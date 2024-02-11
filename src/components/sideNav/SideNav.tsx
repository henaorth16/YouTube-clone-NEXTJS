import Head from 'next/head'
import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";

import {
    HomeFill,
    HomeOutline,
    ShortsFill,
    ShortsOutline,
    SubFill,
    SubOutline,
    YouFill,
    YouOutline
} from '../iconComponent'
import HeadLink from '../HeadLink'
HeadLink

function SideNav() {
    return (
        <div className='bg-[#0f0f0f] sidenav h-full w-[15.3rem] overflow-hidden fixed left-0 top-0 p-[.5rem]'>
            <div className='relative w-full h-full'>
                <HeadLink />
                <div className='overflow-y-scroll flex flex-col px-2 pt-7'>
                    <ul>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <MdHomeFilled className='text-[1.45rem]' />
                                <h2>Home</h2>
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <SiYoutubeshorts className='text-[1.45rem]' />
                                <h2>Shorts</h2>
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <MdOutlineSubscriptions className='text-[1.45rem]' />
                                <h2>Subscribers</h2>
                            </a>
                        </li>
                    </ul>
                    <hr className='w-full text-[#5f5f5f] my-3'/>
                    <ul>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <YouOutline className="fill-white text-[1.45rem]"/>
                                <h2>You</h2>
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <MdHistory className='text-[1.45rem]' />
                                <h2>History</h2>
                            </a>
                        </li>
                    </ul>
                    <hr className='w-full text-[#5f5f5f] my-3'/>
                    <h1 className='ml-3 my-1 font-bold'>Explore</h1>
                    <ul>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <YouOutline className="fill-white text-[1.45rem]"/>
                                <h2>You</h2>
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-[#272727] py-2 pl-3 rounded-lg flex justify-start text-sm items-center gap-6 w-full' href="#">
                                <CgMusicNote className='text-[1.45rem]' />
                                <h2>Music</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNav
