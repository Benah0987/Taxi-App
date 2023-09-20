class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  # ...

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  def current_user
    render json: { user: current_user }
  end

  private

  def user_params
    params.permit(:name, :email, :password, :phone_number)
  end

  def current_user
    @current_user ||= User.find(decoded_token[:user_id])
  end

  def decoded_token
    token = request.headers['Authorization'].split(' ').last
    @decoded_token ||= JWT.decode(token, '4756', true, algorithm: 'HS256')[0] # Replace with your actual secret key
  end

  def authenticate_user
    render json: { error: 'Unauthorized' }, status: :unauthorized unless current_user
  end
end
