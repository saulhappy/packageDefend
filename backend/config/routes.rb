Rails.application.routes.draw do
  scope '/api' do
  resources :orders
  resources :comments
  resources :listings
  resources :users
  end
end
