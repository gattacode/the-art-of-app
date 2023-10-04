import Logo from "../assets/logo.png";

const Menu = () => {
  return (
    <>
      <img src={Logo} className="logo" alt="logo"></img>
      <a href="..">artists</a>
      <a href="/artworks">artworks</a>
    </>
  );
};

export default Menu;
