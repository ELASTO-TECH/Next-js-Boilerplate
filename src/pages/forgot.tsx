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
import { delay } from '@/utils/functions';

import logo from '../../public/assets/images/logo.png';

const Forgot = () => {
  const [error, setError] = useState('');
  const [successText, setSuccessText] = useState('');
  const t = en;
  const handleOnChange = () => {
    setError('');
  };

  const forgotFormRules = {
    initialValues: {
      name: 'forgotForm',
      email: '',
    },
    onSubmit: async (values: { email: string }) => {
      await delay(1000);
      setSuccessText(t.resetEmailSent);
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(60, t.maxCountMessage)
        .email(t.emailValidation)
        .required(t.required),
    }),
  };

  return (
    <Auth meta={<Meta title={t.forgotPage} description="null" />}>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex">
          <Image alt="logo" src={logo} width="140" height="34" />
        </div>
        <Formik {...forgotFormRules}>
          {({ isSubmitting }) => (
            <>
              {!successText && (
                <Form onChange={handleOnChange}>
                  <div className="flex w-64  flex-col">
                    <TextBox
                      id="email"
                      name="email"
                      placeholder={t.emailPlaceholder}
                      type="email"
                    ></TextBox>

                    <span className="whitespace-nowrap text-xs text-red-500">
                      {error}
                    </span>

                    <Button
                      className="mx-auto mt-10 "
                      name="forgot"
                      id="forgot"
                      text={isSubmitting ? t.wait : t.forgotBtn}
                      disabled={isSubmitting}
                    ></Button>
                  </div>
                </Form>
              )}
            </>
          )}
        </Formik>
        <span className="my-4 whitespace-nowrap text-sm text-green-500">
          {successText}
        </span>

        <div className="mt-14 flex flex-col items-center sm:mt-10">
          <Link
            className="w-fit cursor-pointer text-base text-gray-800 hover:underline"
            href="/login"
          >
            {t.backToLogin}
          </Link>
        </div>
      </div>
    </Auth>
  );
};
export default Forgot;
