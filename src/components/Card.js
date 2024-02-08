import React, { useEffect, useRef } from 'react';

export default function Card() {
    const cardStyle = {
        maxWidth: '666px',
    };

    const imgStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    };

    const iconsStyle = {
        fontSize: '4rem',
    };

    const uploadContainerStyle = {
        // Add any styles specific to the upload container if needed
    };

    const fileUploadRef = useRef(null);

    useEffect(() => {
        if (fileUploadRef.current) {
            fileUploadRef.current.style.opacity = '0';
        }

        const fileBrowser = document.getElementById('file-browser');
        if (fileBrowser) {
            fileBrowser.addEventListener('click', handleFileBrowserClick);
        }

        return () => {
            // Cleanup event listener when the component unmounts
            if (fileBrowser) {
                fileBrowser.removeEventListener('click', handleFileBrowserClick);
            }
        };
    }, []); // Empty dependency array ensures it runs only once after the component mounts

    const handleFileBrowserClick = (e) => {
        e.preventDefault();
        if (fileUploadRef.current) {
            fileUploadRef.current.click();
        }
    };

    return (
        <div>
            <div className="card mb-3" style={ cardStyle }>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img
                            src="https://enterprise.comodo.com/images/forensic-analysis/scan-computers.png"
                            className="img-fluid rounded-start"
                            alt="..."
                            style={ imgStyle }
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="card-title">Scan it now</h3>
                            <p className="card-text">Upload your file here</p>

                            <div className="upload-container" style={ uploadContainerStyle }>
                                <div className="border-container">
                                    <div className="icons fa-4x" style={ iconsStyle }>
                                        <i className="fas fa-file-image" data-fa-transform="shrink-3 down-2 left-6 rotate--45"></i>
                                        <i className="fas fa-file-alt" data-fa-transform="shrink-2 up-4"></i>
                                        <i className="fas fa-file-pdf" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                                    </div>
                                    {/* <input type="file" id="file-upload"> */ }
                                    <p>
                                        Drag and drop files here, or
                                        <a href="#" id="file-browser">
                                            browse
                                        </a>{ ' ' }
                                        your computer.
                                    </p>
                                </div>
                            </div>

                            <select className="mb-9 h-100 w-100 bg-success rounded">
                                { Array.from(Array(6), (e, i) => (
                                    <option key={ i + 1 } value={ i + 1 }></option>
                                )) }
                            </select>

                            {/* Additional code for file upload */ }
                            <input
                                type="file"
                                id="file-upload"
                                ref={ fileUploadRef }
                                style={ { opacity: '0' } }
                            />

                            <p className="card-text">
                                <small className="text-muted">Please wait ...</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
