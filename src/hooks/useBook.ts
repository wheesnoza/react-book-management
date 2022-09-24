import useSWR from 'swr';
import { fetcher } from '@/services';

export const useBook = (id: string) => {
  const { data, error } = useSWR(`/api/book/${id}`, fetcher);

  return {
    book: data,
    lends: data?.lends,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBook;
