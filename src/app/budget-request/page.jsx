"use client";  // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
import PopUpTemplate from '../components/PopUpTemplate'; // Import the PopUpTemplate component

export default function BudgetRequest() {
  const [budgetType, setBudgetType] = useState(''); // State to manage radio button selection
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleBudgetChange = (event) => {
    setBudgetType(event.target.value);
  };

  const handleOpenPopup = () => {
    setShowPopup(true); // เปิด Pop-up เมื่อกดปุ่ม "ค้นหา Template"
  };

  const handleClosePopup = () => {
    setShowPopup(false); // ปิด Pop-up
  };

  const handleConfirmTemplate = () => {
    // ดำเนินการเมื่อผู้ใช้ยืนยันการเลือก Template
    handleClosePopup(); // ปิด Pop-up หลังจากกดปุ่มตกลง
  };

  return (
    <div className="min-h-screen rounded-md flex flex-col bg-purple-100 p-8 gap-4">
      <h1 className="text-2xl font-semibold text-left">
        คำของบประมาณ
      </h1>
      <div className="flex flex-row justify-between">
        <div className="flex justify-start space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
          >
            ล้างหน้าจอ
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
            onClick={handleOpenPopup} // เปิด Pop-up เมื่อกดปุ่ม
          >
            ค้นหา Template
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
          >
            ส่งคำขอ งบประมาณ
          </button>
          <button
            type="button"
            className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700"
          >
            ลบคำขอ
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-md shadow-md w-full mx-auto">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Year Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">ปี (พ.ศ)</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="2567"
              />
            </div>

            {/* Unit Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">หน่วยงาน</label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>ศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Reason Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">หมายเหตุ/คำอธิบายเพิ่มเติม</label>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="หมายเหตุ"
              />
            </div>

            {/* Items Count Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">รายการ คชจ.</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="0"
              />
            </div>

            {/* Total Budget Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">รวมค่างบประมาณ (บาท)</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="0.00 บาท"
              />
            </div>

            {/* Requester Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">ผู้ทำคำขอ</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder=""
              />
            </div>

            {/* Request Date Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">วันที่ทำคำขอ</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="02/05/2566"
              />
            </div>

            {/* Budget Selection Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">เงินงบประมาณ</label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>ในปีงบประมาณ</option>
                <option>นอกปีงบประมาณ</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Book Number Field */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">เลขที่หนังสือ</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="ระบุเลขที่หนังสืออ้างอิงคำขอเพิ่มเติม"
              />
            </div>
          </div>
        </form>
      </div>

      <h1 className="text-sm font-medium text-center text-red-600">
        ****กดปุ่ม ค้นหา Template เพื่อทำคำของบประมาณ****
      </h1>

      {/* Show the popup if showPopup is true */}
      {showPopup && (
        <PopUpTemplate
          onClose={handleClosePopup} // ปิด Pop-up เมื่อกดปุ่มปิด
          onConfirm={handleConfirmTemplate} // ยืนยันการเลือก Template และปิด Pop-up
        />
      )}
    </div>
  );
}
