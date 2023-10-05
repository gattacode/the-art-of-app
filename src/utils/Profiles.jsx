import Artist from "../components/Profile";

function Profiles() {
  const Profile = Artist({
    isArtwork: 0,
    name: "Daniel Warren Johnson",
    location: "USA",
    medium: "Digital / Traditional",
    website: "https://www.danielwarrenart.com/",
    shop: "https://www.danielwarrenart.com/shop",
    artworkLinks: [
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615727233951-5W7R7Y3P3YXB11BRGHZ6/cover.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771490421-3NIJVNSARQD8CDOZKKC4/Art_of_Daniel_Warren_Johnson_76.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771540945-UYT7SHF4A6VNR88DMRQD/Art_of_Daniel_Warren_Johnson_155.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771674442-1YKAO51UXUOO8CPCW2F1/Art_of_Daniel_Warren_Johnson_239.jpeg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771681354-RTBPU6RUY3ZBXMB3CIK9/Art_of_Daniel_Warren_Johnson_241.jpeg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771654529-X9SRLHS56ZNBVDOVT0GU/Art_of_Daniel_Warren_Johnson_230.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771663673-4EO9XAZ2HBK0817QL9ST/Art_of_Daniel_Warren_Johnson_234.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771637591-79MTU04QWOGVE3L9EZ7C/Art_of_Daniel_Warren_Johnson_219.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771648824-4QFOO3O9FWQGBZAO5YWG/Art_of_Daniel_Warren_Johnson_227.jpg",
    ],
  });

  const Profile2 = Artist({
    isArtwork: 0,
    name: "Minna Sundberg",
    location: "Finland",
    medium: "Digital",
    website: "https://www.sssscomic.com/",
    shop: "https://hivemill.com/collections/stand-still-stay-silent",
    artworkLinks: [
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616158307042-ZXRS21CAROODRZOYMO2H/Art_of_Minna_Sundberg_22.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616157904106-V0MR3J1Y3X2L79R6WP6A/Art_of_Minna_Sundberg_20.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616157885145-Y6LR9V8WBIOX94N907OF/Art_of_Minna_Sundberg_12.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616157879145-CVMQJVQG5WP1GTH0OFNH/Art_of_Minna_Sundberg_9.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616158595331-DMY7YX2E6HOB5AQUA2LJ/Art_of_Minna_Sundberg_2.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616157869787-U1AGCBU7F637RO5CN648/Art_of_Minna_Sundberg_5.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1616157864802-KS35HJ1TL6NMH5NU2S6C/Art_of_Minna_Sundberg_2.jpg?format=1000w",
    ],
  });

  const ArtistList = [
    Profile,
    Profile,
    Profile2,
    Profile,
    Profile,
    Profile,
    Profile,
    Profile,
    Profile,
  ];

  return ArtistList;
}

export default Profiles;
