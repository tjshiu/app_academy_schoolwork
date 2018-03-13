class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      # keep them logged in
      session[:session_token] = @user.session_token
      redirect_to cats_url
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    render(:new)
  end

  def show
    user = User.find(params[:id])
    diret
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password)
  end

end
