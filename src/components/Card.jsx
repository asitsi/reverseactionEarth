import "./components.css";
import Paper from "@mui/material/Paper";

function Card(props) {
  return (
    <Paper elevation={1}>
      <div className="main-card">
        <div className="card-icon">{props.icon}</div>
        <div className="card-info">
          <p>{props.title}</p>
          <h3>{props.amount}</h3>
        </div>
      </div>
    </Paper>
  );
}

export default Card;
