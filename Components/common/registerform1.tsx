import { ErrorMessage, Field } from 'formik'
import React from 'react'

const RegisterformName = ({touched,errors}:any) => {
  return (
      <div className='h-60 py-5'>
            <div className="flex flex-col">
              <label htmlFor="name" className='font-bold my-1'>Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="bg-black rounded-md p-1 border-solid border-white border-2 text-white "
            
                  
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
           
            <div className="flex flex-col">
              <label htmlFor="phone" className='font-bold my-1'>Phone Number</label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="bg-black rounded-md p-1 border-solid border-white border-2 text-white "
                  
                
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
            </div>
    </div>
  )
}

export default RegisterformName;