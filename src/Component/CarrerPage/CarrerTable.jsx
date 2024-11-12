import React, { useState } from "react";

function CareerTable() {
    const jobData = [
        {
            title: "Interior Designer",
            jobArea: "Interior",
            location: "Barcelona",
            deadline: "As soon as possible",
        },
        {
            title: "Junior Bim Specialist",
            jobArea: "Architecture",
            location: "Barcelona",
            deadline: "As soon as possible",
        },
        {
            title: "Project Manager",
            jobArea: "Architecture",
            location: "Barcelona",
            deadline: "As soon as possible",
        },
        {
            title: "Landscape Design Assistant",
            jobArea: "Intern",
            location: "Barcelona",
            deadline: "As soon as possible",
        },
        {
            title: "Landscape Architect",
            jobArea: "Landscape",
            location: "Barcelona",
            deadline: "Ongoing",
        },
        {
            title: "Senior Urban Designer. Project Manager",
            jobArea: "Architecture",
            location: "Barcelona",
            deadline: "As soon as possible",
        },
        {
            title: "Urban Designer",
            jobArea: "Architecture",
            location: "Barcelona",
            deadline: "As soon as possible",
        },
        {
            title: "Design Assistant",
            jobArea: "Intern",
            location: "Barcelona",
            deadline: "Ongoing",
        },
        {
            title: "Planting Specialist",
            jobArea: "Landscape",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "Financial Controller (barselsvikariat)",
            jobArea: "Finance",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "In-House Legal Advisor & Contract Manager",
            jobArea: "Legal",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "Landscape BIM Manager",
            jobArea: "Landscape",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "Architectural Intern",
            jobArea: "Intern",
            location: "Copenhagen",
            deadline: "Ongoing",
        },
        {
            title: "Landscape Architect",
            jobArea: "Landscape",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "Modelshop Intern",
            jobArea: "Model Workshop",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "Constructing Architect Intern",
            jobArea: "Intern",
            location: "Copenhagen",
            deadline: "Ongoing",
        },
        {
            title: "Design Assistant",
            jobArea: "Intern",
            location: "Copenhagen",
            deadline: "Ongoing",
        },
        {
            title: "Senior Landscape Architect",
            jobArea: "Landscape",
            location: "Copenhagen",
            deadline: "As soon as possible",
        },
        {
            title: "Architectural Technology Assistant",
            jobArea: "Intern",
            location: "Copenhagen",
            deadline: "Ongoing",
        },
        {
            title: "Industrial Design Assistant",
            jobArea: "Intern",
            location: "Copenhagen",
            deadline: "Unsolicited",
        },
        {
            title: "Landscape Design Assistant",
            jobArea: "Intern",
            location: "Copenhagen",
            deadline: "Ongoing",
        },
        {
            title: "Finance Manager",
            jobArea: "Finance",
            location: "London",
            deadline: "As soon as possible",
        },
        {
            title: "Senior Landscape Architect / Designer",
            jobArea: "Landscape",
            location: "London",
            deadline: "As soon as possible",
        },
        {
            title: "Urban/Architectural Designer",
            jobArea: "Architecture",
            location: "London",
            deadline: "As soon as possible",
        },
        {
            title: "Architect / Designer",
            jobArea: "Architecture",
            location: "London",
            deadline: "As soon as possible",
        },
        {
            title: "Business Development Manager",
            jobArea: "Business Development",
            location: "London",
            deadline: "As soon as possible",
        },
        {
            title: "Senior Project Manager",
            jobArea: "Architecture",
            location: "Los Angeles",
            deadline: "As soon as possible",
        },
        {
            title: "Architect/Designer",
            jobArea: "Architecture",
            location: "Los Angeles",
            deadline: "As soon as possible",
        },
        {
            title: "Senior Project Architect",
            jobArea: "Architecture",
            location: "New York",
            deadline: "As soon as possible",
        },
        {
            title: "Junior Designer (0 - 3 year experience)",
            jobArea: "Architecture",
            location: "New York",
            deadline: "Open",
        },
        {
            title: "Project Architect / Mandarin",
            jobArea: "Architecture",
            location: "New York",
            deadline: "As soon as possible",
        },
        {
            title: "Junior Landscape Designer(0 - 3 year experience)",
            jobArea: "Landscape",
            location: "New York",
            deadline: "As soon as possible",
        },
        {
            title: "Design Assistant (Intern)",
            jobArea: "Intern",
            location: "New York",
            deadline: "Fall 2024",
        },
        {
            title: "Landscape Architect/Designer",
            jobArea: "Landscape",
            location: "New York",
            deadline: "As soon as possible",
        },
        {
            title: "Architect/Designer (4+ years Experience)",
            jobArea: "Architecture",
            location: "New York",
            deadline: "Open",
        },
        {
            title: "Senior Architect(8+ years experience)",
            jobArea: "Architecture",
            location: "New York",
            deadline: "As soon as possible",
        },
        {
            title: "Senior Architekt(in)",
            jobArea: "Architecture",
            location: "Zurich",
            deadline: "As soon as possible",
        },
        {
            title: "Architekt(-in)",
            jobArea: "Architecture",
            location: "Zurich",
            deadline: "As soon as possible",
        },
    ];

    const [selectedJobArea, setSelectedJobArea] = useState("JOB AREA");
    const [selectedLocation, setSelectedLocation] = useState("LOCATION");

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const filteredJobs = jobData.filter((job) => {
        const jobAreaMatch = selectedJobArea === "JOB AREA" || job.jobArea === selectedJobArea;
        const locationMatch = selectedLocation === "LOCATION" || job.location === selectedLocation;
        return jobAreaMatch && locationMatch;
    });

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="container my-5">
            <div className="about-section justify-content-center">
                <div className="line"></div>
                <span>JOB OPENING</span>
            </div>
            <div className="d-flex justify-content-center py-3 mt-2">
                <div>
                    <select
                        name="JOB AREA"
                        className="form-select py-2"
                        value={selectedJobArea}
                        onChange={(e) => { setSelectedJobArea(e.target.value); setCurrentPage(1); }}
                    >
                        <option value="JOB AREA">JOB AREA</option>
                        <option value="Interior">Interior</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Intern">Intern</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Finance">Finance</option>
                        <option value="Legal">Legal</option>
                        <option value="Model Workshop">Model Workshop</option>
                        <option value="Business Development">Business Development</option>
                    </select>
                </div>
                <div className="ms-3">
                    <select
                        name="LOCATION"
                        className="form-select py-2"
                        value={selectedLocation}
                        onChange={(e) => { setSelectedLocation(e.target.value); setCurrentPage(1); }}
                    >
                        <option value="LOCATION">LOCATION</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Copenhagen">Copenhagen</option>
                        <option value="London">London</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New York">New York</option>
                        <option value="Zurich">Zurich</option>
                    </select>
                </div>
            </div>

            <div className="text-center table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr className="text-start">
                            <th style={{ width: "35%", fontSize: "15px" }}>TITLE</th>
                            <th style={{ width: "25%", fontSize: "15px" }}>JOB AREA</th>
                            <th style={{ width: "20%", fontSize: "15px" }}>LOCATION</th>
                            <th style={{ width: "20%", fontSize: "15px" }}>DEADLINE</th>
                        </tr>
                    </thead>
                    <tbody className="text-start">
                        {currentJobs.length > 0 ? (
                            currentJobs.map((job, index) => (
                                <tr key={index}>
                                    <td style={{ width: "35%", fontSize: "15px" }}>{job.title}</td>
                                    <td style={{ width: "25%", fontSize: "15px" }}>{job.jobArea}</td>
                                    <td style={{ width: "20%", fontSize: "15px" }}>{job.location}</td>
                                    <td style={{ width: "20%", fontSize: "15px" }}>{job.deadline}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="pagination-controls d-flex justify-content-end my-3">
                <button
                    type="button"
                    className="mx-2 prenextbtn"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    &lt;
                </button>
                <span>Page {currentPage} to {totalPages}</span>
                <button
                    type="button"
                    className="mx-2 prenextbtn"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    &gt;
                </button>
            </div>

        </div>
    );
}

export default CareerTable;
