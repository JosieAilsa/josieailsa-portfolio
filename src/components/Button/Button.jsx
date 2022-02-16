import "./Button.scss"

const Button = ({content, classNames, callback}) => {
    return ( <>
    <button className={classNames} role = "button" onClick={callback}>{content}</button>
    </>);
}
 
export default Button;