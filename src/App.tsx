import { Route, Routes } from "react-router-dom"
import Register from './pages/login/Login';
import LayoutPage from './pages/layout/Layout';
import Category from './pages/category/Category';
import EditCategory from './pages/EditCategory';
import CreateCategory from "./pages/category/CreateCategory";
import SubCategory from './pages/subcategory/Subcategory';
import CreateSubCategory from "./pages/subcategory/CreateSubCategory";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/app" element={<LayoutPage/>}>
        <Route path="/app" element={<Category/>}/>
        <Route path="create-category" element={<CreateCategory/>}/>
        <Route path="edit-category/:id" element={<EditCategory/>}/>
        <Route path="subcategory" element={<SubCategory/>}/>
        <Route path="create-subcategory" element={<CreateSubCategory/>}/>
      </Route>
    </Routes>
  )
}

export default App
