import { InputHTMLAttributes } from "react"

interface IInputCheckbox extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

const Checkbox = ({id, label, ...restProps}: IInputCheckbox) => {
    return (
        <div className="flex items-center">
            <input {...restProps} type="checkbox" id={id}/>
            <label className="ml-2" htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;