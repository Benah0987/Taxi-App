require 'jwt'

class SessionController < ApplicationController
  skip_before_action :verify_authenticity_token

  def user_login
    email = params[:email]
    password = params[:password]

    user = User.find_by(email: email)

    if user && user.authenticate(password)
      payload = { user_id: user.id }
      secret_key = '4756' # Replace with your actual secret key
      expiration_time = 1.day.from_now

      token = JWT.encode(payload, secret_key, 'HS256')

      render json: { token: token }
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
      session.delete(:user_id)
      render json: { success: "User logout success" }
    elsif session[:driver_id]
      session.delete(:driver_id)
      render json: { success: "Driver logout success" }
    else
      render json: { error: "No active session to log out from" }, status: :unprocessable_entity
    end
  end
end
