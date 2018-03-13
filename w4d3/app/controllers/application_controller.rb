class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :login_user!

  def current_user
    return nil unless session[:session_token].present?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login_user!
    @user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )

    if @user.nil?
      render plain: "WRONG!!!!!!!!"
    else
      @user.reset_session_token!
      session[:session_token] = @user.session_token
      redirect_to cats_url
    end
  end
end
