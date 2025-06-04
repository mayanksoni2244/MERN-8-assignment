import React from 'react'
import { useState, useRef, useEffect } from 'react'
const App = () => {
  const time=useRef(0);
  const minute=useRef(0);
  const int=useRef(null);
  const minint=useRef(null)
  const[count,setCount]=useState(0)
  const[minc,setmin]=useState(0)
  function start(){
    if (!int.current==null) return;
    int.current=setInterval(() => {
      time.current=time.current+1
      setCount(time.current)
    }, 1000);
    if (!minint.current==null) return;
    minint.current=setInterval(() => {
      minute.current=minute.current+1
      setmin(minute.current)
    }, 60000);
  }
  useEffect(()=>{
    if(time.current=='60'){
      clearInterval(int.current)
      int.current=null
      time.current=0
      setCount(0)
      start()
    }
  },[count])

  function sto(){
    clearInterval(int.current,minint.current)
    int.current=null
    minint.current=null
  }

  function reset(){
    clearInterval(int.current,minint.current)
    int.current=null
    minint.current=null
    time.current=0
    minute.current=0
    setCount(0)
    setmin(0)
  }
  return (
    <>
      <div className='flex justify-center '>
        <div className='rounded-full h-100 w-100 border-solid bg-black text-white flex justify-center items-center text-4xl'>{minc}:{count}</div>
      </div>
      <div className='flex justify-center gap-5 mt-5'>

        <button onClick={start} className='btn'>start</button>
        <button onClick={sto} className='btn'>stop</button>
        <button onClick={reset} className='btn'>reset</button>
      </div>
    </>
  )
}

export default App
