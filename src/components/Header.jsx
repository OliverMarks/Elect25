import React from "react";
import { useState, useCallback } from "react";
import Search from "./search";
import '../App.css'




const Header = ({constituencyID, setConstituencyID, prevSelectedConstituencies, setPrevSelectedConstituencies}) => {

      
    const handleSelectFromList = (constituency) => {
        setConstituencyID({
            name: constituency.name,
            id: constituency.id
          })
      };

      const handleRemoveFromList = (e, constituency) => {
        e.stopPropagation(); // Prevent event propagation
        const updatedConstituencies = prevSelectedConstituencies.filter(
          (item) => item.id !== constituency.id
        );
        setPrevSelectedConstituencies(updatedConstituencies);
      };
      


return (

    <div className='h-28 w-screen bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900 flex justify-center items-center flex-col md:pl-20'>
    
    
    <h1 className='text-white font-semibold  flex md:text-6xl'>UK Election Dash</h1>
    
    
<div className=" flex flex-row flex-wrap gap-6">
    <Search
    constituencyID = {constituencyID}
    setConstituencyID ={setConstituencyID} 
    prevSelectedConstituencies={prevSelectedConstituencies}
    setPrevSelectedConstituencies={setPrevSelectedConstituencies}
    />

    <ul className="text-white  inline-flex mb-1 gap-4 overflow-x ">
            {prevSelectedConstituencies.map((constituency) => (
              <li className="bg-gray-400 rounded-xl px-2 cursor-pointer text-xs md:text-lg"
              key={constituency.id} onClick={() => handleSelectFromList(constituency) }>
                {constituency.name}
                <span className="ml-2 hover:bg-slate-200 text-black p-1 h-2 w-2 rounded-full"
                    onClick={(e) => handleRemoveFromList(e, constituency)}>x</span>
  </li>
            ))}
          </ul>
          </div>
    
    </div>

)



}

export default Header