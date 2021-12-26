import React, { useState } from 'react'

const initialCart = [
    {id:1, title:'Producto1', description:'Desc1'},
    {id:2, title:'Producto2', description:'Desc2'},
    {id:3, title:'Producto3', description:'Desc3'},
]

const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (id) =>{
        const changedCart = cart.filter(product => product.id !== id);
        setCart(changedCart)
    }

    const addProduct = (newProduct) =>{
        newProduct.id = Date.now();

        const changedCart = [
            ...cart,
            newProduct
        ]
        setCart(changedCart);
    }

    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart)
    }

    return (
        <div>
            <button onClick={()=>addProduct({title:"Nuevo titulo",description:"Nueva descripcion"})}>
                Agregar
            </button>
            {cart.map(product =>(
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <button onClick={()=>updateProduct({id:product.id, title:"Actualizar titulo",description:"Actualizar descripcion"})}>
                        Actualizar
                    </button>
                    <button onClick={()=>deleteProduct(product.id)}>
                        Delete
                    </button>
                </div>
            ))}
            <br></br>
            <pre>
                {
                    JSON.stringify(cart,null,2)
                }
            </pre>
        </div>
    )
}

export default ShoppingCart
