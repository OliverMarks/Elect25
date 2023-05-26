import { useState } from 'react'
import Header from './components/Header.jsx'
import  Search  from './components/search.jsx'
import PrevResults from './components/prevResults.jsx'
import TitleSection from './components/TitleSection.jsx'
import Welcome from './components/Welcome.jsx'
import './index.css'




function App() {

  const [constituencyID, setConstituencyID] = useState({name:undefined, id:undefined })

  return (
    <div className="h-[100%] w-screen bg-gradient-to-tl from-slate-400 via-gray-300 to-slate-200 font-[calibri]">


{constituencyID.id > 0 ?
    <Header
    constituencyID={constituencyID}
    setConstituencyID={setConstituencyID}/> :null }
    
    
      {/* Constituency heading and profile  */}
    <div className='pl-20 flex'>
    {constituencyID.id > 0 ?
    <TitleSection 
      constituencyID = {constituencyID} /> : null}
    </div>



      <div className='md:pl-20 pl-2'>
    {constituencyID.id > 0  ? <PrevResults
    constituencyID = {constituencyID}/>
    : <Welcome
    constituencyID={constituencyID}
    setConstituencyID={setConstituencyID}/>}
      </div>


      </div>





  )
}

export default App
