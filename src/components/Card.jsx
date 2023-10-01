const Card = ({ artistInfo }) => {
    
    return (    
        <div>
            <ul>
                {artistInfo.cover}
            </ul>
            <h1>{artistInfo.name}</h1>
        </div>
    );
}

export default Card;