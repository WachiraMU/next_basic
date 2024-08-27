"use client";

import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { MdFiberManualRecord } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { GrPowerShutdown } from "react-icons/gr";
import { RiSettings4Line } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { filterMenus } from '../utils/filterMenus'; // Import ฟังก์ชัน filterMenus

const Sidebar = ({ open, setOpen }) => {
    const [submenuOpen, setSubmenuOpen] = useState(null);
    const [activeMenu, setActiveMenu] = useState("หน้าแรก");
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && !open) {
                setOpen(true);
            } else if (window.innerWidth < 768 && open) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [open, setOpen]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            router.push('/home');
        }
    }, [router]);

    const Menus = [
        { title: "หน้าแรก", icon: <AiOutlineHome />, path: "/home" },
        {
            title: "คำของบประมาณ",
            icon: <MdOutlineLibraryBooks />,
            submenu: true,
            submenuItems: [
                { title: "คำขอ งบประมาณ", path: "/budget-request" },
                { title: "Sing off คำของบประมาณ", path: "/tableau" },
                { title: "ประวัติคำขอเงินงบประมาณ", path: "/budget-history" },
                { title: "ติดตามคำขอเงินงบประมาณ", path: "/budget-tracking" },
            ],
        },
        {
            title: "จัดการงบประมาณ",
            icon: <FaRegMoneyBillAlt />,
            submenu: true,
            submenuItems: [
                { title: "จัดการงบประมาณ 1", path: "/manage-budget-1" },
                { title: "จัดการงบประมาณ 2", path: "/manage-budget-2" },
                { title: "จัดการงบประมาณ 3", path: "/manage-budget-3" },
                { title: "จัดการงบประมาณ 4", path: "/manage-budget-4" },
            ],
        },
        { title: "ตั้งค่าระบบ", icon: <RiSettings4Line />, path: "/settings" },
        { title: "ออกจากระบบ", icon: <GrPowerShutdown />, path: "/logout" },
    ];
    const handleMenuClick = (index, menu) => {
        setActiveMenu(menu.title);
        if (menu.submenu) {
            setSubmenuOpen(submenuOpen === index ? null : index);
        } else {
            setSubmenuOpen(null);
        }
    };


    const filteredMenus = filterMenus(Menus, searchTerm); // เรียกใช้งานฟังก์ชันค้นหาที่สร้างขึ้น

    return (
        <div className="flex">
            <div className={`bg-slate-100 min-h-screen p-5 pt-8 duration-300 fixed z-10 md:relative md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} md:w-80 w-60`}>
                <AiOutlineClose className="text-2xl absolute top-4 right-4 cursor-pointer block sm:hidden" onClick={() => setOpen(false)} />
                <img src="/logo.png" alt="Company Logo" className="h-40 w-auto mx-auto" />
                <div className="flex items-center rounded-md bg-blue-200 bg-opacity-30 mt-6 px-4 py-2">
                    <AiOutlineSearch className="text-gray-500 text-xl block float-left cursor-pointer mr-2" />
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="text-base bg-transparent w-full text-black placeholder-gray-500 focus:outline-none"
                    />
                </div>
                <ul className="pt-2">
                    {filteredMenus.map((menu, index) => (
                        <div key={index}>
                            <Link href={menu.path || "#"} passHref>
                                <li
                                    onClick={() => handleMenuClick(index, menu)}
                                    className={`text-black text-sm flex items-center gap-2 cursor-pointer p-2 hover:bg-slate-200 rounded-md items-center
                                    ${menu.spacing ? "mt-9" : "mt-2"} ${activeMenu === menu.title ? "bg-slate-300 font-bold text-black" : "text-gray-700"
                                    }`}
                                >
                                    <span className="text-2xl block float-left">
                                        {menu.icon}
                                    </span>
                                    <span
                                        className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"
                                            }`}
                                    >
                                        {menu.title}
                                    </span>
                                    {menu.submenu && (
                                        <FaAngleDown
                                            className={`${submenuOpen === index
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    )}
                                </li>
                            </Link>
                            {/* This part ensures that submenu is properly rendered */}
                            {menu.submenu && submenuOpen === index && open && (
                                <ul>
                                    {menu.submenuItems.map(
                                        (submenuItem, subIndex) => (
                                            <Link
                                                href={submenuItem.path}
                                                key={subIndex}
                                                passHref
                                            >
                                                <li
                                                    onClick={() =>
                                                        setActiveMenu(
                                                            submenuItem.title
                                                        )
                                                    }
                                                    className={`text-black text-sm flex items-center gap-4 cursor-pointer p-2 px-5 rounded-md hover:bg-slate-200 hover:text-blue-900 hover:font-bold
                                                    ${activeMenu === submenuItem.title ? "bg-slate-300 font-bold" : ""
                                                    }`}
                                                >
                                                    <MdFiberManualRecord className="text-xs mr-2" />
                                                    {submenuItem.title}
                                                </li>
                                            </Link>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;
