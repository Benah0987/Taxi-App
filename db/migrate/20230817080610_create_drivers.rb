class CreateDrivers < ActiveRecord::Migration[7.0]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :phone_number
      t.string :car_details
      t.datetime :registration_date

      t.timestamps
    end
  end
end
