import { useState } from "react";
import {Button, Form, Modal} from 'react-bootstrap';

type MyModalProps = {
    show: boolean;
    onHide:() => void;
    handleColorChange: (color: string) => void;

}
const ModalColorPick = ({show, onHide, handleColorChange} :MyModalProps) => {
    //Variable para guardar el valor seleciconado del formulario
    const [selectedColor, setSelectedColor] = useState ('#FFF');
    const handleColorPickChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setSelectedColor (event.target.value);
        }
        //Al hacer click en aceptar, se pasa el color elegido que proviene del componente padre
        const handleAcceptClick = () =>{
            handleColorChange(selectedColor);
            onHide();
        };

    return(
        <Modal show={show} onHide ={onHide} centered backdrop="static" >
            <Modal.Header closeButton>
                <Modal.Title> Cambiar color </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            {/* Color picker */}
            <Form.Label htmlFor="exampleColorInput"> Elige un color</Form.Label>
            <Form.Control
            type='color'
            id='exampleColorInput' 
            defaultValue= "#FFF"
            title= "Elije tu color"
            onChange= {
                handleColorPickChange
            }/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}> Cancelar</Button>
                <Button variant="primary" onClick={handleAcceptClick}> Aceptar</Button>
                </Modal.Footer>
            </Modal>
    )
}
export default ModalColorPick