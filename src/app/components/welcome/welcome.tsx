'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import Button from '../button';

export interface WelcomeProps {}

export default function Welcome({}: WelcomeProps) {
  const router = useRouter();

  return (
    <div className={styles.bg}>
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <div className="flex gap-4">
        <Button onClick={() => router.push('/companies', { scroll: false })}>Companies</Button>
        <Button onClick={() => router.push('/dashboard', { scroll: false })}>Dashboard</Button>
      </div>
    </div>
  );
}
