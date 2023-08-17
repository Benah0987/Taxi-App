class Payment < ApplicationRecord
  belongs_to :user
  belongs_to :driver
  belongs_to :ride
end
