import "./Button.scss"

const Button = ({content, classNames, onClick, value}) => {
    return ( <>
    <button className={classNames} value = {value} role = "button" onClick={onClick}>{content}</button>
    </>);
}
 
export default Button;