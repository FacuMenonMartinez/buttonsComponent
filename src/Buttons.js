import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./buttons.css"

function ButtonComponent({ iconType, alignIcon, typeButton }) {

    const [type, setType] = useState('');

    const [iconLeft, setIconLeft] = useState('');

    const [iconRight, setIconRight] = useState('')

    useEffect(() => {
        if (iconType && alignIcon.toLowerCase() === 'left') {
            setIconLeft(<span className="material-symbols-outlined">{iconType}</span>)
        } else if (iconType && alignIcon.toLowerCase() === 'right') {
            setIconRight(<span className="material-symbols-outlined">{iconType}</span>)
        }
    }, [])


    useEffect(() => {
        setType(typeButton.toLowerCase().replace(" ", "-"));
    }, [])

    const handleClick = (type) => {
        toast(`${type} has clicked!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <div>
            {type !== 'disabled'
                ? <div className="buttonDiv">
                    <h3 className="buttonTitle">{typeButton} button</h3>
                    <button className={`defaultButton ${type}`} onClick={() => { handleClick(typeButton) }}>{iconLeft}Click Me!{iconRight}</button>
                    <ToastContainer autoClose={1000} />
                </div>
                : <div className="buttonDiv">
                    <h3 className="buttonTitle">{typeButton} button</h3>
                    <button className={`${type}`} disabled onClick={() => { handleClick(type) }}>{iconLeft}Disabled{iconRight}</button>
                </div>

            }

        </div>
    )
}

export default ButtonComponent