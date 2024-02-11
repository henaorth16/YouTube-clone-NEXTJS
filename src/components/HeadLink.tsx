import React from 'react'
import logoSvg from '../assets/svg/logo.svg'


function HeadLink() {
    return (
        <div className='main-links flex justify-center main-links w-[15rem] h-[2rem] overflow-hidden static top-0'>
            <div className='toggler flex flex-col justify-evenly items-center cursor-pointer w-[30px] h-[33px] p-[2px]'><span></span><span></span><span></span></div>
            <div className='Logo'>
                <a href="/" className='flex p-0 h-full ml-4 items-center'>
                    <img className='w-full h-full' src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="logo image" />
                    <h2 className='text-[1.5rem] font-mono'>YOUTUBE</h2>
                </a>
            </div>
        </div>
    )
}

export default HeadLink
