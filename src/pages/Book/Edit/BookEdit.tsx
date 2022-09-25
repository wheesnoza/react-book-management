import { useParams } from 'react-router-dom';
import { Book } from '@/models';
import { useBook } from '@/hooks';
import BookEditLogic from './BookEditLogic';

export const BookEdit = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { book } = useBook(bookId ?? '');

  const handleSubmit = (editedBook: Book) => {
    return fetch(`/api/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedBook),
    }).then((response) => response.json());
  };

  return <BookEditLogic defaultValues={book} onSubmit={handleSubmit} />;
};

export default BookEdit;
