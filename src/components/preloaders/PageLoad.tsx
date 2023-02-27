import React from 'react';
import { Oval } from 'react-loader-spinner';

type IPageLoadProps = {
  message?: string;
};

export default function PageLoad(props: IPageLoadProps) {
  return (
    <>
      {/* TODO: CHANGE SPINNER COLOR ACORDING TO THE PROJECT */}
      <div className="fixed z-40 mt-auto flex h-full w-full flex-col items-center justify-center bg-white bg-cover">
        <Oval
          height={70}
          width={70}
          color="#51D0F0"
          wrapperStyle={{}}
          wrapperClass="mb-2"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#51D0F0"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <span className="text-base font-light text-highlight-900">
          {props.message || 'Please wait ...'}
        </span>
      </div>
    </>
  );
}
