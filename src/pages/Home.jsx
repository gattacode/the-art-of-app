import Artist from '../components/Profile'; 

const Home = () => {
    const artistInfo = Artist({
        isMan: 1,
        id: 101,
        name: "John Doe",
        location: "New York, NY",
        medium: "Oil Painting",
        website: "https://johndoe.com",
        shop: "https://johndoe.shop",
        artworkLinks: [
            'https://artwork1.com',
            'https://artwork2.com',
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

export default Home;