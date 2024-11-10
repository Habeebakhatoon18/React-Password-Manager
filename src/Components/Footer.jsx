import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 bg-slate-900 w-full text-white flex flex-col  justify-center items-center'>
        <div className="headline flex flex-col">
            <h1 className="font-bold text-center ">MY-Pass </h1>
            <div className='flex  items-center'>Made with <img className = "w-8 p-1" src="heart.png" alt="love" /> by HabeebaKhatoon</div>
        </div>
    </div>
  )
}

export default Footer