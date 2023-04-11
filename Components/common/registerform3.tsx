import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Registerform3 = ({touched,errors,values,interests,nationality,isValid}:any) => {
  return (
      <div  className='h-60'>
            <div className="flex flex-col">
              <div className="flex ">
              <label htmlFor="gender" className='px-2 font-bold'>gender :</label>
              <div className="flex">
                <label htmlFor="male" className='px-2'>
                  <Field
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={values.gender === "male"}
                    className={
                      touched.gender && errors.gender
                        ? "border-red-500"
                        : "border-gray-400"
                    }
                  />
                  male
                </label>
                <label htmlFor="female" className='px-2'>
                  <Field
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={values.gender === "female"}
                    className={
                      touched.gender && errors.gender
                        ? "border-red-500"
                        : "border-gray-400"
                    }
                  />
                  female
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500"
              />
           </div>
            
              <div className="flex flex-wrap py-5">
                  <label className='px-2 font-bold'>intresets :</label>
                {interests.map((intrest:any) =>
                  <label htmlFor={intrest} key={intrest} className='px-2'>
                    <Field
                      type="checkbox"
                      id={intrest}
                      name="intresets"
                      value={intrest}
                      className={
                        touched.intresets && errors.intresets
                          ? "border-red-500"
                          : "border-gray-400"
                      }
                    />
                    {intrest}
                  </label>
                )}
              </div>
              <ErrorMessage
                name="intresets"
                component="div"
                className="text-red-500"
              />
              <div className="flex">
                <label className="flex mx-2 font-bold">nationality:</label>
                <Field as="select" name="nation">
                  {nationality.map((nation:any) =>
                    <option key={nation} value={nation}>
                      {nation}
                    </option>
                  )}
                </Field>
              </div>
              <ErrorMessage
                name="nation"
                component="div"
                className="text-red-500"
              />
            </div>
         
    </div>
  )
}

export default Registerform3