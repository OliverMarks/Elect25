import { useState, useEffect } from "react";

import '../App.css'




const Profile =({constituencyID}) => {


const [profile, setProfile] = useState({name: null, party: null, image: null})


useEffect(() => {
    async function handleApiDataRequest() {
      const response = await fetch(`https://members-api.parliament.uk/api/Members/Search?ConstituencyId=${constituencyID.id}`)
      const data = await response.json()
      const member = data.items[0]
      setProfile({
        name: member.value.nameDisplayAs,
        party: member.value.latestParty.name,
        image: member.value.thumbnailUrl
      })
    }
  
    handleApiDataRequest()
  }, [constituencyID])




  return (

    <div className=" flex flex-col justify-center items-center p-1 ml-3 rounded-lg  bg-white">
        <div className="md:h-32 md:w-32">
           <img src={profile.image} className="rounded-lg" />
        </div>
        <h2 className="font-black text-slate-600">{profile.name}</h2>
        <h2 className=" text-slate-600">{profile.party}</h2>

        


    </div>



  )



}

export default Profile 