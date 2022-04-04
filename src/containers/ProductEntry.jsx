import React,{ useState, useEffect } from 'react'

function ProductEntry() {
  const url = 'https://backend-ferreteria-sofka.herokuapp.com/entradamercancia/'
  
  const [todos, setTodos] = useState()

  const fetchApi = async () => {
      const response = await fetch(url)
      console.log(response.status)

      const responseJSON = await response.json()
      setTodos(responseJSON)
  }

  useEffect(() => {
      fetchApi()
  }, [])
    
  return (
    <div>
        <h1>Ingrese Producto</h1>
        <form>
          <label htmlFor="">
              <input type="text" name="supplierName" placeholder="Nombre del Proveedor" />
          </label> 
          <label htmlFor="">
              <input type="text" name="date" placeholder="Fecha de Ingreso" />
          </label> 
          <label htmlFor="">
              <input type="text" name="productname" placeholder="Nombre del Producto" />
          </label> 
          <label htmlFor="">
              <input type="number" name="count" placeholder="Cantidad" />
          </label> 
      </form>
      <br/>
      <button>Ingresar Mercancia</button>
        <ul>
            {!todos ? 'cargando...' :
                todos.map((todo,index) =>{
                    return <li key={todo.idEntradaMercancia}>{todo.idEntradaMercancia} <br/> {todo.proveedor.idProveedor} <br/> {todo.proveedor.nombre} <br/> {todo.proveedor.cedula} <br/> {todo.proveedor.celular} <br/>{todo.fecha} <br/> {todo.nombreProducto} <br/> {todo.cantidadProducto} </li>
                })
            }
        </ul>
    </div>
  )
  }

export {ProductEntry}
