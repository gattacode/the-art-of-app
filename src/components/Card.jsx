import { Link } from 'react-router-dom';

const Card = ({ artistInfo }) => {
    return (
        <div className="card">
            <Link to={`./${artistInfo.id}`}>
                <ul className="cover">
                    {artistInfo.cover}
                </ul>
                <p>{artistInfo.name}</p>
            </Link>
        </div>
    );
}

export default Card;
