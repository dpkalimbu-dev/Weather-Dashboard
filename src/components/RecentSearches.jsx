function RecentSearches({ searches = [], onSelect, onClear }) {
    if (searches.length === 0) return null;

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted small text-uppercase fw-bold mb-0">Recent Searches</h6>
                <button
                    onClick={onClear}
                    className="btn btn-link btn-sm text-decoration-none p-0 text-danger"
                    style={{ fontSize: '0.7rem' }}
                >
                    Clear History
                </button>
            </div>

            <div className="d-flex flex-wrap gap-2">
                {searches.map((s) => (
                    <button
                        key={s}                         
                        className="btn btn-sm btn-outline-secondary rounded-pill px-3 border-opacity-25"
                        onClick={() => onSelect(s)}
                    >
                        <i className="bi bi-clock-history me-1"></i> {String(s).split(',')[0]}  
                    </button>
                ))}
            </div>
        </div>
    );
}

export default RecentSearches;