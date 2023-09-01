class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
    # fetching users 
    def index
        users = User.all
        render json: users
    end

    def current_user
      user = User.find_by(id: session[:user_id])
      
      if user.nil?
        puts "User not found for session ID: #{session[:user_id]}"
      else
        puts "Current User: #{user.name}" # Output user information for debugging
      end
      
      render json: user
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
    # fetching a single user 
    def show
      user = User.find(params[:id])
      render json: user
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
