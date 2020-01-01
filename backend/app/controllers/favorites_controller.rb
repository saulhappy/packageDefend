class FavoritesController < ApplicationController
    def new
        @favorite = Favorite.new
      end 
      
      def index 
        @favorites = Favorite.all
        if @favorites
          render json: @favorites.to_json(favorite_serializer)
          # render json: @favorites 
        else
          render json: {
            status: 404,
            errors: ['No favorites found']
          }
        end 
      end

      def show
        @favorite = Favorite.find(params[:id])
        if @favorite
          render json: @favorite.to_json(favorite_serializer) 
        else 
          render json: {
            status: 404,
            errors: ['Favorite not found']
          }
        end
      end



      def favorite_serializer
        {
          :only => [:id, :user_id],
          :include => [:listing => {
            :include => [:user]
          }]
         }
      end

      def favorite_params
        params.require(:favorite).permit(:id, :user_id, :listing)
      end


end
