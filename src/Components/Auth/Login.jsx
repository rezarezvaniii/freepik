import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import axios from 'axios';
import * as Yup from "yup";
import picBgLogin from '../../assets/picture/395434.jpg';
import { useNavigate } from 'react-router-dom';
import { Formik, Form , Field, ErrorMessage } from 'formik';
import eyepass from "../../assets/picture/eye-svgrepo-com.svg";
import eyeoffpass from "../../assets/picture/eye-off-svgrepo-com.svg";
export function Signin() {
  const [showpassword, setShowpassword] = useState(false)
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false)
  const [wronghandle, setWronghandle] = useState(false);


  const handleSubmit = (values) => {

    setIsloading(true)
    navigate("/home")
    // const { username, password } = values;


    // let config = {
    //   method: 'post',
    //   url: 'https://api.hexarz.com/v1/api/manage/blogadmin/login',
    //   data: {
    //     password: password,
    //     username: username
    //   }
    // };

    // axios.request(config)
    //   .then((response) => {
    //     console.log(response.data.data);
    //     window.localStorage.setItem("token", response.data.data.token)
    //     // window.localStorage.setItem("refreshtoken", response.data.data.refreshtoken);
    //     navigate("/home")
    //     setIsloading(false)

    //   })
    //   .catch((error) => {
    //     console.log(error.toString());
    //     setWronghandle(true);
    //     setIsloading(false)
    //   });

  };

  const initialValues = {
    username: '',
    password: '',
  };


  const validationSchema = Yup.object({
    username: Yup.string().required('پر کردن این فیلد اجباری است'),
    password: Yup.string().required('پر کردن این فیلد اجباری است'),
  });

  return (
    <>
      {/* <img
        src={picBgLogin}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      /> */}

      <div className="w-full h-screen flex ">

        <div className="w-4/12 h-full flex items-center max-[1118px]:w-full justify-center">

          <Card className=" w-full max-w-[24rem] border-2 border-gray-500/20 ">
            <CardHeader
              variant="gradient"
              color="white"
              className="mb-4 bg-gray-400 border-2 border-gray-500/30 grid h-28 w-11/12 -top-12 m-auto place-items-center"
              
            >
              <Typography className="font-yekan" variant="h3" color="black">
                ورود
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-20">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="flex flex-col gap-5">
                  <div className="flex gap-2 pr-2 pl-4 items-center justify-between">

                  <label htmlFor="username ">نام کاربری:</label>
                  <Field
                    className="w-[79%] outline-none  border-2 border-gray-500/20 rounded-lg h-10"
                    type="text"
                    id="username"
                    name="username"
                    size="lg"
                    placeholderTextColor="#444"
                    textContentType="emailAddress"
                    autoFocus={true}
                    autoCapitalize="none"
                    />
                    </div>
                  <ErrorMessage name="username" component="div" className="text-gray-500 mr-2" />
                  <div className="relative flex pr-2 pl-4 gap-2 items-center justify-between">
                    <label htmlFor="password">پسورد:</label>
                    <Field
                      type={showpassword ? "password" : "text"}
                      id="password"
                      name="password"
                      size="lg"
                      placeholderTextColor="#444"
                      textContentType=""
                      secureTextEntry={true}
                      autoCorrect={false}
                      className='w-[79%] h-10 outline-none border-2 border-gray-500/20 rounded-lg'
                    />
                    <button className="absolute left-6 top-3" onClick={() => setShowpassword(!showpassword)}>
                      {
                        showpassword ?
                          <img src={eyepass} alt="" />
                          :
                          <img src={eyeoffpass} alt="" />
                      }

                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-gray-500 mr-2 " />
                  {
                    wronghandle ? <p className="text-gray-500"> نام کاربری یا پسورد اشتباه است</p>
                      : null
                  }
                  <div className="-ml-2.5">
                    <p>درصورت نداشتن اکانت <Link className="text-blue-500" to={"/signin"}>ثبت نام</Link> کنید</p>
                  </div>

                  <button
                    type="submit"
                    variant=""
                    fullWidth
                    className="font-yekan  mb-4 bg-gray-400 rounded-lg w-20 h-10 items-center m-auto border-2 border-gray-500/20 flex justify-center"
                  >
                    {
                      isloading ?
                        <Spinner className="h-5 w-5  text-gray-900/50" />
                        :
                        <p className="text-black ">ورود</p>
                    }
                  </button>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </div>

        <div className="w-8/12 h-full max-[1118px]:hidden">
          <img
            src="https://static-gcp.freepikcompany.com/web-app/media/freepik-4-2000.webp"
            className="h-full w-full  object-cover"
          />
        </div>  

      </div>
    </>
  );
}

export default Signin;