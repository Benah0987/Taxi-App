class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def user_login
      email = params[:email]
      password = params[:password]
      
      user = User.find_by(email: email)
      
      if user && user.authenticate(password)
        session[:user_id] = user.id
        render json: { success: "User login success" }
      else
        render json: { error: "Invalid email address or password" }, status: :unauthorized
      end
    end
  
    def driver_login
      email = params[:email]
      password = params[:password]
      
      driver = Driver.find_by(email: email)
      
      if driver && driver.authenticate(password)
        session[:driver_id] = driver.id
        render json: { success: "Driver login success" }
      else
        render json: { error: "Invalid email address or password" }, status: :unauthorized
      end
    end
  
    def logout
      if session[:user_id]
        session.delete :user_id
        render json: { success: "User logout success" }
      elsif session[:driver_id]
        session.delete :driver_id
        render json: { success: "Driver logout success" }
      else
        render json: { error: "No active session to log out from" }, status: :unprocessable_entity
      end
    end
  end
  