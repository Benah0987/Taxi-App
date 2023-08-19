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
end
