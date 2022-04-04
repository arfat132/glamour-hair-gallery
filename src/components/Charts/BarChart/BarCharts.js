import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../Hooks/useCharts';

const BarCharts = () => {
    const [data] = useCharts([]);
    
    return (
        <div>
           <BarChart width={530} height={250} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="month" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey="investment" fill="pink" />
           <Bar dataKey="revenue" fill="#ca0d73" />
           </BarChart> 
        </div>
    );
};

export default BarCharts;