import PlayerCard from './PlayerCard';
import players from './PlayerData';

const PlayerList = () => {
  const groupedPlayers = players.reduce((groups, player) => {
    groups[player.position] = groups[player.position] || [];
    groups[player.position].push(player);
    return groups;
  }, {});

  return (
    <div className="player-list">
      {Object.entries(groupedPlayers).map(([position, players]) => (
        <div key={position} className="player-list__section">
          <h2 className="player-list__title">{getPositionName(position)}</h2>
          <div className="player-list__card">
            {players.map(player => (
              <PlayerCard key={player.number} player={player} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const getPosition = {
  forward: '공격수',
  midfielder: '미드필더',
  defender: '수비수',
  goalkeeper: '골키퍼',
};

const getPositionName = (position) => getPosition[position] || '기타';

export default PlayerList;


