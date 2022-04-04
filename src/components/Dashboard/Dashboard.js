import React from 'react';
import AreaCharts from '../Charts/AreaChart/AreaCharts';
import BarCharts from '../Charts/BarChart/BarCharts';
import './Dashboard.css';


const Dashboard = () => {
  
    return (
        <div className='charts'>
        <div>
          <h1>Investment vs Revenue</h1>
          <AreaCharts></AreaCharts>
        </div>
        <div>
          <h1>Investment vs Revenue</h1>
          <BarCharts></BarCharts>
        </div>
        </div>
    );
};

export default Dashboard;