import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import { Spinner } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import eyepass from '../../assets/picture/eye-svgrepo-com.svg';
import eyeoffpass from '../../assets/picture/eye-off-svgrepo-com.svg';

export function Signin() {
  const [showpassword, setShowpassword] = useState(false);
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [wronghandle, setWronghandle] = useState(false);

  const handleSubmit = (values) => {
    setIsloading(true);

    const { firstName, lastName, email, password } = values;

    let config = {
      method: 'post',
      url: 'https://api.hexarz.com/v1/api/manage/blogadmin/login',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    };

    // Perform signup logic here using the form values

    setIsloading(false);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      {/* Your background image code */}
      {/* ... */}

      <div className="w-full h-screen flex">
        {/* Your image code */}
        {/* ... */}

        <div className="w-4/12 h-full flex items-center justify-center">
          <Card className="w-full max-w-[24rem] border-2 border-gray-500/20">
            <CardHeader variant="gradient" color="white" className="mb-4 bg-[#13234D] border-2 border-gray-500/30 grid h-28 w-11/12 -top-12 m-auto place-items-center">
              <Typography className="font-yekan" variant="h3" color="white">
                ثبت نام
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-20">
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="flex flex-col gap-5">
                  <div className="flex gap-2 pr-2 pl-4 items-center justify-between">
                    <label htmlFor="firstName">نام:</label>
                    <Field
                      className="w-[79%] outline-none border-2 border-gray-500/20 rounded-lg h-10"
                      type="text"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <ErrorMessage name="firstName" component="div" className="text-gray-500 mr-2" />
                  <div className="flex gap-2 pr-2 pl-4 items-center justify-between">
                    <label htmlFor="lastName">نام خانوادگی:</label>
                    <Field
                      className="w-[79%] outline-none border-2 border-gray-500/20 rounded-lg h-10"
                      type="text"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <ErrorMessage name="lastName" component="div" className="text-gray-500 mr-2" />
                  <div className="flex gap-2 pr-2 pl-4 items-center justify-between">
                    <label htmlFor="email">ایمیل:</label>
                    <Field
                      className="w-[79%] outline-none border-2 border-gray-500/20 rounded-lg h-10"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-gray-500 mr-2" />
                  <div className="relative flex pr-2 pl-4 gap-2 items-center justify-between">
                    <label htmlFor="password">پسورد:</label>
                    <Field
                      type={showpassword ? 'password' : 'text'}
                      id="password"
                      name="password"
                      size="lg"
                      className="w-[79%] h-10 outline-none border-2 border-gray-500/20 rounded-lg"
                    />
                    <button className="absolute left-6 top-3" onClick={() => setShowpassword(!showpassword)}>
                      {showpassword ? <img src={eyepass} alt="" /> : <img src={eyeoffpass} alt="" />}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-gray-500 mr-2 " />
                  {wronghandle ? <p className="text-gray-500">نام کاربری یا پسورد اشتباه است</p> : null}
                  <div className="-ml-2.5">
                    <p>
                      در صورت وجود اکانت <Link className="text-blue-500" to={'/'}>
                        وارد
                      </Link>{' '}
                      شوید
                    </p>
                  </div>
                  <button
                    type="submit"
                    variant=""
                    fullWidth
                    className="font-yekan  mb-4 bg-[#13234D] rounded-lg w-20 h-10 items-center m-auto border-2 border-gray-500/20 flex justify-center"
                  >
                    {isloading ? <Spinner className="h-5 w-5 text-gray-900/50" /> : <p className="text-white ">ثبت نام</p>}
                  </button>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Signin;