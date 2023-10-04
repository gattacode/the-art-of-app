import Cardboard from "../components/CardBoard";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div className="home">
      <div className="SideBar">
        <Menu />
      </div>
      <div className="content content-home">
        <Cardboard />
      </div>
    </div>
  );
};

export default Home;
