class ListingsController < ApplicationController
    def index
        listings = Listing.all
        render json: {
          listings: listings
        }
      end

    def show
        user_id = params[:id]
        @user = User.find(params[:id])
        if logged_in? && @user == current_user
          listings = Listing.where(user_id: user_id)
          render json: {
            listings: listings
          }
        end
      end
    
  
end