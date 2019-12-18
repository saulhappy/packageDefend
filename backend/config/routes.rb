Rails.application.routes.draw do
  scope '/api' do
    get '/users', to: 'users#index'
    get '/users/:id', to: 'users#show'
    post 'users/', to: 'users#create'

    post "/login", to: "auth#login"
    get "/auto_login", to: "auth#auto_login"
    get "/user_is_authed", to: "auth#user_is_authed"


  # resources :orders
  # resources :comments
  # resources :listings
  # resources :users
  end
end
