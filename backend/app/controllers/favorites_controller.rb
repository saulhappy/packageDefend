class FavoritesController < ApplicationController
    def new
        @favorite = Favorite.new
      end 
end
