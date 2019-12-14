class UsersController < ApplicationController

  def index
    @users = User.all
    if @users
      render json: {
        users: @users
      }
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
      render json: {
        user: @user
      }
    else 
      render json: {
        status: 404,
        errors: ['User not found']
      }
    end
  end

  def create
    @user = User.new(user_params) 
    if @user.valid?
      @user.save
      redirect_to user_path(@user)
      render json: {
        # status: 200,
        message: "yeah boiiiiii"
      }
    else
      render json: {
        status: 500,
        errors: "Could not create user. Password should be at least 3 characters"
      }
    end
  end 

    private
  
  def user_params
    params.require(:user).permit(:f_name, :l_name, :email, :address, :balance, :rating, :pic_link, :password, :password_confirmation)
  end

end