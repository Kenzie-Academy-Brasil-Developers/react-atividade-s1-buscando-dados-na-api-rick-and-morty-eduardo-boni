import './style.css';
import CharCard from '../CharCard';

function Characters({ characterList }) {

    return (
      <div>
      <h2 className="h2">Meus personagens</h2>
      <div className="list">
        {characterList.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </div>
    </div>
    );
}

export default Characters;