class User < ApplicationRecord
    has_many :ride_requests
    has_many :rides
    has_many :payments
    has_many :reviews
    has_many :cancellations

    has_secure_password
  end
  