import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
 return <section className='h-full bg-red-300'>{children}</section>;
};

export default AuthLayout;
