import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../Hooks/useCharts';


const AreaCharts = () => {
    const [data] = useCharts([]);
    
   return (
        <div>
            <AreaChart width={530} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="pink" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ca0d73" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ca0d73" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="pink" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#ca0d73" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#ca0d73" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart> 
        </div>
    );
};

export default AreaCharts;