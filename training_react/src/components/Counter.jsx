// import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrease=()=>{
        setCount(count+1);
    };
    const handleDecrease=()=>{
        if(count<=0){
            console.log("cant decrese after 0");
        }else{
        setCount(count-1);
        }
    };
  return (
    <div className='flex flex-col gap-3 justify-center items-center' >
        <h1>counter {count}</h1>
        <div className="flex gap-5 justify-center items-center">
            <button onClick={()=>handleIncrease()} className='text-white bg-black'>+</button>
            <button onClick={()=>handleDecrease()} className='text-white bg-black' >-</button>
        </div>
    </div>
  )
}

export default Counter;