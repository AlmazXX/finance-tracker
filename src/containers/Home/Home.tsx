import Transactions from "../../components/Transactions/Transactions";

const Home = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2>Transactions</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Home;