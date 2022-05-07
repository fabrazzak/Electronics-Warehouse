import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventory/:inventoryId' element={
        <RequireAuth>
            <UpdateInventory></UpdateInventory>
        </RequireAuth>}></Route>

        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }> </Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }> </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
      <Footer></Footer> 

    </div>
  );
}

export default App;
