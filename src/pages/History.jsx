import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("resumeHistory")) || [];
    setHistory(data);
  }, []);

  const deleteHistory = (index) => {

    const updated = history.filter((_, i) => i !== index);

    setHistory(updated);

    localStorage.setItem(
      "resumeHistory",
      JSON.stringify(updated)
    );

  };

  const clearHistory = () => {

    if (
      window.confirm("Are you sure you want to clear all history?")
    ) {

      localStorage.removeItem("resumeHistory");

      setHistory([]);

    }

  };

  return (

    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          padding: "30px",
        }}
      >

        <Topbar />

        <div className="card shadow-lg border-0 rounded-4 mt-4">

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3 className="fw-bold">
                📜 Resume Upload History
              </h3>

              {history.length > 0 && (

                <button
                  className="btn btn-danger"
                  onClick={clearHistory}
                >
                  🗑 Clear History
                </button>

              )}

            </div>

            {history.length === 0 ? (

              <div className="text-center py-5">

                <h4>No Resume History Found</h4>

                <p className="text-muted">
                  Upload a resume to see history here.
                </p>

              </div>

            ) : (

              <div className="table-responsive">

                <table className="table table-hover align-middle">

                  <thead className="table-primary">

                    <tr>

                      <th>#</th>

                      <th>Resume</th>

                      <th>ATS</th>

                      <th>Status</th>

                      <th>Date</th>

                      <th>Action</th>

                    </tr>

                  </thead>

                  <tbody>

                    {history.map((item, index) => (

                      <tr key={index}>

                        <td>{index + 1}</td>

                        <td>{item.name}</td>

                        <td>

                          <span className="badge bg-success fs-6">

                            {item.score}%

                          </span>

                        </td>

                        <td>

                          {item.score >= 90 ? (

                            <span className="badge bg-success">

                              Excellent

                            </span>

                          ) : item.score >= 70 ? (

                            <span className="badge bg-warning text-dark">

                              Good

                            </span>

                          ) : (

                            <span className="badge bg-danger">

                              Improve

                            </span>

                          )}

                        </td>

                        <td>{item.date}</td>

                        <td>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteHistory(index)}
                          >

                            Delete

                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            )}

            <hr />

            <div className="row text-center">

              <div className="col-md-4">

                <div className="card shadow-sm border-0">

                  <div className="card-body">

                    <h6>Total Uploads</h6>

                    <h2 className="text-primary">

                      {history.length}

                    </h2>

                  </div>

                </div>

              </div>

              <div className="col-md-4">

                <div className="card shadow-sm border-0">

                  <div className="card-body">

                    <h6>Best ATS</h6>

                    <h2 className="text-success">

                      {history.length
                        ? Math.max(...history.map(x => x.score))
                        : 0}%

                    </h2>

                  </div>

                </div>

              </div>

              <div className="col-md-4">

                <div className="card shadow-sm border-0">

                  <div className="card-body">

                    <h6>Average ATS</h6>

                    <h2 className="text-warning">

                      {history.length
                        ? Math.round(
                            history.reduce((a, b) => a + b.score, 0) /
                              history.length
                          )
                        : 0}%

                    </h2>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default History;