import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white  ">
        <div className="container px-4 ">
        <div className="Logo flex font-bold "><span className="text-black font-bold">&lt;</span> <span>MY-Pass </span>
        <span className="text-black font-bold">&gt;</span></div>
        {/* <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul> */}
        </div>
    </nav>
  )
}

export default Navbar