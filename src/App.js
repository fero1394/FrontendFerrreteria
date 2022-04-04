
import Logo from './assets/img/logo.png'

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
