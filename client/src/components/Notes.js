var React = require("react");

const Notes = props => {
  return (
    <div className="col-md-4 offset-md-4" key="notes">
      <div className="card mb-4 box-shadow ">
        <div className="card-body parent">
          <div>
            <h1 className="card-text">
              {props.response[props.cardIndex][props.cardId].method}
            </h1>
            <button
              className="close btn btn-sm btn-outline-secondary"
              onClick={props.toggleNotes}
            >
              X
            </button>
            <hr />
            <textarea className="form-control" rows="5" />
            <div className="d-flex justify-content-between align-items-center">
              <center>
                <br />

                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={props.toggleNotes}
                >
                  Save Notes
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Notes;