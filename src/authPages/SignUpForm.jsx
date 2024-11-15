import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';



const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: 'url(/assets/image1.jpg)' }}>
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



