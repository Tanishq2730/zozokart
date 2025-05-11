import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-image-lightbox/style.css";

import { IMAGE_URL } from "../utils/api-config";
import { showToast } from "./ToastifyNotification";
import { StoreRatingAndReview } from "../api/ratingAndReviewAPI";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from 'date-fns';

const ProductRatingAndReview = ({ product,getProduct }) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)
  
  useEffect(
    () => {
      if (product && product.ratingAndReviews) {
        // You can perform any calculations or data transformations here if needed
        console.log("Rating and Reviews:", product.ratingAndReviews);
        console.log("Star Counts:", product.starCounts);
      }
    },
    [product]
  );

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleTitleChange = (event) => {
    setReviewTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = async(event) => {
    event.preventDefault();
    try {
      if(!reviewTitle){
        showToast('error','Review title is required')
        return;
      }
      if(!reviewContent){
        showToast('error','Revire is required')
        return;
      }
      if(!selectedRating){
        showToast('error','Rating is required')
        return;
      }
      const data = {
        productId:product._id,
        title:reviewTitle,
        review:reviewContent,
        rating:selectedRating,
      }
      const response = await StoreRatingAndReview(data);
      // console.log(response)
      if (response.success == true) {
        showToast('success', response.message)
        setReviewTitle("");
        setReviewContent("");
        setSelectedRating(0);
        getProduct()
      } else {
        // setError(response.message);
        showToast('error', response.message)
      }

    } catch (error) {
      // setError(error); // Handle login errors
      showToast('error', error)
    }
    
  };

  // if (
  //   !product ||
  //   !product.ratingAndReviews ||
  //   product.ratingAndReviews.length === 0
  // ) {
  //   return <p>No reviews yet.</p>;
  // }

  let { ratingAndReviews, starCounts } = product;

  if(!ratingAndReviews){
    ratingAndReviews = [];
  }
  // Calculate the average rating
  const totalRating = ratingAndReviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const averageRating =
    ratingAndReviews.length > 0
      ? (totalRating / ratingAndReviews.length).toFixed(1)
      : 0;

  return (
    <section className="product-details py-0 mt-30">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="row g-4">
              <h6 className="mb-24">Customer reviews</h6>
            <div className="col-lg-6">
              {ratingAndReviews.length > 0 ? ratingAndReviews.map((reviewData) => (
                <div
                  className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44"
                  key={reviewData._id}
                >
                  <img
                    src="assets/images/thumbs/comment-img1.png"
                    alt="User Avatar"
                    className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                  />
                  <div className="flex-grow-1">
                    <div className="flex-between align-items-start gap-8 ">
                      <div className="">
                        <h6 className="mb-12 text-md">
                          {reviewData.userId
                            ? reviewData.userId.name
                            : "Anonymous"}
                        </h6>
                        <div className="flex-align gap-8">
                          {Array.from({
                            length: reviewData.rating,
                          }).map((_, index) => (
                            <span
                              key={index}
                              className="text-15 fw-medium text-warning-600 d-flex"
                            >
                              <i className="ph-fill ph-star" />
                            </span>
                          ))}
                          {Array.from({
                            length: 5 - reviewData.rating,
                          }).map((_, index) => (
                            <span
                              key={`empty-${index}`}
                              className="text-15 fw-medium text-warning-300 d-flex"
                            >
                              <i className="ph-fill ph-star" />
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-800 text-xs">
                        {/* {new Date(reviewData.createdAt).toLocaleString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true, // Or true for AM/PM
                        })} */}
                        {formatDistanceToNow(new Date(reviewData.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                    <h6 className="mb-14 text-md mt-24">
                      {reviewData?.title?.substring(0, 25)}...
                    </h6>
                    <p className="text-gray-700">{reviewData.review}</p>
                    {/* You can add like/reply functionality here if needed */}
                    {/* <div className="flex-align gap-20 mt-44">
                      <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                        <i className="ph-bold ph-thumbs-up" />
                        Like
                      </button>
                      <Link
                        to="#comment-form"
                        className="flex-align gap-12 text-gray-700 hover-text-main-600"
                      >
                        <i className="ph-bold ph-arrow-bend-up-left" />
                        Replay
                      </Link>
                    </div> */}
                  </div>
                </div>
              )):<p>No reviews yet.</p>}
              {/* Form for writing a review */}
              {isAuthenticated && 
              <div className="mt-56">
                <div className="">
                  <h6 className="mb-24">Write a Review</h6>
                  <span className="text-heading mb-8">
                    What is it like to Product?
                  </span>
                  <div className="flex-align gap-8">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <button
                        key={`star-select-${index}`}
                        type="button"
                        className={`text-15 fw-medium d-flex ${
                          index + 1 <= selectedRating
                            ? "text-warning-600"
                            : "text-gray-400"
                        }`}
                        onClick={() => handleStarClick(index + 1)}
                      >
                        <i className="ph-fill ph-star" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-32">
                  <form onSubmit={handleSubmitReview}>
                    <div className="mb-32">
                      <label htmlFor="title" className="text-neutral-600 mb-8">
                        Review Title
                      </label>
                      <input
                        type="text"
                        className="common-input rounded-8"
                        id="title"
                        placeholder="Great Products"
                        value={reviewTitle}
                        onChange={handleTitleChange}
                        required
                      />
                    </div>
                    <div className="mb-32">
                      <label htmlFor="desc" className="text-neutral-600 mb-8">
                        Review Content
                      </label>
                      <textarea
                        className="common-input rounded-8"
                        id="desc"
                        value={reviewContent}
                        onChange={handleContentChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-main rounded-pill mt-48"
                      disabled={selectedRating === 0}
                    >
                      Submit Review
                    </button>
                    {selectedRating === 0 && (
                      <p className="text-sm text-red-500 mt-8">Please select a star rating.</p>
                    )}
                  </form>
                </div>
              </div>
              }
            </div>
            <div className="col-lg-6">
              <div className="ms-xxl-5">
                <div className="d-flex flex-wrap gap-44">
                  <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                    <h2 className="mb-6 text-main-600">{averageRating}</h2>
                    <div className="flex-center gap-8">
                      {Array.from({
                        length: Math.round(averageRating),
                      }).map((_, index) => (
                        <span
                          key={`avg-star-${index}`}
                          className="text-15 fw-medium text-warning-600 d-flex"
                        >
                          <i className="ph-fill ph-star" />
                        </span>
                      ))}
                      {Array.from({
                        length: 5 - Math.round(averageRating),
                      }).map((_, index) => (
                        <span
                          key={`avg-empty-${index}`}
                          className="text-15 fw-medium text-warning-300 d-flex"
                        >
                          <i className="ph-fill ph-star" />
                        </span>
                      ))}
                    </div>
                    <span className="mt-16 text-gray-500">
                      Average Product Rating
                    </span>
                  </div>
                  <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                    {Object.entries(starCounts || {})
                      .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
                      .map(([star, count]) => (
                        <div
                          className="flex-align gap-8 mb-20"
                          key={`star-count-${star}`}
                        >
                          <span className="text-gray-900 flex-shrink-0">{star}</span>
                          <div
                            className="progress w-100 bg-gray-100 rounded-pill h-8"
                            role="progressbar"
                            aria-label={`Rating ${star}`}
                            aria-valuenow={
                              (count / ratingAndReviews.length) * 100
                            }
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-main-600 rounded-pill"
                              style={{
                                width: `${
                                  (count / ratingAndReviews.length) * 100
                                }%`,
                              }}
                            />
                          </div>
                          <div className="flex-align gap-4">
                            {Array.from({
                              length: parseInt(star),
                            }).map((_, index) => (
                              <span
                                key={`star-icon-${star}-${index}`}
                                className="text-xs fw-medium text-warning-600 d-flex"
                              >
                                <i className="ph-fill ph-star" />
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-900 flex-shrink-0">
                            {count}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRatingAndReview;