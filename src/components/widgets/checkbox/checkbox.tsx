import { InputHTMLAttributes } from "react"

interface IInputCheckbox extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

const Checkbox = ({id, label, ...restProps}: IInputCheckbox) => {
    return (
        <div>
            <input {...restProps} type="checkbox" id={id}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;