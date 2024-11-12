'use server';

import { sql } from '@vercel/postgres';
import type { User } from './lib/definitions';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      console.log('getUser server', user.rows[0]);
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }


export async function authorize(email: string, password: string) {
    const user = await getUser(email);
    if (!user) return null;
    const passwordsMatch = await bcrypt.compare(password, user.password);
    console.log('passwordsMatch', passwordsMatch);
    if (passwordsMatch) return true;

    console.log('Invalid credentials');
   
    return null;
}
  