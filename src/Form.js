import React, { useEffect, useState } from 'react'

function Form() {

    const data = {name:"", email:"", password:""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState()

    useEffect(()=>{
        //console.log("Registered");
    }, [flag])

    function handleData(e)
    {
        setInputData({...inputData, [e.target.name]:e.target.value})
        //console.log(inputData);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password ) {
            setFlag(false);
        } else {
            setFlag(true);
        }
    }
  return (
    <>
    <p>{(flag===true)?<h2 className='ui-define'>Hello {inputData.name}, You have successfully Registered..!!</h2>: <h2  className='ui-define'>All fields are mandatory</h2>}</p>
    <form className="container" onSubmit={handleSubmit}>
        <div className="header">
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' placeholder='Enter your Name' name='name' value={inputData.name} onChange={handleData} ></input>
        </div>
        <div>
            <input type='text' placeholder='Enter your Email' name='email' value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type='password' placeholder='Enter your Password' name='password' value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Form