# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_17_084822) do
  create_table "cancellations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "ride_id", null: false
    t.datetime "timestamp"
    t.text "reason"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ride_id"], name: "index_cancellations_on_ride_id"
    t.index ["user_id"], name: "index_cancellations_on_user_id"
  end

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "phone_number"
    t.string "car_details"
    t.datetime "registration_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_picture"
    t.string "car_image"
  end

  create_table "payments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "driver_id", null: false
    t.integer "ride_id", null: false
    t.decimal "amount"
    t.datetime "timestamp"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["driver_id"], name: "index_payments_on_driver_id"
    t.index ["ride_id"], name: "index_payments_on_ride_id"
    t.index ["user_id"], name: "index_payments_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "driver_id", null: false
    t.integer "ride_id", null: false
    t.integer "rating"
    t.text "comment"
    t.datetime "timestamp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["driver_id"], name: "index_reviews_on_driver_id"
    t.index ["ride_id"], name: "index_reviews_on_ride_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "ride_requests", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "pickup_location"
    t.string "dropoff_location"
    t.datetime "timestamp"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_ride_requests_on_user_id"
  end

  create_table "rides", force: :cascade do |t|
    t.integer "driver_id", null: false
    t.integer "user_id", null: false
    t.string "pickup_location"
    t.string "dropoff_location"
    t.datetime "timestamp"
    t.string "status"
    t.decimal "fare_amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["driver_id"], name: "index_rides_on_driver_id"
    t.index ["user_id"], name: "index_rides_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "phone_number"
    t.string "address"
    t.datetime "registration_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cancellations", "rides"
  add_foreign_key "cancellations", "users"
  add_foreign_key "payments", "drivers"
  add_foreign_key "payments", "rides"
  add_foreign_key "payments", "users"
  add_foreign_key "reviews", "drivers"
  add_foreign_key "reviews", "rides"
  add_foreign_key "reviews", "users"
  add_foreign_key "ride_requests", "users"
  add_foreign_key "rides", "drivers"
  add_foreign_key "rides", "users"
end
