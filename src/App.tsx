import { Route, Routes } from "react-router-dom"
import Register from './pages/login/Login';
import LayoutPage from './pages/layout/Layout';
import Category from './pages/category/Category';
import CreateCategory from './pages/category/CreateCategory';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/app" element={<LayoutPage/>}>
        <Route path="/app/category-list" element={<Category/>}/>
      </Route>
        <Route path="/app/create-category" element={<CreateCategory/>}/>
    </Routes>
  )
}

export default App
