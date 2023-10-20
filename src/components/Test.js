import React, { useState } from 'react'

const Test = () => {
    const [pass, setPass] = useState({value:"", isTouched:false})
    const [val, setVal] = useState("")

    const passwordErrorMessage =()=>{
        return <span className='color-red'>password should be at least 8 characters</span> 
    }


    const handleSubmit =(e)=>{
        e.preventDefault()

    }
  return (
    <div>
        <form>
            <label>
                Pass:
            <input 
                onChange={e=> setPass({...pass , value:e.target.value})}
                onBlur={e=> setPass({...pass, isTouched: true})}
            />
            </label>
            <br/>
            {pass.isTouched && pass.value.length < 8? passwordErrorMessage() : null  }
        </form>
    </div>
  )
}

export default Test