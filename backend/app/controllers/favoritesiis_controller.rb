class FavoritesiisController < ApplicationController
    def new
        @favoriteii = Favoritesii.new
    end 

    def index 
        @favoritesiis = Favoritesii.all
        if @favoritesiis
          render json: @favoritesiis 
        else
          render json: {
            status: 404,
            errors: ['No favorites found']
          }
        end 
      end

end
