import React from "react";

import '../App.css'
import Search from "./search";



const Welcome = ({constituencyID, setConstituencyID, prevSelectedConstituencies, setPrevSelectedConstituencies}) => {


return (

    <div className="h-screen flex flex-col justify-center items-center ">
        
        
        <h1 className="text-7xl text-emerald-900 underline mb-12">UK Election Dash</h1>

    <div className="w-1/2 p-6 text-white bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900 flex flex-col justify-center items-center rounded-lg">
    <p>This website allows voters to see a breakdown of their constituency including a summary of their current MP, previous election results and
        a breakdown of the 2019 Election Results using the <a className="underline" href="https://members-api.parliament.uk/index.html">UK Parliament's API</a>.
         Simply search and select your constituency to find out more. 
    </p>


    <div className="my-8">
    <Search
    constituencyID={constituencyID}
    setConstituencyID={setConstituencyID}
    prevSelectedConstituencies={prevSelectedConstituencies}
    setPrevSelectedConstituencies={setPrevSelectedConstituencies}/>
    </div>
    </div>

  </div>

)





}


export default Welcome