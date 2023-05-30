import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';
import VoteTable from "./VoteTable";
import Turnout from "./Turnout";





const PrevResults = ({constituencyID}) => {

  const [candidates, setCandidates] = useState([]);
  const [sortedCandidates, setSortedCandidates] = useState([])

  useEffect(() => {
    async function handleApiDataRequest() {
      const response = await fetch(`https://members-api.parliament.uk/api/Location/Constituency/${constituencyID.id}/ElectionResult/Latest`);
      const electionData = await response.json();
      console.log(electionData.value.candidates);
      setCandidates(electionData.value.candidates);
    }
  
    handleApiDataRequest();
  }, [constituencyID]);
  

  function hexToRgb(hex) {
    if (hex === undefined || hex === null) {
      return;
    }
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    return `rgb(${r},${g},${b})`;
  }

  useEffect(() => {
    const sortedData = [...candidates].sort((a, b) => b.votes - a.votes);
    setSortedCandidates(sortedData);
  }, [candidates]);

  useEffect(() => {
    // Create a new chart when candidates data changes
    const ctx = document.getElementById("chart").getContext("2d");
    const labels = candidates.map((candidate) => candidate.name);
    const data = candidates.map((candidate) => candidate.voteShare * 100);
    const backgroundColor = candidates.map((candidate) => hexToRgb(candidate.party.backgroundColour));
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "% of Vote",
            data: data,
            backgroundColor: backgroundColor,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: true,
        },
        
      },
    });
    return () => {
      chart.destroy(); // cleanup chart on component unmount
    };
  }, [candidates]);

  return (
    <div className="pb-5">
      <h2 className="text-[32px] mb-4 text-emerald-900">Election Results 2019</h2>

<div className="flex flex-col md:flex md:flex-row md:ml-14 gap-2 ">


        <VoteTable
      
      candidates={candidates}/>
        
        
        <div className="bg-white shadow-lg rounded-lg h-[100%]">
          <h2 className="p-4 flex items-center justify-center bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900  text-white text-xl font-bold rounded-t-lg">Proportion of Vote</h2>
          <canvas className=" p-2 border-4 border-emerald-900 rounded-b-lg" id="chart"></canvas>
        </div>

        <Turnout
        className="mr-4"
        constituencyID = {constituencyID} 
        />


      </div>
    
    

      </div>
    
  );
};

export default PrevResults;
