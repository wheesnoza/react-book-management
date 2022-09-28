import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import { alert } from '@/services/alert.service';
import { AlertLevel, Book, bookSchema, PrivateRoutes } from '@/models';
import BookFormView from '../Form/BookFormView';

interface Props {
  defaultValues: Book;
  onSubmit: (book: Book) => Promise<Book>;
}

export const BookEditLogic = ({ defaultValues, onSubmit }: Props) => {
  const navigate = useNavigate();
  const form = useForm<Book>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(bookSchema),
  });

  const handleSubmit = async (book: Book) => {
    await onSubmit(book)
      .then(() => {
        navigate(generatePath(PrivateRoutes.BOOK_DETAIL, { bookId: book.id }));
        alert.display(t('book.edited'), AlertLevel.Success);
      })
      .catch(() => alert.display(t('error'), AlertLevel.Error));
  };

  return <BookFormView form={form} onSubmit={handleSubmit} />;
};

export default BookEditLogic;
