import "./Button.scss"

const Button = ({content, classNames, onClick}) => {
    return ( <>
    <button className={classNames} role = "button" onClick={onClick}>{content}</button>
    </>);
}
 
export default Button;