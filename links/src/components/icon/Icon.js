import './icon.css'
export default function icon(props) {
    return(
        <img src={props.src} alt={props.alt} className="social_midia" />
    )
}