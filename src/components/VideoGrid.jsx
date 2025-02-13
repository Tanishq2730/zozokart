import React from 'react';

const VideoGrid = () => {
    // Array of YouTube video IDs for the iframes
    const videoIDs = [
        'b7Z86DbBOZQ', // Replace with actual video IDs
        'KSisEEIFtGk',
        'kp41f9-DpKE',
        'opaYtoO5DPY'
    ];

    return (
        <>
            <section className="py-30">
                <div className="container-fluid">
                    <h3 className="mb-30 text-center">Timeless Techniques</h3>
                    <div className="row">
                        {videoIDs.map((id, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div
                                    className="shadow rounded"
                                    style={{
                                        aspectRatio: '9/16',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`}
                                        title={`YouTube video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoGrid;
