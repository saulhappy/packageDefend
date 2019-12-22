Rails.application.routes.draw do
  scope '/api' do
    get '/users', to: 'users#index'
    get 'users/new', to: 'users#create'
    post 'users/new', to: 'users#create'
    get '/users/:id', to: 'users#show'
    
    resources :listings
    resources :orders
    
    resources :sessions, only: [:new, :create, :destroy]
    get "/login", to: "sessions#new", as: "login"
    post "/login", to: "sessions#create"
    get "/logout", to: "sessions#destroy", as: "logout"
    
    
    
    # resources :comments
    # resources :users
    # resources :favorites
  end
end
