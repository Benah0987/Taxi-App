class Driver < ApplicationRecord
    has_many :rides
    has_many :payments
    has_many :reviews, foreign_key: "reviewee_id"
    has_one_attached :profile_picture
    has_one_attached :car_image
    
  end
  