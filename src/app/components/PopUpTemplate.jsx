"use client";
import React, { useState } from 'react';
import InputField from '../utils/InputField'; // นำเข้า InputField

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
  const [TemSearch, setSearchTerm] = useState('');
  const [PlanSearch, setPlandSearch] = useState('');
  const [ResultSearch, setResultSearch] = useState('');
  const [ActivitySearch, setActivitySearch] = useState('');
  const [BudgetSearch, setBudgetSearch] = useState('');
  const [CatBudgetSearch, setCatBudgetSearch] = useState('');
  const [TypeBudgetSearch, setTypeBudgetSearch] = useState('');

  const templates = [
    { template: 'Template 1', plan: 'แผนงาน A', product: 'ผลผลิต A', activity: 'กิจกรรม A', budget: 'งบดำเนินการ', expenseCategory: 'ค่าใช้จ่าย A', department: 'หน่วยงาน A', year: '2567' },
    { template: 'Template 2', plan: 'แผนงาน A', product: 'ผลผลิต B', activity: 'กิจกรรม B', budget: 'งบดำเนินการ', expenseCategory: 'ค่าใช้จ่าย B', department: 'หน่วยงาน A', year: '2567' },
    { template: 'Template 3', plan: 'แผนงาน B', product: 'ผลผลิต B', activity: 'กิจกรรม C', budget: 'งบดำเนินการ', expenseCategory: 'ค่าใช้จ่าย A', department: 'หน่วยงาน B', year: '2567' },
    { template: 'Template 4', plan: 'แผนงาน D', product: 'ผลผลิต X', activity: 'กิจกรรม X', budget: 'งบดำเนินการ', expenseCategory: 'ค่าใช้จ่าย B', department: 'หน่วยงาน B', year: '2567' },
    { template: 'Template 5', plan: 'แผนงาน E', product: 'ผลผลิต Z', activity: 'กิจกรรม Z', budget: 'งบดำเนินการ', expenseCategory: 'ค่าใช้จ่าย B', department: 'หน่วยงาน B', year: '2567' },
    // เพิ่มรายการ Template ที่ต้องการ
  ];

  const filteredTemplates = templates.filter(template =>
    template.template.toLowerCase().includes(TemSearch.toLowerCase()) &&
    template.plan.toLowerCase().includes(PlanSearch.toLowerCase()) &&
    template.product.toLowerCase().includes(ResultSearch.toLowerCase()) &&
    template.activity.toLowerCase().includes(ActivitySearch.toLowerCase()) &&
    template.budget.toLowerCase().includes(BudgetSearch.toLowerCase()) &&
    template.expenseCategory.toLowerCase().includes(CatBudgetSearch.toLowerCase()) &&
    template.year.toLowerCase().includes(TypeBudgetSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-purple-100 rounded-md shadow-lg w-full m-4 lg:m-20">
        <h1 className="bg-fuchsia-600 rounded-t-md text-white text-2xl font-bold p-5 h-20 flex items-center">
          ค้นหา Template ของคำของบประมาณ
        </h1>

        <div className="mx-4 lg:mx-8 pt-8 pb-2 rounded-md">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <InputField
              label="ชื่อ Template"
              value={TemSearch}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputField
              label="แผนงาน"
              value={PlanSearch}
              onChange={(e) => setPlandSearch(e.target.value)}
            />
            <InputField
              label="ผลผลิต"
              value={ResultSearch}
              onChange={(e) => setResultSearch(e.target.value)}
            />
            <InputField
              label="กิจกรรม"
              value={ActivitySearch}
              onChange={(e) => setActivitySearch(e.target.value)}
            />
            <InputField
              label="งบรายจ่าย"
              value={BudgetSearch}
              onChange={(e) => setBudgetSearch(e.target.value)}
            />
            <InputField
              label="หมวดหมู่ คชจ."
              value={CatBudgetSearch}
              onChange={(e) => setCatBudgetSearch(e.target.value)}
            />
            <InputField
              label="ประเภทงบประมาณ"
              value={TypeBudgetSearch}
              onChange={(e) => setTypeBudgetSearch(e.target.value)}
            />
          </form>
        </div>

        <div className="bg-white mx-4 lg:mx-8 mt-2 mb-8 p-4 lg:p-8 rounded-md overflow-x-auto">
          <div className="flex justify-between mb-4">
            <div className="text-xl font-semibold">เลือก Template</div>
            <div className="space-x-2">
              <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">ตกลง</button>
              <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700">ปิด</button>
            </div>
          </div>

          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr>
                {['เลือก', 'ชื่อ Template', 'แผนงาน', 'ผลผลิต', 'กิจกรรม', 'งบรายจ่าย', 'หมวดหมู่ค่าใช้จ่าย', 'ใช้กับหน่วยงาน', 'ใช้กับปีงบประมาณ'].map((header) => (
                  <th key={header} className="border p-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template, index) => (
                <TableRow key={index} {...template} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
