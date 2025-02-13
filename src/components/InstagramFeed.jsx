import React, { useState } from "react";
import Slider from "react-slick";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
// import insta1 from "../../"
const InstagramFeed = () => {
    // State for Modal
    const [modal, setModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    // Sample Instagram posts data
    const posts = [
        {
            id: 1,
            img: "assets/images/common/insta-1.jpg",
            description: "@graceofcows",
        },
        {
            id: 2,
            img: "assets/images/common/insta-2.jpg",
            description: "@graceofcows",
        },
        {
            id: 3,
            img: "assets/images/common/insta-3.jpg",
            description: "@graceofcows",
        },
        {
            id: 4,
            img: "assets/images/common/insta-4.jpg",
            description: "@graceofcows",
        },
        {
            id: 5,
            img: "assets/images/common/insta-5.jpg",
            description: "@graceofcows",
        },
        {
            id: 6,
            img: "assets/images/common/insta-6.jpg",
            description: "@graceofcows",
        },
        {
            id: 7,
            img: "assets/images/common/insta-7.jpg",
            description: "@graceofcows",
        },
        {
            id: 8,
            img: "assets/images/common/insta-8.jpg",
            description: "@graceofcows",
        },
    ];

    // Toggle Modal
    const toggle = () => setModal(!modal);

    // Handle Post Click
    const handlePostClick = (post) => {
        setSelectedPost(post);
        toggle();
    };


    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="custom-arrow custom-arrow-left"
            aria-label="Previous Slide"
        >
            &lt;
        </button>
    );

    // Custom Next Arrow
    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="custom-arrow custom-arrow-right"
            aria-label="Next Slide"
        >
            &gt;
        </button>
    );


    // Slider Settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />, // Use custom previous arrow
        nextArrow: <NextArrow />, // Use custom next arrow
        // beforeChange: (current, next) => setPhotoIndex(next), // Sync state with slider index
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settingsmodal = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />, // Use custom previous arrow
        nextArrow: <NextArrow />, // Use custom next arrow
        // beforeChange: (current, next) => setPhotoIndex(next), // Sync state with slider index
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <section className="py-40" style={{ backgroundColor: '#fff8d4' }}>
                <div className="container-fluid">
                    <p className="text-center text-main-600"><b>#graceofcows</b></p>
                    <h3 className="mb-30 text-center">Instagram</h3>
                    <Slider {...settings}>
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="instagram-post"
                                onClick={() => handlePostClick(post)}
                            >
                                <img
                                    src={post.img}
                                    alt={`Post ${post.id}`}
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="text-center">
                    <a href="#" className="btn bg-main-600 align-items-center rounded-pill gap-8 mt-20">View on Instagram</a>

                </div>
            </section>

            {/* Modal */}
            <Modal isOpen={modal} toggle={toggle} centered size="lg">
                <ModalHeader toggle={toggle}>
                    {/* Instagram {selectedPost?.id} */}
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="8">
                            <Slider {...settingsmodal}>
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="instagram-post"
                                        onClick={() => handlePostClick(post)}
                                    >
                                        <img
                                            src={selectedPost?.img}
                                            alt={`Post ${selectedPost?.id}`}
                                            style={{ width: "100%", borderRadius: "10px", height:'auto' }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col md="4">
                            <p className="mt-3 mb-4">{selectedPost?.description}</p>
                            <hr className="mt-0 "></hr>
                            <div className="" style={{ height: '400px', overflowY: 'auto' }}>
                                <p style={{ fontSize: '14px' }}>
                                    🪔 Purity that pleases the gods, Quality that nourishes
                                    your family Presenting Grace of Cows A2 Ghee - where tradition
                                    meets premium quality. Made from pure A2 milk, ensuring divine
                                    goodness in every spoonful ✨ . . . For any inquiries, feel free
                                    to contact us at 📞: +919371299955 Visit our website to place your
                                    order now 🌐: https://graceofcows.in/desi-a2-cow-ghee/ #GraceOfCows
                                    #PureGhee #A2Ghee #TraditionalCooking #PureCooking #GheeLove #IndianKitchen
                                    #HealthyGhee #CookingWithGhee #PureIngredients #DesiGhee #GraceOfCows
                                    #CulinaryTradition #HealthyLiving
                                </p>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    );
};

export default InstagramFeed;
