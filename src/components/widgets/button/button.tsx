import { MouseEventHandler, ReactNode } from "react"

type ButtonType = 'primary' | 'secondary';

interface IButton {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
    children: ReactNode;
    classes?: string;
}

const Button = ({type= 'primary', classes, children}: IButton) => {
    const primaryBtnClass = 'h-10 bg-primary-200 text-white rounded font-medium w-full';
    const secondaryBtnClass = '';

    const btnClassMap : {[key: string]: string}= {
        primary: primaryBtnClass,
        secondary: secondaryBtnClass
    }

    // const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    //     // event.preventDefault();

    //     // onClick(event)
    // }

    return (
        <button className={`px-4 ${classes} ${btnClassMap[type]}`}>
            {children}
        </button>
    )
}

export default Button;