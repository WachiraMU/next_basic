"use client"
import './globals.css';
import { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import TableauEmbed from './components/TableauEmbed';

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ตรวจสอบขนาดหน้าจอในฝั่งไคลเอนต์เท่านั้น
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };

    // เรียกใช้งานครั้งแรกเมื่อคอมโพเนนต์ถูกเมาท์
    handleResize();

    // เพิ่ม event listener สำหรับการเปลี่ยนแปลงขนาดหน้าจอ
    window.addEventListener('resize', handleResize);

    // ทำความสะอาด event listener เมื่อคอมโพเนนต์ถูกยกเลิก
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <body >
        <div className="flex flex-row min-h-screen">
          <Sidebar open={open} setOpen={setOpen} />
          <div className="flex flex-col flex-grow">
            <Header open={open} setOpen={setOpen} />
            <main className="flex-grow p-4 md:p-6 lg:p-8 bg-white overflow-auto">
              {children}
            </main>
          </div>
        </div>
        <Footer />
       
        
      </body>
    </html>
  );
}