import { InputHTMLAttributes } from "react"
import {Input} from '../index';

interface ILabelInput extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    inline?: boolean;
}

const LabelInput = ({label, id, inline = false,...restProps} : ILabelInput) => {
    return(
        <div className={`flex gap-2 ${inline ? 'flex-row items-center': 'flex-col items-start'}`}>
            <label className="flex-none" htmlFor={id}>{label}</label>
            <Input {...restProps} />
        </div>
    )
}

export default LabelInput;