import {useState} from 'react'
import AlertGenerator from '../AlertGenerator/AlertGenerator'

const AlertMessage = () =>{

    //Guarda el valor del campo del texto
    const [inputValue, setInputValue] = useState('');

    //Guardaa el mensaje
    const [message, setMessage] = useState('');

    //Muestra el componente hijo
    const [showAlert, setShowAlert] = useState(false)

    //Si el campo del texto no esta vacio, se guarda el texto que escribio el usuario en "Massage"
    //And se renderiza el componente hijo
    const handleClick = () =>{
        if(inputValue.trim() !==''){
            setShowAlert(true);
            setMessage(inputValue);
        } else{
            setShowAlert(false);
        }
    }
    return(
        <div className='m-3'> 
            <h2>
            Ejemplo 2
        </h2>
        {/* Componente padre */}
        <input type="text" value={inputValue} onChange={(e) =>
        setInputValue(e.target.value)}/>
       
       <button
        onClick={handleClick}> Enviar
       </button>

       {/* Componente hijo */}
       {showAlert && <AlertGenerator message={message}/>}
        </div>
    )
}
 export default AlertMessage
