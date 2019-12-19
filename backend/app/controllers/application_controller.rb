class ApplicationController < ActionController::API
    include ActionController::Helpers
    helper_method :current_user


    def current_user
      if session[:user_id]
        @current_user ||= User.find(session[:user_id])
      else
        @current_user = nil
      end
    end

    def require_login
        if !logged_in?
            redirect_to login_path
        end

    end

    def logged_in?
        session[user_id]
    end



end
