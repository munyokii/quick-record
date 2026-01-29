'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthInput from '@/app/ui/auth-input';
import Button from '@/app/ui/button';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirm: '' });

  const validate = (name: string, value: string, currentData: typeof formData) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Full name is required' : '';
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
      case 'password':
        return value.length < 6 ? 'Password must be 6+ characters' : '';
      case 'confirm':
        return value !== currentData.password ? 'Passwords do not match' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    
    const error = validate(name, value, updatedData);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (name === 'password' && formData.confirm) {
      setErrors((prev) => ({ 
        ...prev, 
        confirm: validate('confirm', formData.confirm, updatedData) 
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Real Auth Logic goes here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const hasErrors = Object.values(errors).some(err => err !== '');
  const isFormIncomplete = Object.values(formData).some(val => val === '');

  return (
    <div className="relative isolate min-h-screen bg-white px-6 py-12 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-xl -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-6xl" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-8 text-center">
        <Link href="/" className="flex justify-center transition-opacity hover:opacity-80">
          <Image alt="Quick Records" src="/favicon.ico" className="h-12 w-auto" width={300} height={300} />
        </Link>
        <h2 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 uppercase">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSubmit} className="space-y-3 bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm ring-1 ring-gray-900/5">
          <AuthInput 
            label="Full Name" id="name" name="name" 
            placeholder="John Doe" value={formData.name} onChange={handleChange} error={errors.name}
          />
          <AuthInput 
            label="Email" id="email" name="email" type="email"
            placeholder="you@example.com"
            value={formData.email} onChange={handleChange} error={errors.email}
          />
          <AuthInput 
            label="Password" id="password" name="password" type="password" 
            value={formData.password} onChange={handleChange} error={errors.password}
          />
          <AuthInput 
            label="Confirm Password" id="confirm-password" name="confirm" type="password" 
            value={formData.confirm} onChange={handleChange} error={errors.confirm}
          />

          <Button type="submit" isLoading={isLoading} disabled={hasErrors || isFormIncomplete} className="mt-6">
            Get Started
          </Button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-orange-600 hover:text-orange-500">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}