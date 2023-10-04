import Bio from "../components/Bio";
import Menu from "../components/Menu";
import Artist from "../components/Profile";

const Portfolio = () => {
  const artistInfo = Artist({
    isArtwork: 0,
    name: " Daniel Warren Johnson",
    location: "USA",
    medium: "Digital / Traditional",
    website: "https://www.danielwarrenart.com/",
    shop: "https://www.danielwarrenart.com/shop",
    artworkLinks: [
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615727233951-5W7R7Y3P3YXB11BRGHZ6/cover.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615727253898-SCZQHN0FOBW5DVZ1JF9R/83428928_1659793730839545_4761185268172851314_n.jpg",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771490421-3NIJVNSARQD8CDOZKKC4/Art_of_Daniel_Warren_Johnson_76.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1615771540945-UYT7SHF4A6VNR88DMRQD/Art_of_Daniel_Warren_Johnson_155.jpg?format=1000w",
    ],
  });
  return (
    <div className="home">
    <div className="SideBar">
        <Menu />
    </div>
      <div className="content">
        <Bio artistInfo={artistInfo} />
      </div>
    </div>
  );
};

export default Portfolio;
