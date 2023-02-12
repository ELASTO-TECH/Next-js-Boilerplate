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

  const registerFormRules = {
    initialValues: {
      name: 'registerForm',
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: async (
      values: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        name: string;
      },
      { resetForm }: any
    ) => {
      /* Make the user user call and redirect to the propper page on success */
      console.log(values);
      setError('');
      resetForm('');
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email'),
      password: Yup.string()
        .required('Please enter your password')
        .min(8, 'Password is too short'),
      passwordConfirmation: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      firstName: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter your last name'),
    }),
  };

  return (
    <Auth meta={<Meta title="Login" description="null" />}>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex">
          <Image alt="logo" src={logo} width="140" height="34" />
        </div>
        <Formik {...registerFormRules}>
          <Form onChange={handleOnChange}>
            <div className="flex w-64  flex-col">
              <TextBox
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <TextBox
                className="mt-4"
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />
              <TextBox
                className="mt-4"
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
              />
              <TextBox
                className="mt-4"
                name="firstName"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
              <TextBox
                className="mt-4"
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />

              <span className="text-xs text-red-500">{error}</span>

              <Button
                className="mx-auto mt-10 "
                name="signup"
                id="signup"
                text="Sign up"
              ></Button>
            </div>
          </Form>
        </Formik>

        <div className="mt-14 flex flex-col items-center sm:mt-10">
          <Link
            className="w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/login"
          >
            Already have an account?{' '}
          </Link>
        </div>
      </div>
    </Auth>
  );
};
export default Login;
