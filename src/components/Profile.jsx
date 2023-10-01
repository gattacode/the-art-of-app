import { useState, useEffect } from 'react';

function Profile({ isMan, id, name, location, medium, website, shop, artworkLinks }) {
    // Define a state variable to hold the links map
    const [links, setLinks] = useState(null);

    // Define a function to create the links map
    const createLinksMap = () => {
        // Assume artworkLinks is an array of URLs
        const linksMap = artworkLinks.map((url, index) => (
            <li key={index}><a href={url}>{'Artwork ${index + 1}'}</a></li>
        ));
        setLinks(linksMap);
    };

    // Call createLinksMap to create the links map
    useEffect(() => {
        createLinksMap();
    }, [artworkLinks]);  // Dependency array, re-run effect if artworkLinks changes

    return {
        isMan,
        id,
        name,
        location,
        medium,
        website,
        shop,
        links
    };
}

export default Profile;