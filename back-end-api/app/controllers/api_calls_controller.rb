require 'faraday'
class ApiCallsController < ApplicationController 

    def petfinder 
        # byebug
        # API Token - If there is not a valid token request a new one 
        petfinder = ApiCall.find_by(name: 'petfinder') 
        if petfinder.expired? 
            token_response = Faraday.post("https://api.petfinder.com/v2/oauth2/token" ) do |req| 
                req.headers['Content-Type'] = 'application/x-www-form-urlencoded'
                req.body = "grant_type=client_credentials&client_id=#{ENV['PETFINDER_CLIENT_ID']}&client_secret=#{ENV['PETFINDER_CLIENT_SECRET']}"
            end
            byebug
            data = JSON.parse(token_response.body)
            petfinder.update(api_token: data["access_token"], expires_in: data["expires_in"] )
        end
        resp = Faraday.get( params[:url] ) do |req| 
            req.headers['Authorization'] = "Bearer #{petfinder.api_token}"
        end
        byebug
        response = JSON.parse(req) 
        byebug
        render json: {petfinder_response: response}
    end 

    def google_places_search

    end 

end 

curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MFRnRXRNcmtuMTRKaDVqdDJUalNXMlZDTURvVkx3WFBXRjdWeGZYTWhGUTJTZkp1cyIsImp0aSI6IjI4N2Y0N2U1MjcxYjJmYWQ4YTBlMzJkOGYzMWY0ZDllYTc2ZGM0YWQ2ZGExNmFiOTM1YmU2ZThkODMwNzMyY2YzZDJlNWFlMjUxNDE3ZmRkIiwiaWF0IjoxNjAxNTg3NzIxLCJuYmYiOjE2MDE1ODc3MjEsImV4cCI6MTYwMTU5MTMyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.GnVBMv7QlhIsklrKjOcVhNs0BXFfPVwWLJrSm8Un3pDz4vfk2oYJ997rwvKklVQQOvEQlrskWb_457xouUNCv-PpQCMRj-wVb9JsHf5L4V974yg67-XVjxnP558tN8lV7btGyG8sJvs8wcolDdHcP9WVQkcTrUl7JzUVG3moX-3iZW7W-hrG72mEtNE2ZDJ3MDw0eKmp-G0mJc7CWuJhFHrFsHE54zKLH9wp77SZbWdKVhYfFPsNxdNuar8fQDMrKBPNANqA6-djirnSxF38CiKV1gR27h1Tdm_CdnXB2a2KZ1GnpfTA1fhUi1uZk0XTVBRyTW9XmtuDJaiUuLANTw" https://api.petfinder.com/v2/animals?type=dog&page=2