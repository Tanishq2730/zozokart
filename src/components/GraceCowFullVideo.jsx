import React from 'react';

const GraceCowFullVideo = () => {

    return (
        <>
            <section className='my-30'>
                <div className='container-fluid videoSection'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <video autoPlay loop muted
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    objectFit: 'cover',
                                    zIndex: '-1'
                                }}
                            >
                                <source src="/assets/images/video/fashion.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='col-md-6 p-0'>
                                    <img src='/assets/images/ads/adsbanner.png'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GraceCowFullVideo;
