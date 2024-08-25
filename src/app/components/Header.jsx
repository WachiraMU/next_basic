"use client"; // ระบุว่าเป็น Client Component

import React from 'react';
import { FiMenu } from "react-icons/fi";

const Header = ({ open, setOpen }) => {
  return (
    <div className='bg-fuchsia-600 text-white text-2xl font-bold p-5 h-20 flex items-center'>
      <FiMenu
        className="text-2xl rounded cursor-pointer block text-white sm:hidden"
        onClick={() => setOpen(!open)}
      />
      <div className="flex-1 text-center sm:text-left">
        ระบบแผนงานงบประมาณ
      </div>
    </div>
  );
}

export default Header;
