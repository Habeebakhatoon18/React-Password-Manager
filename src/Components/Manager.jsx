import React from 'react'
import {useState,useRef ,useEffect } from 'react'

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [passwordArray, setpasswordArray] = useState([])
    const [form, setform] = useState({site:"",username:"",password:""})

    const handleChange = (e)=>{
setform({...form,[e.target.name]:e.target.value})
    }  
    const savePassword = ()=>{
        if(form.username.length >3 && form.site.length >3 && form.username.password >3){
            setpasswordArray([...passwordArray,{...form,id :uuidv4()}])
            localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id:uuid()}]))
            setform({site:"",username:"",password:""})
        
        }
    }
    
const showPassword = ()=>{
    passwordRef.current.type = "text"
    {ref.current.src.includes("eyecross.png")? ref.current.src = "eye.png" passwordRef.current.type = "password": passwordRef.current.type = "text" ref.current.src = "eyecross.png"}
}

  return (

    <div className="w-full bg-green-200">

        <div className="headline ">
            <h1 className="font-bold text-center ">MY-Pass </h1>
            <p className="text-center">Your Own Password Manager | Manage your passWords hassle free</p>
        </div>

        <div className="inputs items-center rounded-xl bg-green-400 w-full flex flex-col ">
            <div className= "w-full p-3">
                <input onChange ={handleChange}value = {form.site}className= "w-full rounded-l p-1" placeholder= "Enter your site here" name = "site" id="site" type="text" />
            </div>
            <div className="flex justify-between w-full p-2 gap-3">
                <input onChange ={handleChange}value = {form.username}className= "w-full rounded-l p-1" name = "username" id="username " placeholder= "Enter  UserNam here" type="text" />
                <div className="relative w-full">
                    <input onChange ={handleChange}value = {form.password}className= "w-full rounded-l p-1" name= "password" placeholder= "Enter passWord here" type="text" />
                    <span onClick={showPassword} className="absolute right-1"><img ref = {ref} className="w-6 py-1" src="eye.png" alt="eye" /></span>
                </div>
            <div/>
            <div className="Add">
                <button onClick={savePassword} className=" w-fit text-white bg-green-800 p-2 px-6 m-2 rounded-full" >Save</button>
            </div>
        </div>
        <div className="passwords w-full my-8 ">
            <h2 className="font-bold text-center">Your Passwords </h2>
            <table className="table mx-auto w-full overflow-hidden">
            <thead className="mx-auto bg-green-800 text-white rounded-full">
            <tr >
              <th className="py-2">Site</th>
              <th className="py-2">Username</th>
              <th className="py-2">Password</th>
              <th className="py-2">Actions</th>
            </tr>
           </thead>
           <tbody>
           </tbody>
            </table>
        </div>

    </div>
   </> 
  )
}

export default Manager