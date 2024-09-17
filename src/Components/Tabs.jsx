
import React from 'react'
 import { useState } from 'react'
import { Tab } from '../Database/MockTab'
import rightarrow from '../Images/arrow-right-button.png'


export default function Tabs(){

     const [activeTab, setActiveTab] = useState("")


return(

<div className="px-[2rem]">

<div className="flex gap-[1rem] my-[1rem] w-full ">

<button 
className={`py-[0.2rem]  w-full inline-flex items-center justify-center rounded-md font-medium ${activeTab === ''  ? 'bg-[#000] text-[#fff]' : 'text-black'} md:mx-1`}
onClick={() => setActiveTab('')}
            
>
All

</button>

{Tab.length > 0 ? (

Tab.map((tab, index) => (
<button key={index} 
onClick={() => setActiveTab(tab)}
    className={`w-full px-[1rem] font-medium rounded-md ${activeTab === tab ? 'bg-[#000] text-[#fff]' : 'text-black bg-[#ebe4e4]'} md:mx-1`}   
>
{tab}



</button>



))

):(


<p>Nothing dey</p>

)}


<img
src={rightarrow}
alt="rightarrow"
className='w-[2rem] h-[2rem] hover:bg-[#ebe4e4] rounded-full ]'
/>
    


</div>






</div>

)

}