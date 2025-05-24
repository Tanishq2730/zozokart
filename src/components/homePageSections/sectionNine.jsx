import React from 'react';
import { IMAGE_URL } from '../../utils/api-config';

const SectionNine = ({homePage}) => {
    const sectionNineData = homePage?.sectionNine || {title: "", productIds: [] };
    return (
        <>
            <section className='my-30'>
                <div className='container-fluid videoSection'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                        {sectionNineData?.video && (
                            <video autoPlay loop muted
                                style={{
                                width: '100%',
                                height: '500px',
                                objectFit: 'cover',
                                zIndex: '-1'
                                }}
                            >
                                <source src={`${IMAGE_URL}/${sectionNineData.video}`} type="video/mp4" />
                            </video>
                            )}
                        </div>
                        <div className='col-md-6 p-0'>
                                    <img src={`${IMAGE_URL}/${sectionNineData?.adsImage}`}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionNine;
