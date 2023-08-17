class CreateCancellations < ActiveRecord::Migration[7.0]
  def change
    create_table :cancellations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :ride, null: false, foreign_key: true
      t.datetime :timestamp
      t.text :reason

      t.timestamps
    end
  end
end
