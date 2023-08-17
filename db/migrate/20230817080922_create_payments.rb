class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true
      t.references :ride, null: false, foreign_key: true
      t.decimal :amount
      t.datetime :timestamp
      t.string :status

      t.timestamps
    end
  end
end
