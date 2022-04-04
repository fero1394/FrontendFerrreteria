
import React,{ useState, useEffect } from 'react'

function ViewInventory() {
    const url = 'https://backend-ferreteria-sofka.herokuapp.com/inventario/'
  
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
        Estas Viendo el inventario
        <ul>
            {!todos ? 'cargando...' :
                todos.map((todo,index) =>{
                    return <li key={todo.idInventario}>{todo.idInventario} <br/> {todo.producto.idProducto}<br/> {todo.producto.nombreProducto} <br/>  {todo.producto.precio} <br/>{todo.cantidad} <br/>{todo.proveedor.idProveedor}<br/> {todo.proveedor.nombre} <br/>  {todo.proveedor.cedula} <br/>  {todo.proveedor.celular} </li>
                })
            }
        </ul>

    </div>
  )
}

export {ViewInventory}
