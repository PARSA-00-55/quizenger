import React from 'react';
import './Statistics.css';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  const graphs = useLoaderData();
  const chart = graphs.data;
  return (
    <div className='container'>
      <div className='chart'>
        <BarChart width={300} height={300} data={chart}>
          <Bar type="monotype" dataKey="total" fill="#8884d8"/>
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip/>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;