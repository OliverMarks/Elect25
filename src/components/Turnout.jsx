import { useState, useEffect } from 'react';
import '../App.css'



const Turnout = ({constituencyID}) => {

    const [turnout, setTurnout] = useState([])

    useEffect(() => {
        async function handleApiDataRequest() {
          const response = await fetch(`https://members-api.parliament.uk/api/Location/Constituency/${constituencyID.id}/ElectionResults`);
          const electionData = await response.json();
          console.log(electionData.value);
          setTurnout(electionData.value);
        }
      
        handleApiDataRequest();
      }, [constituencyID]);

      const getTurnoutPercentage = () => {
        if (turnout && turnout[0]) {
          const totalElectorate = turnout[0].electorate;
          const voterTurnout = turnout[0].turnout;
          const turnoutPercentage = (voterTurnout / totalElectorate) * 100;
          return turnoutPercentage.toFixed(2); // Round the percentage to two decimal places
        }
        return '';
      };
    
      const getCircleColor = () => {
        if (turnout && turnout[0] && turnout[1].turnout) {
          const previousTurnout = turnout[1].turnout;
          const currentTurnout = turnout[0].turnout;
          return currentTurnout > previousTurnout ? 'border-green-500' : 'border-red-500';
        }
        return 'border-gray-500';
      };
    
      return (
        <div className="border-4 border-emerald-900 rounded-lg  w-1/5  shadow-xl ml-10 bg-white">
          <h2 className="text-xl font-bold flex justify-center mb-4 bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900  text-white p-4">Turnout</h2>
          <div className='flex justify-center items-center flex-col mt-14'>
          <div className={`border-8 w-32 h-32 rounded-full flex items-center justify-center ${getCircleColor()}`}>
            <span className="text-slate-500 text-3xl font-bold">{getTurnoutPercentage()}%</span>
          </div>
          <div>
            <p className='mt-4 font-bold text-slate-500'>
              Electorate: {turnout && turnout[0] ? turnout[0].electorate : ''}
            </p>
            <p className='font-bold text-slate-500'>
              Turnout: {turnout && turnout[0] ? turnout[0].turnout : ''}
            </p>
          </div>
          </div>
        </div>
      );
    };
    
    export default Turnout;