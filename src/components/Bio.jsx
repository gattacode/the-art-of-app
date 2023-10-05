import LinkButton from "./LinkButton";

const Bio = ({ artistInfo }) => {
  return (
    <div className="artist-page">
      <div className="biography">
        <h1>{artistInfo.name}</h1>
        <p>Location: {artistInfo.location}</p>
        <p>Medium: {artistInfo.medium}</p>
        <LinkButton link={artistInfo.website} type="Website"></LinkButton>
        <LinkButton link={artistInfo.shop} type="Shop"></LinkButton>
      </div>
      <ul className="gallery">{artistInfo.links}</ul>
    </div>
  );
};

export default Bio;
