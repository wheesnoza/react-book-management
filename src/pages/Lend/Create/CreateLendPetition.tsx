import { useParams } from 'react-router-dom';
import { useBook } from '@/hooks';
import { Lend } from '@/models';
import CreateLendPetitionLogic from './CreateLendPetitionLogic';

export const CreateLendPetition = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { book } = useBook(bookId ?? '');

  const handleSubmit = (lend: Lend) => {
    return fetch('/api/lends', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lend),
    }).then((response) => response.json());
  };
  return <CreateLendPetitionLogic onSubmit={handleSubmit} book={book} />;
};

export default CreateLendPetition;
