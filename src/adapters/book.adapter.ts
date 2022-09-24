/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from '@/models';

export const bookAdapter = (data: any): Book => ({
  id: data?.id,
  title: data?.title,
  description: data?.description,
  stock: data?.stock,
  status: data?.status,
  thumbnail: data?.thumbnail,
});

export default bookAdapter;
