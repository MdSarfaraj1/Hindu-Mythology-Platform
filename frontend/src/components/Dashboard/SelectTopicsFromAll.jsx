const SelectTopicsFromAll = ({ topic, isSelected, onChange, key }) => { //used in alltopc comonent
  return (
    <div
      key={key}
      className={` col  p-1 rounded `}
      onClick={onChange}
      style={{backgroundColor:"#86b7fe"}}
    >
      <div className="card h-100 shadow-sm hover-card">
        <div className="card-img-overlay-wrapper">
          <img
            className="card-img-top  "
            src={topic.image}
            alt={topic.name}
          />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title fw-bold">{topic.name}</h5>
          <p className="mb-2 text-primary fw-semibold">
            <i className="bi bi-people-fill me-1"></i>  {topic.usercount}
          </p>
          </div>
          
          {isSelected && <i className="bi bi-check-circle-fill check-icon"></i>}
          <p className="card-text text-muted">{topic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectTopicsFromAll;
