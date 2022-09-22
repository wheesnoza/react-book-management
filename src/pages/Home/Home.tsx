import useAuth from '@/hooks/useAuth';

export const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

export default Home;
