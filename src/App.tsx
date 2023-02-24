import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { clientUrl } from "./constants";
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
        <Route path={clientUrl} element={<Home />} />
        <Route path={clientUrl + "/create-transaction"} element={<AddT />} />
        <Route path={clientUrl + "/edit-transaction/:id"} element={<EditT />} />
        <Route path={clientUrl + "/categories"} element={<Categories />} />
        <Route path={clientUrl + "/create-category"} element={<AddC />} />
        <Route path={clientUrl + "/edit-category/:id"} element={<EditC />} />
        <Route path={clientUrl + "/*"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;