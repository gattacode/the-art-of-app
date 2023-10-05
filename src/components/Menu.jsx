import Logo from "../assets/logo.png";

const Menu = () => {
  return (
    <>
      <a href=".."><img src={Logo} className="logo" alt="logo"></img></a>
      <a href=".." className="lign-effect">artists</a>
      <a href="/artworks"  className="lign-effect">artworks</a>
    </>
  );
};

export default Menu;
