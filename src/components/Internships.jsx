//import '../css/component/internships.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({ title, data, dataKey }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <div style={{ height: '22.5vw', width: '709px' }}>
        <ResponsiveContainer width="105%" height="85%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'Arial', fill: 'red', fontWeight: 'bold' }}  />
            <YAxis tick={{ fontSize: 12, fontFamily: 'Arial', fill: 'red', fontWeight: 'bold' }} /> {/* Customize the font properties here */}
            <Area type="monotone" dataKey={dataKey} stroke="#5550bd" fill="purple" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
