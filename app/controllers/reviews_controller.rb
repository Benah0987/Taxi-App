class ReviewsController < ApplicationController
    def create
      review = Review.new(review_params)
      
      if review.save
        render json: review, status: :created
      else
        render json: review.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def review_params
      params.permit(:user_id, :driver_id, :ride_id, :rating, :comment, :timestamp)
    end
  end
  