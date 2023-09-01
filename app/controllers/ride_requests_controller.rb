class RideRequestsController < ApplicationController
    skip_before_action :verify_authenticity_token
    # create action
    def create
        
        ride_request = RideRequest.new(ride_request_params)
        
        if ride_request.save
          render json: ride_request, status: :created
        else
          render json: ride_request.errors, status: :unprocessable_entity
        end
    end
    
    # Define other actions below

    # fetch ride request
    def index
        ride_requests = RideRequest.all
        render json: ride_requests
    end

    # a single ride request 
    def show
        ride_request = RideRequest.find(params[:id])
        render json: ride_request
    end

#    deleting an existing 
    def destroy
        ride_request = RideRequest.find(params[:id])
        ride_request.destroy
        head :no_content
    end

    
    private
    def find_available_driver
        # Logic to find an available driver
        # This can involve querying the database for drivers who are not currently on a ride
        # Or it can involve more complex logic based on driver availability status
        # For this example, we'll assume a simple method that returns a random driver
        Driver.order('RANDOM()').first
    end

    def ride_request_params
        params.permit(:user_id, :pickup_location, :dropoff_location)
      end
      
      
end
