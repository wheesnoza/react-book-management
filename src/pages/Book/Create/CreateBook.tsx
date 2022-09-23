import { Book, BookStatus } from '@/models';
import CreateBookLogic from './CreateBookLogic';

const defaultBook = {
  id: 0,
  title: '',
  description: '',
  stock: 1,
  status: BookStatus.AVAILABLE,
};

export const CreateBook = () => {
  const handleSubmit = (data: Book) => {
    return new Promise<Book>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  };

  return (
    <CreateBookLogic defaultValues={defaultBook} onSubmit={handleSubmit} />
  );
};

export default CreateBook;
