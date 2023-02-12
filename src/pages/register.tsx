/* eslint-disable no-console */
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

import Button from '@/components/Button';
import TextBox from '@/components/TextBox';
import { Meta } from '@/layouts/Meta';
import en from '@/locales/en';
import { Auth } from '@/templates/Auth';

import logo from '../../public/assets/images/logo.png';

const Register = () => {
  const [error, setError] = useState('');
  const t = en;
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
      email: Yup.string().email(t.emailValidation).required(t.required),
      password: Yup.string().required(t.required).min(8, t.minCountMessage),
      passwordConfirmation: Yup.string()
        .required(t.required)
        .oneOf([Yup.ref('password'), null], t.passwordMatchError),
      firstName: Yup.string().required(t.required),
      lastName: Yup.string().required(t.required),
    }),
  };

  return (
    <Auth meta={<Meta title={t.registerPage} description="null" />}>
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
                placeholder={t.emailPlaceholder}
                autoComplete="email"
              />
              <TextBox
                className="mt-4"
                name="password"
                id="password"
                type="password"
                placeholder={t.passwordPlaceholder}
                autoComplete="new-password"
              />
              <TextBox
                className="mt-4"
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                placeholder={t.confirmPasswordPlaceholder}
                autoComplete="new-password"
              />
              <TextBox
                className="mt-4"
                name="firstName"
                id="firstName"
                type="text"
                placeholder={t.firstnamePlaceholder}
              />
              <TextBox
                className="mt-4"
                name="lastName"
                id="lastName"
                type="text"
                placeholder={t.lastnamePlaceholder}
              />

              <span className="whitespace-nowrap text-xs text-red-500">
                {error}
              </span>
              <Button
                className="mx-auto mt-10 "
                name="register"
                id="register"
                text={t.registerBtn}
              ></Button>
            </div>
          </Form>
        </Formik>

        <div className="mt-14 flex flex-col items-center sm:mt-10">
          <Link
            className="w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/login"
          >
            {t.existingAccount}
          </Link>
        </div>
      </div>
    </Auth>
  );
};
export default Register;
