import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Book } from '@/models';
import { useBook } from '@/hooks';
import BookEditLogic from './BookEditLogic';

export const BookEdit = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { book } = useBook(bookId ?? '');

  const handleSubmit = (editedBook: Book) => {
    return axios
      .put<Book>(`/api/books/${bookId}`, editedBook)
      .then((response) => response.data);
  };

  return <BookEditLogic defaultValues={book} onSubmit={handleSubmit} />;
};

export default BookEdit;
