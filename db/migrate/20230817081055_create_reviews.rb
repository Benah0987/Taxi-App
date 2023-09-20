class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true
      
      t.integer :rating
      t.text :comment
      t.datetime :timestamp

      t.timestamps
    end
  end
end
