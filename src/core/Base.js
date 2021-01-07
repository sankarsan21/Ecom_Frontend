import React from 'react';

const Base = ({
    title = "My title",
    description = "My Description",
    className = "bd-dark text-white p-4",
    children
}) => {
    return (

        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>If there any problem then mail me </h4>
                    <button className="btn btn-warning btn-lg">Contact me</button>
                    <div className="container">
                        <span className="text-warning"> An amazing django React site</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Base;