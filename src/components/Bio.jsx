const Bio = ({ artistInfo }) => {
    
    return (    
        <div className="artist-page">
            <div className="biography">
            <h1>{artistInfo.name}</h1>
            <p>ID: {artistInfo.id}</p>
            <p>Location: {artistInfo.location}</p>
            <p>Medium: {artistInfo.medium}</p>
            <a href={artistInfo.website}>Website</a>
            <a href={artistInfo.shop}>Shop</a>
            </div>
            <ul className="gallery">
                {artistInfo.links}
            </ul>
        </div>
    );
}

export default Bio;