import Icon from "../icon/Icon";
import "./Card.css";
function Card({ gamePlay, player, onPlay, index }) {
  let icon = <Icon />;
  if (player == "O") {
    icon = <Icon name="circle" />;
  } else if (player == "X") {
    icon = <Icon name="cross" />;
  }
  return (
    <div
      className="card"
      onClick={() => !gamePlay && player == "" && onPlay(index)}>
      {icon}
    </div>
  );
}
export default Card;
