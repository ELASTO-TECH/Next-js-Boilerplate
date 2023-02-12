import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IAuthProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Auth = (props: IAuthProps) => {
  return (
    <div className="mx-auto flex h-screen max-w-screen-md flex-col text-gray-700 antialiased">
      {props.meta}
      <header></header>
      <main className="content mt-auto text-xl">{props.children}</main>
      <footer className="mt-auto border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  );
};

export { Auth };
