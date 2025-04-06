import styles from "./Layout.module.css";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
    <header className={styles.header}>
        <h1>Book App</h1>
        <p>Mythrize lab | A Platform for Blockchain</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Sadjad Afkhami.</p>
    </footer>
    </>
  );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout;