import Topbar from './components/Topbar/Topbar';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <Hero />
        <Categories />
      </div>
    </>
  );
}

export default App;
