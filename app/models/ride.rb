class Ride < ApplicationRecord
  belongs_to :driver
  belongs_to :user
  has_one :payment
  has_one :review
  has_one :cancellation
end
