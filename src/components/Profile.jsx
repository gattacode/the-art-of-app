import { useState, useEffect } from 'react';

function Profile({ isArtwork, name, location, medium, website, shop, artworkLinks }) {
    
    const [links, setLinks] = useState(null);
    
    const id = name.toLowerCase().replace(/\s+/g, '');
    
    const createLinksMap = () => {
        const linksMap = artworkLinks?.map((url, index) => (
            <li key={index}><a href={url}><img src={url} alt=''></img></a></li>
        ));
        setLinks(linksMap);
    };

    useEffect(() => {
        createLinksMap();
    }); 

    const cover = artworkLinks && artworkLinks.length > 0 ? (
        <a href={artworkLinks[0]}>
            <img src={artworkLinks[0]} alt='' />
        </a>
    ) : null;

    return {
        isArtwork,
        id,
        name,
        location,
        medium,
        website,
        shop,
        links,
        cover,
    };
}

export default Profile;