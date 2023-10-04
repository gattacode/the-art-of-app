const LinkButton = ({ link, type }) => {
    
    return (
        <div className="link-button">   
        <a href={link}>
            <p>{type}</p>
        </a>
        <img alt="redirect" className="icon"  />
        </div> 
    );
}

export default LinkButton;