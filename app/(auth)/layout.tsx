import {ReactNode} from 'react'

const AuthLayout = ({children}: {children:ReactNode}) => {
  return (
    <section className='bg-red-300 h-full'>
        {children}
    </section>
  )
}

export default AuthLayout