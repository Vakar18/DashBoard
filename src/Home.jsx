import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  ComposedChart,
  Area,
} from "recharts";

function Home() {
  const data = [
    {
      name: "small_talk",
      sign: "sm",
      value: 300,
    },
    {
      name: "technical_support",
      sign: "ts",
      value: 450,
    },
    {
      name: "sales_inquiries",
      sign: "si",
      value: 350,
    },
    {
      name: "customer_service",
      sign: "cs",
      value: 400,
    },
  ];

  const data1 = [
    { rating: 1, count: 15 },
    { rating: 2, count: 35 },
    { rating: 3, count: 200 },
    { rating: 4, count: 500 },
    { rating: 5, count: 600 },
  ];

  const data2 = [
    {
      country: "USA",
      count: 800,
    },
    {
      country: "India",
      count: 250,
    },
    {
      country: "Germany",
      count: 150,
    },
    {
      country: "Japan",
      count: 100,
    },
    {
      country: "Brazil",
      count: 200,
    },

  ];

const data6 = [
  {
    platform:"iOS",
    usage:600
  },
  {
    platform:"Andriod",
    usage:700
  },
  {
    platform:"Web",
    usage:200
  },
] 

  const data4 = [
    { date: "2023-05-01", average_time: 0.4 },
    { date: "2023-05-02", average_time: 0.42 },
    { date: "2023-05-03", average_time: 0.35 },
    { date: "2023-05-04", average_time: 0.5 },
    { date: "2023-05-05", average_time: 0.47 },
  ];
  const data5 = [
    { week: "18 weeks", average_time: 0.45 },
    { week: "19 weeks", average_time: 0.43 },
    { week: "20 weeks", average_time: 0.5 },
    { week: "21 weeks", average_time: 0.46 },
    { week: "22 weeks", average_time: 0.41 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF00FF"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="center"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL QUERIES</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>1500</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>SUCCESS QUERIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>1350</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>FAILED QUERIES</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>150</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>RESPONSE TIME</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>0.45</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <XAxis dataKey="sign" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data4}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average_time"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data5}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average_time"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data1}
              cx={200}
              cy={100}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#FF00FF"
              dataKey="count"
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart width={730} height={250} data={data2}>
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="count"
              fill="#8884d8"
              stroke="#8884d8"
            />
          </ComposedChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
        <ComposedChart width={730} height={250} data={data6}>
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="usage"
              fill="#413ea0"
              stroke="#413ea0"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
