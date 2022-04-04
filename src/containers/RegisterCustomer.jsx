import React from 'react'
import { Outlet } from 'react-router-dom'

function RegisterCustomer() {
  return (
    <>
    <h1>Registre al Cliente</h1>
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
      <button>Registrar Cliente Ahora</button>
    </>
  )
}
export {RegisterCustomer}