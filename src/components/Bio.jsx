import Artist from '../components/Profile'; 

const Bio = () => {
    const artistInfo = Artist({
        isMan: 1,
        name: " Daniel Warren Johnson",
        location: "USA",
        medium: "Digital / Traditional",
        website: "https://www.danielwarrenart.com/",
        shop: "https://www.danielwarrenart.com/shop",
        artworkLinks: [
            'https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615727233951-5W7R7Y3P3YXB11BRGHZ6/cover.jpg?format=1500w',
            'https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615727253898-SCZQHN0FOBW5DVZ1JF9R/83428928_1659793730839545_4761185268172851314_n.jpg',
            'https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771490421-3NIJVNSARQD8CDOZKKC4/Art_of_Daniel_Warren_Johnson_76.jpg?format=1000w',
            'https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771540945-UYT7SHF4A6VNR88DMRQD/Art_of_Daniel_Warren_Johnson_155.jpg?format=1000w'
        ]
    });

    return (    
        <div>
            <h1>{artistInfo.name}</h1>
            <p>ID: {artistInfo.id}</p>
            <p>Location: {artistInfo.location}</p>
            <p>Medium: {artistInfo.medium}</p>
            <a href={artistInfo.website}>Website</a>
            <a href={artistInfo.shop}>Shop</a>
            <ul>
                {artistInfo.links}
            </ul>
        </div>
    );
}

export default Bio;