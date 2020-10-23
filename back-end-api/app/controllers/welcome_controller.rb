class WelcomeController < ApplicationController
    def index 
        render json: { welcome: "This is the homepage" }
    end
end
