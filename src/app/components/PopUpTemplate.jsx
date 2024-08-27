"use client";
import React from 'react';

// Input field component
const InputField = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-black">{label}</label>
    <input
      type="text"
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

// Table row component
const TableRow = ({ template, plan, product, activity, budget, expenseCategory, department, year }) => (
  <tr>
    <td className="border p-2 text-center">
      <input type="checkbox" />
    </td>
    <td className="border p-2">{template}</td>
    <td className="border p-2">{plan}</td>
    <td className="border p-2">{product}</td>
    <td className="border p-2">{activity}</td>
    <td className="border p-2">{budget}</td>
    <td className="border p-2">{expenseCategory}</td>
    <td className="border p-2">{department}</td>
    <td className="border p-2">{year}</td>
  </tr>
);

export default function PopUpTemplate({ onClose, onConfirm }) {
  const templates = [
    { template: 'Template 1', plan: 'แผนงาน A', product: 'ผลผลิต B', activity: 'กิจกรรม C', budget: '100,000 บาท', expenseCategory: 'ค่าใช้จ่าย D', department: 'หน่วยงาน E', year: '2567' },
    { template: 'Template 2', plan: 'แผนงาน A', product: 'ผลผลิต B', activity: 'กิจกรรม C', budget: '100,000 บาท', expenseCategory: 'ค่าใช้จ่าย D', department: 'หน่วยงาน E', year: '2567' },
    // เพิ่มรายการ Template ที่ต้องการ
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-purple-100 rounded-md shadow-lg w-full mx-20 ">
        <h1 className="bg-fuchsia-600 text-white text-2xl font-bold p-5 h-20 flex items-center">
          ค้นหา Template ของคำของบประมาณ
        </h1>

        <div className="mx-8 pt-8 pb-2 rounded-md">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <InputField label="ชื่อ Template" />
            <InputField label="แผนงาน" />
            <InputField label="ผลผลิต" />
            <InputField label="กิจกรรม" />
            <InputField label="งบรายจ่าย" />
            <InputField label="หมวด คชจ." />
            <InputField label="ประเเภทงบประมาณ" />
          </form>
        </div>

        <div className="bg-white mx-8 mt-2 mb-8 p-8 rounded-md overflow-x-auto">
          <div className="flex justify-between mb-4">
            <div className="text-xl font-semibold">เลือก Template</div>
            <div className="space-x-2">
              <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">ตกลง</button>
              <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700">ปิด</button>
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['เลือก', 'ชื่อ Template', 'แผนงาน', 'ผลผลิต', 'กิจกรรม', 'งบรายจ่าย', 'หมวดหมู่ค่าใช้จ่าย', 'ใช้กับหน่วยงาน', 'ใช้กับปีงบประมาณ'].map((header) => (
                  <th key={header} className="border p-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {templates.map((template, index) => (
                <TableRow key={index} {...template} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
