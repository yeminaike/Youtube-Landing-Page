



import React from 'react'


export default  function Input({ type, placeholder, className, ...props}){


    return (

        <div className="">

            <input
            className={`outline-none px-4 w-[32.75rem] text-[#000] h-[4rem] rounded-[13.697px] border-[#C4C4C4] border-[1.712px]
         ${className}`}
          
            type={type}
            placeholder={placeholder}
            {...props}
            
              />

            </div>

    )
}


