import { v4 as uuid } from 'uuid';
import { Book, BookStatus } from '@/models';
import CreateBookLogic from './CreateBookLogic';

const defaultBook = {
  id: uuid(),
  title: '',
  description: '',
  stock: 1,
  status: BookStatus.AVAILABLE,
};

export const CreateBook = () => {
  const handleSubmit = (book: Book) => {
    return new Promise<Book>((resolve) => {
      setTimeout(() => {
        resolve(book);
      }, 3000);
    });
  };

  return (
    <CreateBookLogic defaultValues={defaultBook} onSubmit={handleSubmit} />
  );
};

export default CreateBook;
