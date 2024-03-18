import "../../styles/link.css"
export const BlockLink = ({link, url, header, text}) => {
    return (
        <a href = {link} className="link-contianer">
            <img src = {url}></img>
            <div>
                <h4>{header}</h4>
                <span>{text}</span>
            </div>
        </a>
    );
}