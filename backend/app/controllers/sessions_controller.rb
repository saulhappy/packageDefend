class SessionsController < ApplicationController
    def new
    end

    def create
      user = User.find_by_email(params[:email])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: {
          status: 200,
          user: user
        }
      else
        render json: {
          status: 404
        }
      end
    end

    def destroy
      session[:user_id] = nil
    end

    def user_serializer
      {
        :only => [:id, :f_name, :l_name, :email, :address, :balance, :rating, :pic_link],
        :include => [:orders, :listings, :comments]}
    end
  end