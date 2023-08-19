class Driver < ApplicationRecord
    has_many :rides
    has_many :payments
    has_many :reviews
    
    
    has_secure_password
  end
  