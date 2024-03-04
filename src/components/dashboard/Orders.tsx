import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaPen } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Orders = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="w-full grid grid-rows-2 gap-4 shadow-xl mx-auto p-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="card shadow-xl bg-slate-200 p-5">
            <div className="flex">
              <p className="underline decoration-dotted pr-5">
                Online Store Sessions
              </p>
              <FaPen />
            </div>
            <div className="flex">
              <p className="text-xl font-bold">255,581</p>
              <p className="px-5 text-sm">9%</p>
            </div>
          </div>
          <div className="card shadow-xl p-5">
            <p className="underline decoration-dotted">Net Return Value</p>
            <div className="flex">
              <p className="text-xl font-bold">-$15,07.44</p>
              <p className="px-5 text-sm">14%</p>
            </div>
          </div>
          <div className="card shadow-xl p-5">
            <p className="underline decoration-dotted">Total orders</p>
            <div className="flex">
              <p className="text-xl font-bold">10,511</p>
              <p className="px-5 text-sm">2%</p>
            </div>
          </div>
          <div className="card shadow-xl   p-5">
            <p className="underline decoration-dotted">Conversion Rate</p>
            <div className="flex">
              <p className="text-xl font-bold">3.18%</p>
              <p className="px-5 text-sm">7%</p>
            </div>
          </div>
          <div className="ps-16">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div>
          <LineChart
            width={500}
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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Orders;
