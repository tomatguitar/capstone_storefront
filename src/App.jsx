import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn/SignIn';

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the Shop page</h1>
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
