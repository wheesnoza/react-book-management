/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lend } from '@/models';

export const lendAdapter = (data: any): Lend => ({
  id: data?.id,
  from: new Date(data?.from),
  to: new Date(data?.to),
  user: {
    id: data?.user.id,
    name: data?.user.name,
    email: data?.user.email,
    role: data?.user.role,
  },
  book: data?.book,
  receivingMethod: data?.receivingMethod,
});

export default lendAdapter;
