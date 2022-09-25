import { v4 as uuid } from 'uuid';
import { Book, BookStatus } from '@/models';
import CreateBookLogic from './BookCreateLogic';

const defaultBook = {
  id: uuid(),
  title: '',
  description: '',
  stock: 0,
  status: BookStatus.AVAILABLE,
  thumbnail: '',
};

export const BookCreate = () => {
  const handleSubmit = (book: Book) => {
    return fetch('/api/books', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    }).then((response) => response.json());
  };

  return (
    <CreateBookLogic defaultValues={defaultBook} onSubmit={handleSubmit} />
  );
};

export default BookCreate;
