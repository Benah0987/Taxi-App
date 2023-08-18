class UsersController < ApplicationController
    # fetching users 
    def index
        users = User.all
        render json: users
    end

    # creating a new user 
    def create
        user = User.new(user_params)
        if user.save
          render json: user, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
    end

    # updating data of existing user 
    def update
        user = User.find(params[:id])
        if user.update(user_params)
          render json: user
        else
          render json: user.errors, status: :unprocessable_entity
        end
    end

    # remove an existing user 
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
    
    private

    def user_params
        params.permit(:name, :email, :password, :phone_number)
      end
end
