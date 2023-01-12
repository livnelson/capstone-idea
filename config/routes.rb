Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :my_lists, only: [:create, :update, :destroy]
  resources :movies
  
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  post "/create", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  patch "/mylist", to: "my_lists#create"

  delete '/deleteprofile', to: "users#destroy"
  
end
