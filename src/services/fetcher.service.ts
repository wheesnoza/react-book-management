export const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });

export default fetcher;
