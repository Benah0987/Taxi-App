class DriversController < ApplicationController
    # fetching all the drivers 
    def index
        drivers = Driver.all
        render json: drivers
    end

    # create action 
    def create
        driver = Driver.new(driver_params)
        if driver.save
          render json: driver, status: :created
        else
          render json: driver.errors, status: :unprocessable_entity
        end
    end

    # destroy action
    def destroy
        driver = Driver.find(params[:id])
        driver.destroy
        head :no_content
    end

    # updating data
    def update
        driver = Driver.find(params[:id])
        if driver.update(driver_params)
          render json: driver
        else
          render json: driver.errors, status: :unprocessable_entity
        end
    end

    private

    def driver_params:
      params.require(:driver).permit(:name, :email, :password, :phone_number, :car_details, :profile_picture, :car_image)
    end
end
