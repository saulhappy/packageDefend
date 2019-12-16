Rails.application.routes.draw do
  scope '/api' do
    get '/users', to: 'users#index'
    get '/users/:id', to: 'users#show'
    post 'users/', to: 'users#create'


  # resources :orders
  # resources :comments
  # resources :listings
  # resources :users
  end
end
