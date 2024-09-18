import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from "./pages/MainPage";
import Menu from "./components/Menu";
import UserRegisterPage from "./pages/UserRegisterPage";
import UsersListPage from './pages/UsersListPage'


function App() {
  return (

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/userRegisterPage" element={<UserRegisterPage />} />
          <Route path="/users" element={<UsersListPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
