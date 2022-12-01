import "./Header.css";
const Header = (props) => {
    return(
        <div>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Header;