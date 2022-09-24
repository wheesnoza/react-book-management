import useSWR from 'swr';
import { fetcher } from '@/services';
import { bookAdapter, lendAdapter } from '@/adapters';

export const useBook = (id: string) => {
  const { data, error } = useSWR(`/api/book/${id}`, fetcher);

  const loading = !error && !data;

  return {
    book: bookAdapter(data),
    lends: data?.lends.map(lendAdapter),
    isLoading: loading,
    isError: error,
  };
};

export default useBook;
