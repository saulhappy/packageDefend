Rails.application.routes.draw do
  scope '/api' do
    get '/users', to: 'users#index'
    get 'users/new', to: 'users#create'
    post 'users/new', to: 'users#create'
    get '/users/:id', to: 'users#show'

    
    resources :sessions, only: [:new, :create, :destroy]
    get "/login", to: "sessions#new", as: "login"
    post "/login", to: "sessions#create"
    get "/logout", to: "sessions#destroy", as: "logout"
    
    
    
    
    # post "/login", to: "auth#login"
    # get "/auto_login", to: "auth#auto_login"
    # get "/user_is_authed", to: "auth#user_is_authed"
    
    
    # resources :orders
    # resources :comments
    # resources :listings
    # resources :users
  end
end
