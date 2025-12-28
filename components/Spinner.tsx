import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto 50px auto',
};

const Spinner = ({ color = 'blue', size = '150' }) => {
  return (
    <div>
      <BarLoader
        color="#3b82f6"
        width={300}
        height={4}
        cssOverride={{
          display: "block",
          margin: "0 auto",
        }}
        aria-label="Loading"
      />
    </div>
  );
};

export default Spinner;
