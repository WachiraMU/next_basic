import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="p-2">
        <h1 className="text-2xl font-semibold">หน้าแรก</h1>
      </div>
      <div className="p-2 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300
        rounded-lg border border-fuchsia-200 border-solid"
        >
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Song</th>
              <th className="border border-gray-300 p-2">Artist</th>
              <th className="border border-gray-300 p-2">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="border border-gray-300 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="border border-gray-300 p-2">Malcolm Lockyer</td>
              <td className="border border-gray-300 p-2">1961</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Witchy Woman</td>
              <td className="border border-gray-300 p-2">The Eagles</td>
              <td className="border border-gray-300 p-2">1972</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Shining Star</td>
              <td className="border border-gray-300 p-2">Earth, Wind, and Fire</td>
              <td className="border border-gray-300 p-2">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
