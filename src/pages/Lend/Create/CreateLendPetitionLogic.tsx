import { t } from 'i18next';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@/hooks';
import { AlertLevel, Book, Lend, lendSchema, PrivateRoutes } from '@/models';
import { alert } from '@/services';
import LendPetitionFormView, {
  LendPetitionForm,
} from '../Form/LendPetitionFormView';

interface Props {
  book: Book;
  onSubmit: (lend: Lend) => Promise<Lend>;
}

export const CreateLendPetitionLogic = ({ book, onSubmit }: Props) => {
  const { user } = useAuth();
  const form = useForm<LendPetitionForm>({
    mode: 'onSubmit',
    resolver: yupResolver(lendSchema),
  });
  const navigate = useNavigate();

  const handleSubmit = async (lendPetitionForm: LendPetitionForm) => {
    const lend: Lend = {
      id: uuid(),
      from: lendPetitionForm.range[0],
      to: lendPetitionForm.range[1],
      receivingMethod: lendPetitionForm.receivingMethod,
      book,
      user,
    };
    await onSubmit(lend)
      .then(() => {
        navigate(generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id }));
        alert.display(t('lend.petition.created'), AlertLevel.Success);
      })
      .catch(() => alert.displayError());
  };
  return (
    <LendPetitionFormView onSubmit={handleSubmit} form={form} book={book} />
  );
};

export default CreateLendPetitionLogic;
