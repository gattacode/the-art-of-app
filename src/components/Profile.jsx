import { useState, useEffect } from 'react';

function Profile({ isArtwork, name, location, medium, website, shop, artworkLinks }) {
    
    const [links, setLinks] = useState(null);
    
    const id = name.toLowerCase().replace(/\s+/g, '');
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function createLinksMap() {
        const linksMap = artworkLinks?.map((url, index) => (
            <li key={index}><a href={url} target='_blank' rel='noopener noreferrer'><img src={url} alt=''></img></a></li>
        ));
        setLinks(linksMap);
    }

    useEffect(() => {
        createLinksMap();
    }, [createLinksMap]); 

    const cover = artworkLinks && artworkLinks.length > 0 ? (
            <img className='cover-image' src={artworkLinks[0]} alt='cover' />
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