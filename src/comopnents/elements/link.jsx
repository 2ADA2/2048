import "../../styles/link.css"
export const BlockLink = ({elem = "", link="", url="", header="header", text="text"}) => {
    if(elem) return(
        <a href={link} className="link-contianer" target="_blank">
            {elem}
            <div>
                <h4>{header}</h4>
                <span>{text}</span>
            </div>
        </a>
    )
    return (
        <a href={link} className="link-contianer" target="_blank">
            <img src = {url}></img>
            <div>
                <h4>{header}</h4>
                <span>{text}</span>
            </div>
        </a>
    );
}