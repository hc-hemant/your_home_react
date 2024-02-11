import { MouseEventHandler, ReactNode } from "react"
import { Spinner } from "..";

type ButtonType = 'primary' | 'secondary'| 'light';

interface IButton {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
    children: ReactNode;
    classes?: string;
    status?: 'loading';
}

const Button = ({type= 'primary', classes, status, children, onClick}: IButton) => {
    const primaryBtnClass = 'bg-primary-600 text-white rounded font-medium';
    const secondaryBtnClass = 'border border-primary-600 text-primary-600 bg-white rounded';
    const lightBtnClass = 'bg-primary-200 text-black rounded font-medium';

    const btnClassMap : {[key: string]: string} = {
        primary: primaryBtnClass,
        secondary: secondaryBtnClass,
        light: lightBtnClass
    }

    const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
        if(onClick) onClick(event);
    }

    return (
        <button type={type === 'primary'? 'submit': 'button'} className={`px-4 h-10 ${btnClassMap[type]} ${classes} `} onClick={onClickHandler}>
            <div className="flex justify-center items-center">
                {status && <Spinner size="xs" type={type} />}
                <span className={status && 'ml-2'}>{children}</span>
            </div>
        </button>
    )
}

export default Button;