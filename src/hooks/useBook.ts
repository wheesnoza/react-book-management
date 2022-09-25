import useSWR from 'swr';
import { bookAdapter, lendAdapter } from '@/adapters';

export const useBook = (id: string) => {
  const { data, error } = useSWR(`/api/book/${id}`);

  return {
    book: bookAdapter(data),
    lends: data.lends.map(lendAdapter),
    isError: error,
  };
};

export default useBook;
