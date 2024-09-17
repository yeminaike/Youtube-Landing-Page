import React from 'react'
// import add from "../Images/add.png"



export default function YoutubeCard({title,username, image, duration, time, views, icon}) {

return(


<div className="">
<div className="mt-[2rem] px-[1rem]">

<div className='relative '>
<img
alt="youtube cover"
src={require(`../Images/${image}`)}
className='w-[100%] sm:w-[25rem] md:w-[100%] h-full rounded-2xl'
/>



<div className=" absolute right-[1rem] top-[10em] [@media(max-width:639px)]:top-[8.2rem]  sm:right-[1rem] sm:top-[8rem] md:top-[10rem] md:right-[1rem] xl:right-[2rem] xl:top-[12.6rem] lg:top-[8rem]">
<p className="text-white  bg-[#3d3c3c] w-[3rem] text-lg font-semibold rounded-md text-center">{duration}</p>
</div>
</div>

<div className="flex gap-[1rem]">

<div className="mt-[1rem]">

<img
alt='profile'
src={require(`../Images/${icon}`)}
className='w-[3rem] h-[3rem] rounded-full'
/>

</div>

<div className="mt-[1.5rem] ">
    <p>{title}</p>
    <p className='text-gray-500'>{username}</p>

    <div className="flex gap-2">
        <p className='text-gray-500'>{views}</p>
        <p className='rounded-full bg-gray-500 w-[0.3rem] h-[0.3rem] mt-[0.7rem]'></p>
        <p className='text-gray-500'>{time}</p>
    </div>
</div>



</div>


</div>



</div>







)

}

