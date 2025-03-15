import './button.style.scss';

const BUTTON_TYPES ={
    google:'google-sign-in',
    inverted: 'inverted'
};

const Button = ({children,buttonType,...otherprops}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otherprops}>{children}</button>
    );
}

export default Button;