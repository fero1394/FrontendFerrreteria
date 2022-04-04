import React from 'react'

function Sale() {
  return (
    <div>
        <form>
            <label htmlFor="">
                <input type="text" name="date" placeholder="Fecha" />
            </label> 
            <label htmlFor="">
                <input type="text" name="asesor" placeholder="Asesor" />
            </label> 
            <label htmlFor="">
                <input type="text" name="productName" placeholder="Nombre del Producto" />
            </label> 
            <label htmlFor="">
                <input type="number" name="count" placeholder="Cantidad" />
            </label>
            <label htmlFor="">
                <input type="number" name="unitaryPrice" placeholder="Precio Unitario" />
            </label>
            <br/>
            <button>Generar Factura</button>
        </form>
    </div>
  )
}
export {Sale}
