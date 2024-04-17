import React, { useEffect, useState} from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect( () => {
        fetch('https://api.github.com/users/abhashsolanki18')
        .then(response => response.json())     
        .then(data => {
            console.log(data)
                setdata(data)
            })
    })

    return (
        <div className='text-center bg-slate-500 text-3xl m-4 p-4'>
            Github Followers:{data.followers}
            <img className='flex justify-center' src={data.avatar_url} alt="invalid" width={300} />
        </div>
    )
}

export default Github
