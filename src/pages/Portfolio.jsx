import Bio from "../components/Bio";
import Menu from "../components/Menu";
import { useParams } from 'react-router-dom';
import Profiles from '../utils/Profiles';

const Portfolio = () => {
  const { artistId } = useParams();
  const ArtistList = Profiles();
  const artistInfo = ArtistList.find(profile => profile.id === artistId);

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
