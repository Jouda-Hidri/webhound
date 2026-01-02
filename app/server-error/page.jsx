import Link from 'next/link';
const ServerErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>500</h1>
      <p style={styles.message}>
        Oops! Server error while loading the page
      </p>
      <Link href="/" style={styles.link}>
        ← Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#fff',
  },
  title: {
    fontSize: '72px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default ServerErrorPage;
