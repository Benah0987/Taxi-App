class Review < ApplicationRecord
  belongs_to :user, foreign_key: "reviewer_id"
  belongs_to :driver, foreign_key: "reviewee_id"
  belongs_to :ride
end
