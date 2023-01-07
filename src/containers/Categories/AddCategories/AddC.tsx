import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import { Category } from "../../../types";

const AddC = () => {

  const onSubmit = (category: Category) => {
    
  }
  
  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2>Create category</h2>
        </div>
      </div>
      <div className="row">
        <div className="col"><CategoryForm onSubmit={onSubmit}/></div>
      </div>
    </>
  );
};

export default AddC;