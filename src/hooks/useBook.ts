import useSWR from 'swr';
import { bookAdapter, lendAdapter } from '@/adapters';

export const useBook = (id: string) => {
  const { data } = useSWR(`/api/books/${id}`);

  return {
    book: bookAdapter(data),
    lends: data.lends.map(lendAdapter),
  };
};

export default useBook;
