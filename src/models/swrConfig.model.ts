import { SWRConfiguration } from 'swr';

export const swrConfig: SWRConfiguration = {
  suspense: true,
  onErrorRetry: (error) => {
    // eslint-disable-next-line no-useless-return
    if (error.response.status === 404) return;
  },
};
