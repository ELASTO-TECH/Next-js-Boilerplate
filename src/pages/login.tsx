/* eslint-disable no-console */
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';

import Button from '@/components/Button';
import TextBox from '@/components/TextBox';
import { Meta } from '@/layouts/Meta';
import en from '@/locales/en';
import { Auth } from '@/templates/Auth';

import logo from '../../public/assets/images/logo.png';

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const t = en;

  const handleOnChange = () => {
    setError('');
  };

  const loginFormRules = {
    initialValues: {
      name: 'loginForm',
      email: '',
      password: '',
    },
    onSubmit: async (
      values: { email: string; password: string },
      { resetForm }: any
    ) => {
      resetForm(' ');
      console.log(values);
      router.push('/');
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(60, t.maxCountMessage)
        .email(t.emailValidation)
        .required(t.required),
      password: Yup.string().required(t.required),
    }),
  };

  return (
    <Auth meta={<Meta title={t.loginPage} description="null" />}>
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
                placeholder={t.emailPlaceholder}
                type="email"
              ></TextBox>
              <TextBox
                className="mt-4"
                id="password"
                name="password"
                placeholder={t.passwordPlaceholder}
                type="password"
              ></TextBox>

              <span className="whitespace-nowrap text-xs text-red-500">
                {error}
              </span>
              <Button
                className="mx-auto mt-10"
                name="login"
                id="login"
                text={t.loginBtn}
              ></Button>
            </div>
          </Form>
        </Formik>

        <div className="mt-14 flex flex-col items-center sm:mt-10">
          <Link
            className="w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/register"
          >
            {t.noAccount}
          </Link>
          <Link
            className=" w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/forgot"
          >
            {t.forgotPassword}
          </Link>
        </div>
      </div>
    </Auth>
  );
};
export default Login;
