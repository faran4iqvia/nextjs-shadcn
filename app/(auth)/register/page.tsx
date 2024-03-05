'use client';

import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
 Card,
 CardContent,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
 const router = useRouter();
 return (
  <section className='flex w-full items-center justify-center p-4'>
   <Card className='w-96'>
    <CardHeader className='space-y-1'>
     <CardTitle className='text-2xl text-center'>Create an account</CardTitle>
    </CardHeader>
    <CardContent className='grid gap-4'>
     <div className='grid grid-cols-2 gap-6'>
      <Button variant='outline'>
       <Icon name='github' className='mr-2 h-4 w-4' />
       {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
       Github
      </Button>
      <Button variant='outline'>
       <Icon name='log-in' className='mr-2 h-4 w-4' />
       {/* <Icons.google className="mr-2 h-4 w-4" /> */}
       Google
      </Button>
     </div>
     <div className='relative'>
      <div className='absolute inset-0 flex items-center'>
       <span className='w-full border-t' />
      </div>
      <div className='relative flex justify-center text-xs uppercase'>
       <span className='bg-background px-2 text-muted-foreground'>
        Or continue with
       </span>
      </div>
     </div>
     <div className='grid gap-2'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' type='email' placeholder='m@example.com' />
     </div>
     <div className='grid gap-2'>
      <Label htmlFor='password'>Password</Label>
      <Input id='password' type='password' />
     </div>
    </CardContent>
    <CardFooter className='flex flex-col gap-2'>
     <Button className='w-full'>Create account</Button>
     <p className='text-sm font-medium leading-none'>
      Already have an account?{' '}
      <Button variant={'link'} onClick={() => router.push('/login')}>
       Login
      </Button>
     </p>
    </CardFooter>
   </Card>
  </section>
 );
};

export default RegisterPage;
