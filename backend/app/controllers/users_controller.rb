class UsersController < ApplicationController

  def index 
    @users = User.all
    if @users
      render json: @users.to_json(user_serializer) 
    else
      render json: {
        status:404,
        errors: ['No users found']
      }
    end 
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user.to_json(user_serializer) 
    else 
      render json: {
        status: 404,
        errors: ['User not found']
      }
    end
  end

  def create
    @user = User.new(user_params, balance: 100, rating: nil, pic_link: "https://www.libarts.colostate.edu/music/wp-content/mu-plugins/cla-people/templates/userphoto.png") 
    if @user.valid?
      @user.save
      render json: {
        status: 200,
        message: "New user saved!"
      }

    else
      render json: {
        status: 500,
        errors: "Could not create user. User or email already exists. Password must be greather than 3 characters"
      }
    end
  end 

  private

  def user_serializer
    {
      :only => [:f_name, :l_name, :email, :address, :balance, :rating, :pic_link],
      :include => [:orders, :listings, :comments]}
  end

  def user_params
    params.require(:user).permit(:f_name, :l_name, :email, :address, :balance, :rating, :pic_link, :password, :password_confirmation)
  end

end