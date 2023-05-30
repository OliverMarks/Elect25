

import Profile from './Profile';
import PrevElectionTable from './PrevElectionTable';
import { useState, useEffect } from 'react';
import '../App.css'



const TitleSection = ({constituencyID}) => {

    const [synopsis, setSynopsis] = useState()


    function removeATags(str) {
        return str.replace(/<a\b[^>]*>([^<]*)<\/a>/gi, '$1');
      }
      
      

    useEffect(() => {
        async function handleApiDataRequest() {
          const response = await fetch(`https://members-api.parliament.uk/api/Location/Constituency/${constituencyID.id}/Synopsis`);
          const string = await response.json();
          setSynopsis(removeATags(string.value))
          console.log(constituencyID.id)
        }
      
        handleApiDataRequest();
      }, [constituencyID]);


     
      


return (
<div className='flex flex-col'>
  <h1 className='text-[48px] mr-4 text-emerald-900 underline underline-offset-8'>{constituencyID.name}</h1>

    <div className='flex flex-col mt-6 mb-6 md:flex-row'>

    <div className=' w-screen md:w-2/5 mb-2 px-2 border-emerald-900 border-4 p-4 flex rounded-lg md:ml-14 shadow-lg bg-white'>
        <Profile 
        constituencyID = {constituencyID} />
                <p className='mt-6 ml-2 md:text-[23px] text-slate-600'>{synopsis}</p>

         </div>
        <PrevElectionTable
      constituencyID={constituencyID}/>
     
        
        
        </div>
</div>

)


}

export default TitleSection 