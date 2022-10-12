import React from "react";
import "./Statistics.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Footer from "../Footer/Footer";

const Statistics = () => {


  const data = [
    {
      name: "React",
      Question: 8,
    },
    {
      name: "JavaScript",
      Question: 9,
    },
    {
      name: "CSS",
      Question: 8,
    },
    {
      name: "Git",
      Question: 11,
    },
    
  ];

  return (
    <div className="container mt-5">
      <div className="chart">
      <BarChart
          width={350}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Question" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
