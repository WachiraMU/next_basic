import React, { useEffect, useRef } from 'react';

const TableauEmbed = () => {
  const containerRef = useRef(null); // ใช้ useRef เพื่อเก็บ reference ของ container

  useEffect(() => {
    // Function to dynamically load the Tableau JavaScript API
    const loadScript = (src, onLoad) => {
      const existingScript = document.getElementById('tableau-api-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = 'tableau-api-script';
        script.onload = onLoad;
        document.body.appendChild(script);
      } else {
        onLoad(); // ถ้าสคริปต์มีอยู่แล้ว, เรียก onLoad ทันที
      }
    };

    const handleScriptLoad = () => {
      const containerDiv = containerRef.current;
      const url = 'https://nsmartplusdashboard.nhealth-asia.com/views/Management_Dashboard_UAT/ManagementOverall?&uuid=fdb08b8d-4593-4360-ab65-6e7642ee5cb7';

      const options = {
        hideTabs: true,
        onFirstInteractive: () => {
          console.log('Tableau Dashboard is now interactive.');
        }
      };

      // ทำความสะอาด instance ของ Tableau Viz เก่า
      if (containerDiv && window.tableau) {
        const viz = new window.tableau.Viz(containerDiv, url, options);

        // Cleanup on component unmount
        return () => {
          if (viz) {
            viz.dispose();
          }
        };
      } else {
        console.error('Tableau API is not loaded or containerDiv is not available.');
      }
    };

    loadScript('https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js', handleScriptLoad);

  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default TableauEmbed;
