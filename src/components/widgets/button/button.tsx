import { MouseEventHandler, ReactNode } from "react"

type ButtonType = 'primary' | 'secondary';

interface IButton {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
    children: ReactNode;
    classes?: string;
}

const Button = ({type= 'primary', classes, children}: IButton) => {
    const primaryBtnClass = 'h-10 bg-primary-200 text-white rounded font-medium';
    const secondaryBtnClass = 'h-10 border border-primary-200 text-primary-200 bg-white rounded';

    const btnClassMap : {[key: string]: string}= {
        primary: primaryBtnClass,
        secondary: secondaryBtnClass
    }

    return (
        <button className={`px-4 ${btnClassMap[type]} ${classes} `}>
            {children}
        </button>
    )
}

export default Button;