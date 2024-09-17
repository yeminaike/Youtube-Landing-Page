import React from "react";
import YoutubeCard from "./Components/YoutubeCard";
import { data } from "./Database/mockdata";
import DashboardHeader from "./Components/Dashboardheader";
import { useState } from "react";
 import Tabs from "./Components/Tabs";
 import Sidebar from "./Components/Sidebar/sidebar";

function App() {

  const [search, setSearch] = useState("")

   const filteredData = data.filter(video => (
     video.username?.toLowerCase()?.includes(search.toLowerCase()) ||
     video.title?.toLowerCase()?.includes(search.toLowerCase())

   ))
  
  return (
    <div>

      <div className="">
      <DashboardHeader search={search} setSearch={setSearch}/>
      </div> 
    
     <div className="flex">
     {/* <Sidebar/> */}
     <div className="w-full">
     {/* <Tabs/> */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {filteredData.length > 0 ? (
        filteredData?.map((item, index) => (
<div key={index} className="">
<YoutubeCard
id={item?.id}
title={item?.title}
username={item?.username}
views={item?.views}
image={item?.image}
icon={item?.icon}
duration={item?.duration}
time={item?.time}


/>


</div>


        ))

       ):(
<p>data is empty</p>

       )}
      </div>
     </div>
     
     
    </div> 
      


    



    </div>
  );
}

export default App;
