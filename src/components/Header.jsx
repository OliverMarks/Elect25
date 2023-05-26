import React from "react";

import Search from "./search";




const Header = ({constituencyID, setConstituencyID}) => {


return (

    <div className='h-16 w-screen bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900 flex justify-start items-center flex-row pl-20'>
    <Search
    constituencyID = {constituencyID}
    setConstituencyID ={setConstituencyID} />
    
    <h1 className='text-white font-semibold ml-60 flex text-6xl'>UK Election Dash</h1>
    </div>

)



}

export default Header