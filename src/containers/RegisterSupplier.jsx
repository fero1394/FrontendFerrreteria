import React from 'react'

function RegisterSupplier() {
  return (
    <div>
      <h1>Registre al Proveedor</h1>
       <form>
          <label htmlFor="">
              <input type="text" name="customerName" placeholder="Nombre del Cliente" />
          </label> 
          <label htmlFor="">
              <input type="text" name="cedula" placeholder="Cedula" />
          </label> 
          <label htmlFor="">
              <input type="text" name="celular" placeholder="Numero de Celular" />
          </label> 
      </form>
      <br/>
      <button>Registrar Proveedor Ahora</button>
    </div>
  )
}
export {RegisterSupplier}
