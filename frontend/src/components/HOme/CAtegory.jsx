function Categoty({heading, paragraph}) {
    return ( 
        <div className="col-md-4">
            <div className="card h-100 text-center border-0 shadow-sm hover-overlay" 
                style={{
                    background: 'rgba(255, 255, 255, 0.10)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease'
                }}>
                <div className="card-body p-4">
                    {/* Icon placeholder using Bootstrap icons */}
                    <h3 className="card-title text-white fw-bold mb-3">
                        {heading}
                    </h3>
                    
                    <p className="card-text text-white-50 mb-4">
                        {paragraph}
                    </p>
                    
                    <button className="btn btn-outline-light rounded-pill px-4">
                        Learn More <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Categoty;