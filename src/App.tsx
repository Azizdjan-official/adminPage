import { Route, Routes } from "react-router-dom"
import Register from './pages/login/Login';
import LayoutPage from './pages/layout/Layout';
import Category from './pages/category/Category';
import CreateCategory from './pages/category/CreateCategory';
import EditCategory from './pages/EditCategory';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/app" element={<LayoutPage/>}>
        <Route path="/app" element={<Category/>}/>
        <Route path="create-category" element={<CreateCategory/>}/>
        <Route path="edit-category/:id" element={<EditCategory/>}/>
      </Route>
    </Routes>
  )
}

export default App
