import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';


const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.8055 10.1913H12V13.8054H17.1045C16.6063 15.9935 14.6308 17.6534 12 17.6534C8.96243 17.6534 6.54779 15.2488 6.54779 12.2112C6.54779 9.17352 8.96243 6.769 12 6.769C13.5201 6.769 14.8999 7.31243 15.9055 8.22879L18.561 5.57228C16.6763 3.87352 14.3806 2.77771 12 2.77771C6.47 2.77771 2 7.24771 2 12.2112C2 17.1748 6.47 21.6446 12 21.6446C17.53 21.6446 22 17.1748 22 12.2112C22 11.5025 21.9445 10.8003 21.8055 10.1913Z"
        fill="#DB4437"
      />
    </svg>
  );

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/027/231/616/non_2x/illustration-graphic-of-aesthetic-colorful-background-template-with-minimalist-pastel-colors-and-abstract-fluid-shapes-simple-and-minimalist-background-template-vector.jpg')] bg-cover bg-center">
      <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign up to Dribbble</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full bg-black text-white hover:bg-black hover:text-white hover:opacity-80">
        <FcGoogle size={24} />
          Sign up with Google
        </Button>
        <p className="text-center my-4">or</p>
        <Input type="email" placeholder="Continue with email" />
        <p className="text-center my-4"></p>
        <Input type="password" placeholder="Continue with password" />
        <p className="text-center my-4"></p>
        <Button variant="outline" className="w-full">
          Submit
        </Button>
        <div className="text-sm text-gray-500 mt-4 text-center">
          By creating an account you agree with our{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Terms of Service
          </a>
          ,{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>
          , and our default{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Notification Settings
          </a>
          .
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Sign In
          </a>
        </p>
      </CardContent>
    </Card>
</div>
  );
};

export default SignUpForm;



