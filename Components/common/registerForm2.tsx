import { ErrorMessage, Field } from 'formik'
import React from 'react'

const RegisterFormPassWord = ({touched,errors}:any) => {
  return (
      <div  className='h-60'>
           <div className="flex flex-col">
              <label htmlFor="email" className='font-bold my-1'>Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-black rounded-md p-1 border-solid border-white border-2 text-white "
               
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className='font-bold my-1'>Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-black rounded-md p-1 border-solid border-white border-2 text-white "
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className='font-bold my-1'>Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="bg-black rounded-md p-1 border-solid border-white border-2 text-white "
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>
    </div>
  )
}

export default RegisterFormPassWord;