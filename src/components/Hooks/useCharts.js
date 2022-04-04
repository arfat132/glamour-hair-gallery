import { useState, useEffect } from "react";

const useCharts = () => {
    const [data, SetData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
        .then(data =>SetData(data))

    },[])
    
    return [data, SetData];
}
export default useCharts;