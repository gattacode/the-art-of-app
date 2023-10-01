import { useState, useEffect } from 'react';

function Profile({ isArtwork, name, location, medium, website, shop, artworkLinks }) {
    
    const [links, setLinks] = useState(null);
    
    const id = name.toLowerCase().replace(/\s+/g, '');
    
    const createLinksMap = () => {
        const linksMap = artworkLinks.map((url, index) => (
            <li key={index}><a href={url}><img src={url} alt=''></img></a></li>
        ));
        setLinks(linksMap);
    };

    useEffect(() => {
        createLinksMap();
    }); 
    
    return {
        isArtwork,
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