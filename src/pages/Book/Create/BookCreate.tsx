import { Book } from '@/models';
import CreateBookLogic from './BookCreateLogic';

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

  return <CreateBookLogic onSubmit={handleSubmit} />;
};

export default BookCreate;
