var React = require("react");
//var PropTypes = require("prop-types");

const Cards = props => {
  const cards = props.response[props.cardIndex].map(card => {
    const cardText = (
      <div>
        <h1 className="card-text">{card.method}</h1>
        <hr />
        {props.answer ? "" : card.description}
        <div className="d-flex justify-content-between align-items-center">
          <center>
            <br />
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={props.flipCard}
            >
              {props.answer ? "Reveal Answer" : "Hide Answer"}
            </button>
          </center>
        </div>
      </div>
    );
    return (
      <div className="col-md-4 offset-md-4" key={card.id}>
        <div
          className={"card mb-4 box-shadow " + (props.answer ? "" : "flipped")}
        >
          <div className={props.answer ? "card-body" : "card-body back"}>
            {cardText}
          </div>
        </div>
        <center>
          <div className="btn-group" role="group">
            <button
              className="btn btn-outline-secondary"
              onClick={props.previousCard}
            >
              <i className="fa fa-angle-left fa-3x" />
            </button>
            <button className="btn btn-outline-primary" onClick={props.goBack}>
              Home
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={props.nextCard}
            >
              <i className="fa fa-angle-right fa-3x" />
            </button>
          </div>
        </center>
      </div>
    );
  });

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        {" "}
        <div className="row">{cards[props.cardId]}</div>{" "}
      </div>
    </div>
  );
};

module.exports = Cards;
