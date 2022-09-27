import flatten from 'lodash/flatten';
import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useSWRInfinite from 'swr/infinite';
import BookPage from './BookPage';
import { Book } from '@/models';

const PAGE_SIZE = 9;

const getKey = (pageIndex: number, previousPageData: []) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/api/books?page=${pageIndex + 1}&limit=${PAGE_SIZE}`;
};

export const BookList = () => {
  const { data, size, setSize } = useSWRInfinite<Book[]>(getKey);
  const { t } = useTranslation();
  const flattenData = flatten(data);
  const hits = flattenData.length;
  const isEmpty = flattenData.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  return (
    <>
      <Grid container spacing={2} sx={{ marginY: 1 }}>
        {data?.map((books, index) => (
          <BookPage key={index} books={books} />
        ))}
      </Grid>
      <Button
        onClick={() => setSize(size + 1)}
        variant="contained"
        disabled={isReachingEnd}
      >
        {t('book.page.more')}
      </Button>
      <Typography variant="caption" padding={2}>
        {t('Total books loaded')}: {hits}
      </Typography>
    </>
  );
};

export default BookList;
