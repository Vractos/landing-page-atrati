'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toast } from '@/components/ui/toast';
import { Bell } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Notification email:', email);
    setEmail('');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className='flex flex-col items-center justify-between min-h-screen bg-purple-50 p-4'>
      <div className='flex-1 flex items-center justify-center w-full'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-purple-800 mb-4'>
            Coming Soon
          </h1>
          <p className='text-purple-600 mb-8'>
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-2 max-w-md mx-auto'
          >
            <Input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='flex-grow'
            />
            <Button
              type='submit'
              className='bg-purple-600 hover:bg-purple-700 text-white'
            >
              <Bell className='w-4 h-4 mr-2' />
              Notify Me
            </Button>
          </form>
        </div>
      </div>

      <div className='mt-auto pt-8'>
        <Image
          src='/android-chrome-512x512.png'
          alt='Logo'
          width={50}
          height={50}
          className='mx-auto rounded-md'
        />
      </div>

      {showToast && (
        <Toast className='fixed bottom-4 right-4 bg-purple-600 text-white'>
          Thanks! We&apos;ll notify you when we launch.
        </Toast>
      )}
    </div>
  );
}
