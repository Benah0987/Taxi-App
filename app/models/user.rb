class User < ApplicationRecord
    has_many :ride_requests
    has_many :rides
    has_many :payments
    has_many :reviews, foreign_key: "reviewer_id"
    has_many :cancellations
  end
  