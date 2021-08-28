import styles from '@/styles/layout.module.css';
import { theme } from '@/styles/colorTheme';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div style={{ padding: '1rem' }}>
        <Header />
        <div style={{ backgroundColor: theme.palette.primary.main }} className={styles.container}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
