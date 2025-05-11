import React, { useEffect } from 'react';

const DashboardPage = () => {
  useEffect(() => {
    // Add any necessary scripts or initialization for 3D model here if needed
  }, []);

  return (
    <main className="app-main">
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6"><h3 className="mb-0">Dashboard</h3></div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box text-bg-primary">
                <div className="inner">
                  <h3>150</h3>
                  <p>New Orders</p>
                </div>
                <svg className="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                </svg>
                <a href="#" className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover">
                  More info <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* Add other small boxes similarly */}
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">3D Model</h3>
            </div>
            <div className="card-body d-flex" style={{ height: '500px' }}>
              <div id="renderCanvasContainer" style={{ flex: 1, height: '100%' }}>
                <canvas id="renderCanvas" style={{ width: '100%', height: '100%', display: 'block' }}></canvas>
              </div>
              <div id="controlPanel" style={{ width: '350px', paddingLeft: '15px', borderLeft: '1px solid #ddd', height: '100%', overflowY: 'auto', fontSize: '0.9rem' }}>
                {/* Control panel content here */}
              </div>
            </div>
          </div>

          <div className="card mt-5">
            <div className="card-header">
              <h3 className="card-title">Container Details</h3>
            </div>
            <div className="card-body table-responsive p-0" style={{ maxHeight: '400px' }}>
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>Container ID</th>
                    <th>Weight (kg)</th>
                    <th>Type</th>
                    <th>Position (X, Y, Z)</th>
                    <th>Status</th>
                    <th>Destination</th>
                    <th>Owner</th>
                    <th>Arrival Time</th>
                    <th>Balance Impact</th>
                    <th>Remarks</th>
                    <th>Sensor Reading</th>
                    <th>Last Updated</th>
                    <th>Auto-Placed</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Container rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
