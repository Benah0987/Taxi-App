class CreateRides < ActiveRecord::Migration[7.0]
  def change
    create_table :rides do |t|
      t.references :user, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true
      t.string :pickup_location
      t.string :dropoff_location
      t.datetime :timestamp
      t.string :status

      t.timestamps
    end
  end
end
