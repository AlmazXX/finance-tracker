import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddC from "./containers/Categories/Add/AddC";
import Categories from "./containers/Categories/Categories";
import EditC from "./containers/Categories/Edit/EditC";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import AddT from "./containers/Transactions/Add/AddT";
import EditT from "./containers/Transactions/Edit/EditT";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;