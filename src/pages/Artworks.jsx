import Cardboard from "../components/CardBoard";
import Menu from "../components/Menu";
import getProfiles from "../utils/ArtworksList";

const Artworks = () => {

  const ArtistList = getProfiles();

  return (
    <div className="home">
      <div className="SideBar">
        <Menu />
      </div>
      <div className="content content-home">
        <Cardboard artistInfos={ArtistList} />
      </div>
    </div>
  );
};

export default Artworks;
