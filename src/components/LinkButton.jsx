import Redirect from "../assets/open_in_new.png";

const LinkButton = ({ link, type }) => {
  return (
    <a className="link-button" href={link}>
      <strong>{type}</strong>
      <img alt="redirect" className="icon" src={Redirect} />
    </a>
  );
};

export default LinkButton;
