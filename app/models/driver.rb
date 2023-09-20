class Driver < ApplicationRecord
    has_many :ride
    has_many :payments
    has_many :reviews
    
    
    has_secure_password
  end
  