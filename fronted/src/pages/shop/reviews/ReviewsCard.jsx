import React from "react";
import commentorIcon from "../../../assets/avatar.png"
import {formateDate} from "../../../utils/formateDate"
import RatingStars from "../../../components/RatingStars"
import {useState} from "react"
import PostAReview from "./PostAReview"



const ReviewsCard = ({ productReviews }) => {

    const reviews=productReviews || [];
    const[isModalOpen,setIsModalOpen]=useState(false);

    const handleOpenReviewModal=()=>{
      setIsModalOpen(true);
    }
    const handleCloseReviewModal=()=>{
      setIsModalOpen(false);
    }



    
  return (
    <div className="my-6 bg-white p-8">
      <div>
        {reviews.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All Comments..</h3>
            <div>
              {reviews.map((review, index) => (
                  <div key={index} className="mt-4">
                      <div className="flex gap-4 items-center">
                     
                         <img src={commentorIcon} alt="commentor" className="size-14" /> 
                         <div className="space-y-1">
                         <p className="text-lg font-medium underline capitalize underline-offset-4">{review?.userId?.username}</p>
                         
                         <p className="text-[12px] italic">{formateDate(review?.updatedAt)}</p>
                         <RatingStars rating={review?.rating}/>
                         
                         </div>


                      </div>

                      <div className="text-gray-600 mt-5 border p-8">
                        <p className="md:w-4/5">{review?.comment}</p>
                      </div>
                  </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No reviews yet!</p>
        )}
      </div>
      <div className="mt-12">
        <button
        onClick={handleOpenReviewModal}
         className="px-6 py-3 bg-primary text-white rounded-md">Add a review</button>
      </div>
      

      <PostAReview isModalOpen={isModalOpen} handleClose={handleCloseReviewModal}/>

    </div>
  );
};

export default ReviewsCard;
