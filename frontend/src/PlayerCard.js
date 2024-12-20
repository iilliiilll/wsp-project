import { useState } from 'react';

const PlayerCard = (props) => {
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const toggleDetails = () => {
    setDetailsExpanded(prevState => !prevState);
  }

  return (
    <>
      <div className="player-card">
        <a
          href={`https://www.youtube.com/results?search_query=${props.player.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={props.player.image} alt={props.player.name} className="player-card__image" />
        </a>

        <h3 className="player-card__name" onClick={toggleDetails}>
          {props.player.name}
        </h3>

        {detailsExpanded && (
          <div className="player-card__details">
            <p>등번호: {props.player.number}</p>
            <p>포지션: {props.player.position}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PlayerCard;

