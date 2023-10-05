import Card from "./Card";

const Cardboard = ({ artistInfos }) => {
  const listInfo = artistInfos.map((artistInfo) =>
  <Card artistInfo={artistInfo} />
  )
  return (
      <div className="cardboard">
        {listInfo}
      </div>
  );
};

export default Cardboard;
