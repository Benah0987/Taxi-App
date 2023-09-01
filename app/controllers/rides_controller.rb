class RidesController < ApplicationController

  def index
    driver = Driver.find(params[:driver_id])
    rides = driver.rides
    render json: rides, include: [:user, :driver, :reviews]
  end
    # creating a ride 
    def create
        user = User.find(params[:user_id])
        driver = Driver.find(params[:driver_id])
        
        ride = Ride.new(ride_params)
        
        if ride.save
          render json: ride, status: :created
        else
          render json: ride.errors, status: :unprocessable_entitya
        end
    end

    # destroy to handle cancellations 
    def destroy
        ride = Ride.find(params[:id])
        ride.destroy
        head :no_content
    end

    # seeing the details of a single ride 
    def show
      ride = Ride.find(params[:id])
      render json: ride, include: [:driver, { review: { include: :user } }]
    end

    private

    def ride_params
      params.permit(:user_id, :driver_id, :pickup_location, :dropoff_location)
    end

end
