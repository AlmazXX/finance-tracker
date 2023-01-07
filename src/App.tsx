import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddT from "./containers/AddTransaction/AddT";
import Categories from "./containers/Categories/Categories";
import Home from "./containers/Home/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-transaction" element={<AddT />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Layout>
  );
}

export default App;