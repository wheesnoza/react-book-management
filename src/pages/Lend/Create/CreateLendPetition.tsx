import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useBook } from '@/hooks';
import { Lend } from '@/models';
import CreateLendPetitionLogic from './CreateLendPetitionLogic';

export const CreateLendPetition = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { book } = useBook(bookId ?? '');

  const handleSubmit = (lend: Lend) => {
    return axios
      .post<Lend>('/api/lends', lend)
      .then((response) => response.data);
  };
  return <CreateLendPetitionLogic onSubmit={handleSubmit} book={book} />;
};

export default CreateLendPetition;
