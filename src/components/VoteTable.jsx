import { useEffect, useState } from "react";


const VoteTable = ({candidates}) => {


const [sortedData, setSortedData] = useState([])

useEffect(() => {
const sortedData = [...candidates].sort((a, b) => b.votes - a.votes);
setSortedData(sortedData)
}, [candidates])

return (
<div className="bg-white shadow-lg rounded-lg overflow-x-auto mr-2 w-[580px] ">
        <table className="whitespace-nowrap w-[100%]">
          <thead>
            <tr className="bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900  text-white text-left font-bold">
              <th className="p-2">Name</th>
              <th className="p-2">Party</th>
              <th className="p-2">Votes</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {sortedData.map((candidate, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3">{candidate.name}</td>
                <td className="p-3">{candidate.party.name}</td>
                <td className="p-3">{candidate.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

)
            }

    export default VoteTable