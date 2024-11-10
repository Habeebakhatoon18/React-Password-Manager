import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [passwordArray, setPasswordArray] = useState([])
    const [form, setform] = useState({ site: "", username: "", password: "" })
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const savePassword = () => {

        if (form.username.length > 3 && form.site.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setform({ site: "", username: "", password: "" })
            console.log(...passwordArray, form,)
            { console.log(passwordArray) }
        }
else{
    alert("Enter atleast 4 Characters")
}
    
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("eyecross.png")) {
            ref.current.src = "eye.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "eyecross.png"
        }
    }

    const deletePassWord = (id) => {
        let c = confirm("Do you really want to delete password ?")
        if (c) {
            setPasswordArray(passwordArray.filter(i => i.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(i => i.id !== id)))
        }

    }

    const editPassword = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(i => i.id != id))
    }
    return (

        <div className="w-full p-4 bg-green-100 h-[100vh]">
            <div className="Container max-w-[600px] mx-auto min-h-[70vh]">
                <div className="headline ">
                    <h1 className="font-bold text-center ">MY-Pass </h1>
                    <p className="text-center">Your Own Password Manager | Manage your passWords hassle free</p>
                </div>

                <div className="inputs items-center rounded-xl bg-green-300 w-full flex flex-col ">
                    <div className="w-full p-3">
                        <input onChange={handleChange} value={form.site} className="w-full rounded-full p-1" placeholder="Enter your site here" name="site" id="site" type="text" />
                    </div>
                    <div className="flex justify-between w-full p-2 gap-3">

                        <input onChange={handleChange} value={form.username} className="w-full rounded-full p-1" name="username" id="username" placeholder="Enter Username here" type="text" />

                        <div className="relative w-full">
                            <input ref={passwordRef} onChange={handleChange} value={form.password} className="w-full rounded-full p-1" name="password" placeholder="Enter password here" type="password" />
                            <span onClick={showPassword} className="absolute right-1"><img ref={ref} className="w-6 py-1" src="eye.png" alt="eye" /></span>
                        </div>
                    </div>
                    <div className="Add ">
                        <button onClick={savePassword} className=" w-fit text-white bg-green-800 hover:bg-green-600 p-2 px-6 m-2 rounded-full " >Save Password</button>
                    </div>
                </div>

                <div className="passwordArea  my-8 min-h-[30vh] bg-green-300 ">
                    <h2 className="font-bold text-center ">Your Passwords </h2>
                    {passwordArray.length === 0 && <div>No saved passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto mx-auto w-full overflow-hidden">
                            <thead className="mx-auto bg-green-800 text-white rounded-full">
                                <tr >
                                    <th className="py-2">Site</th>
                                    <th className="py-2">Username</th>
                                    <th className="py-2">Password</th>
                                    <th className="py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        
                                            <td className='text-center'> <div><a href="{item.site}" target='_blank'>{item.site}</a></div></td>
                                            <td className='text-center'><div>{item.username} </div></td>
                                            <td className='text-center'><div>{item.password} </div></td>
                                            <td className='text-center justify-center'>
                                                <div onClick={() => { deletePassWord(item.id) }} className=' cursor-pointer mx-1'>
                                                    
                                                   <img  className = "w-8 mx-auto bg-green-300 " src="delete3.jpeg" alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    
                                })}
                            </tbody>
                        </table>
                    }
                </div>

            </div>
        </div>
    )
}

export default Manager