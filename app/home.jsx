import CoinCard from '../components/CoinCard';
import FilterInput from '../components/FilterInput';
import Spinner from '../components/Spinner';

const HomePage = ({
  coins,
  filter,
  setFilter,
  loading,
  error,
}) => {
  const filteredCoins = coins
    .filter((coin) => {
      return (
        coin.username.toLowerCase().includes(filter.toLowerCase()) ||
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.email.toLowerCase().includes(filter.toLowerCase())
      );
    });

  return (
    <div>
      <h1>🚀 Webhound</h1>
      {loading && <Spinner color='white' />}
      {error && <div className='error'>{error}</div>}

      <div className='top-controls'>
        <FilterInput filter={filter} onFilterChange={setFilter} />
      </div>

      {!loading && !error && (
        <main className='grid'>
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No matching cards</p>
          )}
        </main>
      )}
    </div>
  );
};

export default HomePage;
