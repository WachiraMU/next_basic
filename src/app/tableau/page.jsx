"use client";

import Head from 'next/head';  // ใช้สำหรับตั้งค่า metadata ของเพจ
import TableauEmbed from '../components/TableauEmbed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tableau Embed Example</title>
        <meta name="description" content="Embed Tableau with Next.js and Tailwind CSS" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Embedded Tableau</h1>
        <TableauEmbed />
      </main>
    </div>
  );
}
