import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddT from "./containers/Transactions/Add/AddT";
import AddC from "./containers/Categories/Add/AddC";
import Categories from "./containers/Categories/Categories";
import Home from "./containers/Home/Home";
import EditT from "./containers/Transactions/Edit/EditT";
import EditC from "./containers/Categories/Edit/EditC";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-transaction" element={<AddT />} />
        <Route path="/edit-transaction/:id" element={<EditT />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create-category" element={<AddC />} />
        <Route path="/edit-category/:id" element={<EditC />} />
      </Routes>
    </Layout>
  );
}

export default App;