import React from 'react';

function WeatherSkeleton() {
    return (
        <div className="card shadow-lg p-4 text-center border-0" style={{ minHeight: '450px' }}>
            <div className="placeholder-glow">
               
                <span className="placeholder col-6 bg-secondary rounded-pill py-3 mb-4"></span>
               
                <div className="mx-auto bg-light rounded-circle mb-4" style={{ width: '150px', height: '150px' }}></div>
                
                <div>
                    <span className="placeholder col-4 bg-primary rounded-pill py-4 mb-4"></span>
                </div>
                
                <span className="placeholder col-8 bg-secondary rounded-pill py-2"></span>

                <div className="row mt-5 pt-3 border-top">
                    <div className="col border-end">
                        <span className="placeholder col-6 mb-2"></span>
                        <span className="placeholder col-4 d-block mx-auto"></span>
                    </div>
                    <div className="col">
                        <span className="placeholder col-6 mb-2"></span>
                        <span className="placeholder col-4 d-block mx-auto"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherSkeleton;