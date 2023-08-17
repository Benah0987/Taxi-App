class CreateRideRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :ride_requests do |t|
      t.references :user, null: false, foreign_key: true
      t.string :pickup_location
      t.string :dropoff_location
      t.datetime :timestamp
      t.string :status

      t.timestamps
    end
  end
end
