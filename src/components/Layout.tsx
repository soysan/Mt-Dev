import styles from '@/styles/layout.module.css';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '15px 15px 80px rgba(0,0,0, .6), -15px -10px 80px rgba(255,255,255, .6)',
            background: 'rgba(255,255,255, .3)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <Header />
          <div className={styles.container}>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
