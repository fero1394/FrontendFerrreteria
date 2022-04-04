
import Logo from './assets/img/logo.png'
import Login from './containers/Login';
import Register from './containers/Register';
import {RegisterCustomer} from './containers/RegisterCustomer';
import {ProductEntry} from './containers/ProductEntry';
import {RegisterSupplier}  from './containers/RegisterSupplier';
import {ViewInventory} from './components/ViewInventory';
import {Sale}  from './containers/Sale';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import {AuthProvider} from './contexts/authContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="Register" element={<Register />} />
        <Route path='Dashboard' element={<Dashboard/>}> 
          <Route path='ProductEntry' element={<ProductEntry/>}/>        
          <Route path='RegisterSupplier' element={<RegisterSupplier/>}/>
          <Route path='RegisterCustomer' element={<RegisterCustomer/>}/> 
          <Route path='Sale' element={<Sale/>}/>
          <Route path='ViewInventory' element={<ViewInventory/>}/>                
        </Route>
        <Route 
          path="*"
          elemnt={
            <main style={{ padding: "1rem" }}>
            <p>No hay nada por Aqui!</p>
            </main>
          }
        />
      </Routes>
      <ProtectedRoute>
      </ProtectedRoute>
    </AuthProvider>
  </BrowserRouter>

  );
}

export default App;
