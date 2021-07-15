import React from 'react'

import { useState } from 'react'

export default function FuncionalCompState(){
    const [state, setState] = useState('desactivado')
   
    
    return (
        <div>
            <h1>
                {state}
            </h1>
            <button onClick={()=> setState('activado')}>Activar</button>
            
        </div>
    )
}