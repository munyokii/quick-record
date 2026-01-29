'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthInput from '@/app/ui/auth-input';
import Button from '@/app/ui/button';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = (name: string, value: string) => {
    if (name === 'email') {
      return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format';
    }
    if (name === 'password') {
      return value.length >= 1 ? '' : 'Password is required';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailError = validate('email', formData.email);
    const passwordError = validate('password', formData.password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    setIsLoading(true);
    // Real Auth Logic goes here (Firebase/Supabase/etc.)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const isInvalid = !!errors.email || !!errors.password || !formData.email || !formData.password;

  return (
    <div className="relative isolate min-h-screen bg-white px-6 py-12 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-xl -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-6xl" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-12">
        <Link href="/" className="flex justify-center transition-opacity hover:opacity-80">
          <Image alt="Quick Records" src="/favicon.ico" className="h-12 w-auto" width={300} height={300} />
        </Link>
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900 uppercase">
          Sign in to quick records
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput 
            label="Email address" 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          
          <AuthInput 
            label="Password" 
            id="password" 
            name="password" 
            type="password" 
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            rightElement={
              <Link href="#" className="text-xs font-bold text-orange-600 hover:text-orange-500 uppercase">
                Forgot password?
              </Link>
            }
          />

          <Button type="submit" isLoading={isLoading} disabled={isInvalid}>
            Sign in
          </Button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          New to Quick Records?{' '}
          <Link href="/signup" className="font-bold text-orange-600 hover:text-orange-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}