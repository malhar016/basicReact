import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);
    const tick = () => {
        if(count > 60){
            setCount(1);
        }else{
            setCount(count + 1);
        }
    }

    //
    useEffect(() => {
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    },[count]);

    return (
        <div className="circle">
            <div className="App-logo">
                {count}
            </div>
        </div>
    );
};

export default Counter;