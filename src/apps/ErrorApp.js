import React, { useState } from 'react'

const ErrorApp = () => {

    const [error, setError] = useState("");
    return (
        <div>
            <button onClick={() => setError("Error the api fetch")}>
                Error
            </button>
            <button onClick={() => setError("")}>
                Limpiar
            </button>
            { error && <h1>{error}</h1> }            
        </div>
    )
}

export default ErrorApp
