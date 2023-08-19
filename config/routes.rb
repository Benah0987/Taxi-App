Rails.application.routes.draw do
  resources :users do
    resources :ride_requests, only: [:index]
  end

  resources :drivers

  resources :rides

  resources :ride_requests, only: [:create, :index, :show, :destroy]

  resources :cancellations, only: [:create, :index, :show]

  resources :payments, only: [:create]

  resources :reviews, only: [:create]

  # Other routes and root configurations can be added here

  post '/user/login', to: 'sessions#user_login'
  delete '/user/logout', to: 'sessions#logout'

  post '/driver/login', to: 'sessions#driver_login'
  delete '/driver/logout', to: 'drivers#logout'

  # getting current user
  get '/user/current_user', to: 'users#current_user'
  get '/driver/current_driver', to: 'drivers#current_driver'
end
