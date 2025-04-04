const SelectTopics = ({ topic, isSelected, onChange }) => {  // used in modal
    return (
      <div 
        className={`topic-item ${isSelected ? 'selected' : ''}`}
        onClick={onChange}
      >
        <div className="topic-content">
          <img src={`./Topic images/${topic.toLowerCase()}.jpg`} className="topic-image" />
          <span className="topic-name">{topic}</span>
          {isSelected && <i className="bi bi-check-circle-fill check-icon"></i>}
        </div>
      </div>
    );
  };
  
  export default SelectTopics;