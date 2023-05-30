import { useEffect, useState } from "react";


const PrevElectionTable = ({constituencyID}) => {


const [electionResults, setElectionResults] = useState([])


useEffect(() => {
    async function handleApiDataRequest() {
      const response = await fetch(`https://members-api.parliament.uk/api/Location/Constituency/${constituencyID.id}/ElectionResults`);
      const electionData = await response.json();
      setElectionResults(electionData.value);
      console.log(electionData.value + "ED")
    }
  
    handleApiDataRequest();
  }, [constituencyID]);



    const getPartyBackgroundColor = (party) => {
        return party ? `#${party.backgroundColour}` : "";
      };
    
      return (
        <div className="bg-white shadow-lg rounded-lg md:ml-4 overflow-x-auto w-screen md:w-[50%]">
        <table className="w-screen md:w-full divide-y divide-gray-200 border- rounded-lg">
          <thead className="">
            <tr className="bg-gradient-to-tl from-emerald-700 via-emerald-800 to-emerald-900  text-gray-600 text-left rounded-lg">
              <th className="px-6 py-3 text-left font-bold text-white tracking-wider">
                Election Title
              </th>
              <th className="px-6 py-3 text-left font-bold text-white tracking-wider">
                Result
              </th>
              <th className="px-6 py-3 text-left font-bold text-white  tracking-wider">
                Electorate
              </th>
              <th className="px-6 py-3 text-left font-bold text-white tracking-wider">
                Turnout
              </th>
              <th className="px-6 py-3 text-left font-bold text-white tracking-wider">
                Majority
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {electionResults.map((result) => (
              <tr
                key={result.electionId}
                className={`${
                  getPartyBackgroundColor(result.winningParty)
                    ? `bg-${result.winningParty.backgroundColour}`
                    : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.electionTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.result}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.electorate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.turnout}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.majority}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
    };


export default PrevElectionTable




