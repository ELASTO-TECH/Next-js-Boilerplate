/* eslint-disable no-console */
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

import Button from '@/components/Button';
import TextBox from '@/components/TextBox';
import { Meta } from '@/layouts/Meta';
import { Auth } from '@/templates/Auth';

import logo from '../../public/assets/images/logo.png';

const Login = () => {
  const [error, setError] = useState('');

  const handleOnChange = () => {
    setError('');
  };

  const loginFormRules = {
    initialValues: {
      name: 'loginForm',
      email: '',
      password: '',
    },
    onSubmit: async (values: { name: any; email: any; password: any }) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(60, 'Must be 60 characters or less')
        .email('Invalid email address')
        .required('Please enter your email'),
      password: Yup.string().required('Please enter your password'),
    }),
  };

  return (
    <Auth meta={<Meta title="Login" description="null" />}>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex">
          <Image alt="logo" src={logo} width="140" height="34" />
        </div>
        <Formik {...loginFormRules}>
          <Form onChange={handleOnChange}>
            <div className="flex w-64  flex-col">
              <TextBox
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              ></TextBox>
              <div className="mt-4">
                <TextBox
                  id="pass"
                  name="pass"
                  placeholder="Password"
                  type="password"
                ></TextBox>
              </div>

              <span className="text-xs text-red-500">{error}</span>

              <Button
                className="mx-auto mt-10 "
                name="login"
                id="login"
                text="Login"
              ></Button>
            </div>
          </Form>
        </Formik>

        <div className="mt-14 flex flex-col items-center sm:mt-10">
          <Link
            className="w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/register"
          >
            Don&apos;t have an account?{' '}
          </Link>
          <Link
            className=" w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/forgot"
          >
            Forgot password?{' '}
          </Link>
        </div>
      </div>
    </Auth>
  );
};
export default Login;
