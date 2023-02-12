/* eslint-disable no-console */
/* eslint-disable import/order */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/Button';
import TextBox from '@/components/TextBox';
import { Meta } from '@/layouts/Meta';
import { Auth } from '@/templates/Auth';

import logo from '../../public/assets/images/logo.png';

const Login = () => {
  const [errorText] = useState('');
  const loginHandler = () => {
    console.log('login');
  };
  return (
    <Auth meta={<Meta title="Login" description="null" />}>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex">
          <Image alt="logo" src={logo} width="140" height="34" />
        </div>
        <div className="flex w-64 flex-col gap-2">
          <TextBox
            disabled={false}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          ></TextBox>
          <div className="mt-2">
            <TextBox
              disabled={false}
              id="pass"
              name="pass"
              placeholder="Password"
              type="password"
            ></TextBox>
          </div>

          <span className="text-red-500">{errorText && `*${errorText}`}</span>
        </div>
        <div className="mt-10 flex flex-col items-center ">
          <Button name="Login" handler={loginHandler}></Button>
          <div className="mt-10 flex flex-col items-center sm:mt-5">
            <Link
              className="w-fit cursor-pointer text-gray-800 hover:underline sm:text-base"
              href="/register"
            >
              Don&apos;t have an account?{' '}
            </Link>
            <Link
              className=" w-fit cursor-pointer text-gray-800 hover:underline sm:text-base"
              href="/forgot"
            >
              Forgot password?{' '}
            </Link>
          </div>
        </div>
      </div>
    </Auth>
  );
};
export default Login;
