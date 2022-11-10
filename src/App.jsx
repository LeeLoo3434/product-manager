import { Routes, Route } from 'react-router-dom'
import Create from './pages/Create';
import Details from './pages/Details';
import AllProducts from './pages/AllProducts';


function App() {
  return (
    <fieldset>
      hello
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:product_id" element={<Details />} />
      </Routes>
    </fieldset>
  );
}

export default App;