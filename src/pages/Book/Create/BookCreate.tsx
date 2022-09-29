import axios from 'axios';
import { Book } from '@/models';
import CreateBookLogic from './BookCreateLogic';

export const BookCreate = () => {
  const handleSubmit = (book: Book) => {
    return axios
      .post<Book>('/api/books', book)
      .then((response) => response.data);
  };

  return <CreateBookLogic onSubmit={handleSubmit} />;
};

export default BookCreate;
