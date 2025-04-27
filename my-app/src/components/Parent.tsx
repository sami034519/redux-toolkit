import React from 'react'
import Addtodo from './Addtodo';
import Listtodo from './Removetodo';

const Parent:React.FC=()=> {
  return (
    <div className='bg-slate-500 h-screen p-10 '>
        <Addtodo/>
        <Listtodo/>
    </div>
  )
}

export default Parent