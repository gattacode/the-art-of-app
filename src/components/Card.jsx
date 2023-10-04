const Card = ({ artistInfo }) => {
    
    return (
        <div className="card">   
        <a href={artistInfo.id}>
            <ul className="cover">
                {artistInfo.cover}
            </ul>
            <p>{artistInfo.name}</p>
        </a>
        </div> 
    );
}

export default Card;