import { InputHTMLAttributes } from "react"

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return(
        <input className="w-full h-10 rounded border px-4 border-primary-400 active:border-primary-400" {...props} />
    )
}

export default Input;