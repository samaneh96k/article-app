//create form includes of selected items for   national  person   and use  Formik  and yup
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RegisterformName from "./registerform1";
import RegisterFormPassWord from "./registerForm2";
import Registerform3 from "./registerform3";
import { useState } from 'react';
interface MyFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
  gender: string;
  intresets: string[];
  nation: string;
}

const SignInForm = () => {
  const interests = ["React", "Angular", "Vue", "Ember", "Backbone"];
  const nationality = ["IR", "US", "GER", "TUR", "CHINA"];
  const [currentStep, setCurrentStep] = useState(1);
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
    intresets: [],
    nation: ""
  };
  const steps = [
    { id: 1, title: 'Step 1' },
    { id: 2, title: 'Step 2' },
    { id: 3, title: 'Step 3' },
  ];
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    phone: Yup.string()
      .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Invalid phone number!")
      .required("Phone number is required!"),
    password: Yup.string()
      .min(4, "Password is too short!")
      .max(20, "Password is too long!")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match!")
      .required("Confirm password is required!"),
    gender: Yup.string().required("gender is required!"),
    nation: Yup.string().required("nation is required!"),
    intresets: Yup.array().min(1).of(Yup.string().required()).required()
  });
//back ground image
  return (
    <div className="mx-auto w-1/2 my-8 h-full bg-white bg-opacity-30 p-10 rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-center"> Sign In</h1>
      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted successfully", values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isValid, values }) =>
          <Form className="space-y-4">
             {/* Step 1 */}
            {currentStep === 1 && (
              <>
              <RegisterformName touched={touched} errors={errors} />
     <div className="flex justify-end">
     <button type="button" onClick={handleNextStep} className="bg-black text-white bg-opacity-90 hover:bg-opacity-60 rounded-md px-5 py-1 font-bold ">Next</button>
     </div>
              </>
            )}
                   {/* Step 2 */}
        {currentStep === 2 && (<>
              <RegisterFormPassWord touched={touched} errors={errors} />
              <div className="flex   justify-between">
              <button type="button" onClick={handlePrevStep} className="bg-black text-white bg-opacity-90 hover:bg-opacity-60 rounded-md px-5 py-1 font-bold ">Back</button>
              <button type="button" onClick={handleNextStep} className="bg-black text-white bg-opacity-90 hover:bg-opacity-60 rounded-md px-5 py-1 font-bold ">Next</button>
              </div>
              </>
            )}
              {/* Step 3 */}
        {currentStep === 3 && (<>
            <Registerform3 touched={touched} errors={errors} values={values} isValid={isValid} interests={interests} nationality={nationality} />
              <div className="flex   justify-between">
              <button type="button" onClick={handlePrevStep} className="bg-black text-white bg-opacity-90 hover:bg-opacity-60 rounded-md px-5 py-1 font-bold ">Back</button>
              <button
              type="submit"
              disabled={!isValid}
              className={`${isValid
                ? "bg-blue-500"
                : "bg-gray-500"} text-white  px-4 py-1 rounded`}
            >
              Submit
            </button>
             </div>
              </>
            )}
          </Form>}
      </Formik>
    </div>
  );
};

export default SignInForm;
