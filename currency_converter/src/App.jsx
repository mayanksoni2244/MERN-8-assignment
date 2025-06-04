import React from 'react'
import Curr_api from './currency.js'
import { useState, useEffect } from 'react'
function App() {
  const [currency, setCurrency] = useState([])
  // const [currFin, setFin] = useState('')
  const [change, setChange] = useState('')
  const [change2, setChange2] = useState('')
  const [amount, setAmount] = useState('1')
  useEffect(() => {
    async function curr() {
      try {
        const data = await Curr_api();
        setCurrency(data)
      } catch (err) {
        console.log(err)
      }
    }
    curr()
  }, [])
  function swap() {
    setChange(change2)
    setChange2(change)
  }
  // useEffect(() => {
  const Curr_finder = async () => {
    if (change === '' || change2 === '') return;
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${change}.json`)
      if (!response.ok) {
        throw new Error('cant fetch')
      }
      const data = await response.json()
      const curdata = data[change]
      const conversionRate = curdata[change2];

      if (conversionRate) {
        console.log(`1 ${change.toUpperCase()} = ${conversionRate} ${change2.toUpperCase()}`);
        alert(`${amount} ${change.toUpperCase()} = ${(amount * conversionRate).toFixed(2)} ${change2.toUpperCase()}`);
        setFin(conversionRate);
      } else {
        console.log('Currency not found');
      }

      return data

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='rounded p-4 bg-gray-400 shadow-md w-200 h-100'>
          <label htmlFor="" className='text-xl'>From :</label>
          <div className='rounded bg-white w-auto h-20 flex p-4 justify-between'>
            <input type="number" id="num" placeholder='Amount' onChange={(e) => setAmount(e.target.value)} />
            <select name="currency" id="sel" value={change} onChange={(e) => setChange(e.target.value)}>
              <option value="" disabled>select currency</option>
              {currency.map((code) => (
                <option value={code} key={code}>{code.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <button className='bg-blue-400 p-3 rounded-xl mt-4 ml-85 cursor-pointer hover:bg-blue-300 active:bg-blue-500' onClick={swap}>Swap</button>

          <div className='rounded bg-white w-auto h-20 flex p-4 justify-between mt-10'>
            <label htmlFor="" className='text-xl mt-2'>To :</label>
            <select name="currency" id="" value={change2} onChange={(e) => setChange2(e.target.value)}>
              <option value="" disabled>select currency</option>
              {currency.map((code) => (
                <option value={code} key={code} className='text-black'>{code.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className='flex justify-center w-full'>
            <button className='bg-white p-3 rounded mt-5 w-auto cursor-pointer hover:bg-blue-200 active:bg-blue-300' onClick={Curr_finder}>Convert {change.toUpperCase()} to {change2.toUpperCase()}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
