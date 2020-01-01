Rails.application.routes.draw do
  resources :favoritesiis
  scope '/api' do
    get '/users', to: 'users#index'
    get 'users/new', to: 'users#create'
    post 'users/new', to: 'users#create'
    get '/users/:id', to: 'users#show'
    patch 'users/update/:id', to: 'users#update'
    
    resources :listings
    get 'listings', to: 'listings#index'
    resources :orders
    post 'orders/new', to: 'orders#create'
    patch 'orders/update/:id', to: 'orders#update'
    
    resources :favorites
    get 'favorites', to: 'favorties#index'
    get '/favorites/:id', to: 'favorites#show'

    resources :favoritesiis
    get 'favoritesiis', to: 'favoritesiis#index'
    get '/favoritesiis/:id', to: 'favoritesiis#show'
    
    resources :sessions, only: [:new, :create, :destroy]
    get "/login", to: "sessions#new", as: "login"
    post "/login", to: "sessions#create"
    get "/logout", to: "sessions#destroy", as: "logout"
    
    
    
    # resources :comments
    # resources :users
    # resources :favorites
  end
end
