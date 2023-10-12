import LinkButton from "./LinkButton";

const ArtworkBio = ({ artistInfo }) => {
  if (!artistInfo) {
    return <div>Artist not found :(</div>;
  }

  return (
    <div className="artist-page">
      <div className="biography">
        <h1>{artistInfo.name}</h1>
        <LinkButton link={"https://www.google.com/search?q=" + artistInfo.name} type="Learn More"></LinkButton>
      </div>
      <ul className="gallery">{artistInfo.links}</ul>
    </div>
  );
};

export default ArtworkBio;
