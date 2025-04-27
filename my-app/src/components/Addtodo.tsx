import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addtodo,removetodo } from '../Slices/Counter';
import { getuser } from '../Slices/username';
const Addtodo:React.FC=() =>{
    const [input,setinput]=useState<string>('');
    const Dispatch=useDispatch();
    const handlesubmit=(e: React.FormEvent)=>{
               e.preventDefault();
               Dispatch(addtodo(input))
               Dispatch(getuser(input))
               setinput('');
    }
  return (
    <form onSubmit={handlesubmit}>
        <div className='w-full flex justify-center bg-slate-500 gap-7 pt-24 py-14'>
            <input className='p-3 bg-black text-white rounded-lg px-10'
             type="text"
              placeholder='Enter new todo...'
              onChange={(e)=>setinput(e.target.value)}
              value={input}
              />
            <button className='bg-green-400 p-2 font-medium text-xl rounded-lg px-6 hover:bg-green-600' type='submit'>AddTodo </button>
        </div>

    </form>
    
  )
}

export default Addtodo