class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      redirect_to api_user_url(@user)
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['No one is logged in Dummy'], status: 404
    end
  end

end
