import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const { userid } = useParams()
    return (
    
        < div className='flex justify-center m-4 font-bold text-lg bg-slate-500 text-white' >
        User: {userid}
    </div >
  )
}

export default User
