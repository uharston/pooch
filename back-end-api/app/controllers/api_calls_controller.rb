require 'faraday'
class ApiCallsController < ApplicationController 

    def petfinder 
        petfinder = ApiCall.find_by(name: 'petfinder') 
        if !petfinder.api_token || petfinder.expired? 
            token_response = Faraday.post("https://api.petfinder.com/v2/oauth2/token" ) do |req| 
                req.headers['Content-Type'] = 'application/x-www-form-urlencoded'
                req.body = "grant_type=client_credentials&client_id=#{ENV['PETFINDER_CLIENT_ID']}&client_secret=#{ENV['PETFINDER_CLIENT_SECRET']}"
            end
            data = JSON.parse(token_response.body)
            expires = (Time.now.to_f * 1000) + (data["expires_in"] * 1000)

            petfinder.update(api_token: data["access_token"], expires_in: expires )
        end

        resp = Faraday.get( params[:url] ) do |req| 
            req.headers['Authorization'] = "Bearer #{petfinder.api_token}"
        end
        
        render json: {petfinder_response: JSON.parse(resp.body) }
    end 

    def google_places_search

    end 

end 

