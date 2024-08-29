import React, { useEffect, useRef } from 'react';

const TableauEmbed = () => {
  const containerRef = useRef(null);
  const vizRef = useRef(null);

  useEffect(() => {
    const loadScript = (src, onLoad) => {
      const existingScript = document.getElementById('tableau-api-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = 'tableau-api-script';
        script.onload = onLoad;
        document.body.appendChild(script);
      } else {
        onLoad();
      }
    };

    const handleScriptLoad = () => {
      const containerDiv = containerRef.current;

      if (vizRef.current) {
        vizRef.current.dispose();
      }

      if (window.tableau && containerDiv) {
        const url = 'https://nsmartplusdashboard.nhealth-asia.com/views/Management_Dashboard_UAT/ManagementOverall?&uuid=6d7750ff-1b6c-4379-928e-ad22bcb2230b';
        const options = {
          hideTabs: true,
          hideToolbar: true, // ซ่อน toolbar ทั้งหมด
          onFirstInteractive: () => {
            console.log('Tableau Dashboard is now interactive.');
          }
        };

        vizRef.current = new window.tableau.Viz(containerDiv, url, options);
      } else {
        console.error('Tableau API is not loaded or containerDiv is not available.');
      }
    };

    loadScript('https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js', handleScriptLoad);

    return () => {
      if (vizRef.current) {
        vizRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="flex flex-row justify-center items-center min-h-screen w-full">
      <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default TableauEmbed;
