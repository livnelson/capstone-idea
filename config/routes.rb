Rails.application.routes.draw do
  resources :my_lists
  resources :movies
  resources :users
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:show, :index, :create]
  
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  post "/create", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end
