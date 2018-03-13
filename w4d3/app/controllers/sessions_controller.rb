class SessionsController < ApplicationController
  def new
    render(:new)
  end

  def create
    login_user!
  end

  def destroy
    session[:session_token] = nil
    flash[:success] = "logeddo ut"
    redirect_to new_session_url
  end

  # private
  #
  # def login_params
  #   params.require(:user).permit(:user)
  # end
end
