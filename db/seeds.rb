# Creating users
user1 = User.create(name: "John Doe", email: "john@example.com", password: "password", phone_number: "123-456-7890", address: "123 Main St")
user2 = User.create(name: "Jane Smith", email: "jane@example.com", password: "password", phone_number: "987-654-3210", address: "456 Elm St")

# Creating drivers
driver1 = Driver.create(name: "Alex Johnson", email: "alex@example.com", password: "password", phone_number: "555-555-5555", car_details: "Toyota Camry")
driver2 = Driver.create(name: "Emily Williams", email: "emily@example.com", password: "password", phone_number: "444-444-4444", car_details: "Honda Accord")



# Creating ride requests
ride_request1 = RideRequest.create(user: user1, pickup_location: "Home", dropoff_location: "Work")
ride_request2 = RideRequest.create(user: user2, pickup_location: "School", dropoff_location: "Library")





# Creating reviews
review1 = Review.create(user: user1, driver: driver1,  rating: 4, comment: "Great ride!")
review2 = Review.create(user: user2, driver: driver2,  rating: 5, comment: "Excellent service!")

# Output message
puts "Seed data has been created."
