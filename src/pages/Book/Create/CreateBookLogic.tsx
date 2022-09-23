import yup from '@/locales/yup.locale';
import { AlertLevel, Book, BookStatus, PrivateRoutes } from '@/models';
import { alert } from '@/services/alert.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import BookForm from '../Form/BookForm';

const schema = yup.object().shape({
  title: yup.string().label('book.title').required().max(80),
  description: yup.string().label('book.description').required().max(250),
  stock: yup.number().label('book.stock').required().min(1),
  status: yup
    .string()
    .oneOf(Object.values(BookStatus))
    .label('book.status')
    .required(),
});

interface Props {
  defaultValues: Book;
  onSubmit: (book: Book) => Promise<Book>;
}

export const CreateBookLogic = ({ defaultValues, onSubmit }: Props) => {
  const navigate = useNavigate();
  const form = useForm<Book>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (book: Book) => {
    await onSubmit(book)
      .then(() => {
        navigate(generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id }));
        alert.display(t('book.created'), AlertLevel.Success);
      })
      .catch(() => alert.display(t('error'), AlertLevel.Error));
  };

  return <BookForm form={form} onSubmit={handleSubmit} />;
};

export default CreateBookLogic;
