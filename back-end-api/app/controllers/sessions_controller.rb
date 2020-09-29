class SessionsController < ApplicationController

    def omniauth
        user = User.create_from_omniauth(params[:profileObj])
        if user.valid?
            session[:user_id] = user.id 
            render json: user.to_json(include: {pets: {only: [:petfinder_id, :url] }}, only: [:name, :email, :image_url ]) 
        else 
            render json: { error: "User Not Found" }
        end
    end
    
end