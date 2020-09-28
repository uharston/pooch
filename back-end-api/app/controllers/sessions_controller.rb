class SessionsController < ApplicationController

    def omniauth
        user = User.create_from_omniauth(params[:profileObj])
        if user.valid?
            session[:user_id] = user.id 
            render json: {name: user.name, email: user.email, image_url: user.image_url, logged_in: true }
        else 
            render json: { error: "User Not Found" }
        end
    end
    
end