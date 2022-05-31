import './style.css';

function CharCard({ character }) {

    return (
      <div className={character.status === "Alive" ? "alive" : "dead"}>
      <h4 className="title"> {character.name} </h4>
      <img className="img" src={character.image} alt={character.name}></img>
      <p className="species"> {character.species} </p>
      <span>Status: {character.status}</span>
    </div>
    )
}

export default CharCard;