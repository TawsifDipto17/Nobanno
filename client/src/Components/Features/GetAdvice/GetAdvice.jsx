import React from 'react';
import Sidebar from '../../Dashboard/Components/Sidebar Section/Sidebar';
import DataTable from './DataTable'; // Import the DataTable component

const GetAdvice = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar />
        <DataTable /> {/* Render the DataTable component here */}
      </div>
    </div>
  );
};

export default GetAdvice;
