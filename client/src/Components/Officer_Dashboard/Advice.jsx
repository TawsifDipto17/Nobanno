import React from 'react';
import Sidebar from './Components/Sidebar Section/Sidebar';
import DataTable from './DataTable'; // Import the DataTable component

const Advice = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar />
        <DataTable /> {/* Render the DataTable component here */}
      </div>
    </div>
  );
};

export default Advice;
