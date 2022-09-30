import { bookTranslations } from './book.ja';
import { lendTranslations } from './lend.ja';
import { procureTranslation } from './procure.ja';

export const translations = {
  home: 'ホーム',
  applications: '申請',
  error: '問題が発生しました。時間をおいてもう一度実行してください。',
  login: 'ログイン',
  logout: 'ログアウト',
  'Total books loaded': '書籍表示数',
  'Back to home': 'ホームへ戻る',
  "The page you're looking for doesn't exist.":
    'お探しのページが見つかりませんでした。',
  book: bookTranslations,
  procure: procureTranslation,
  lend: lendTranslations,
};

export default translations;
