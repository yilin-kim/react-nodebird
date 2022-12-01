import AppLayout from "../components/AppLayout";

// next는 pages 폴더 안에 들어있어야만 code splitting이 가능하다.
const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  );
};

export default Home;
