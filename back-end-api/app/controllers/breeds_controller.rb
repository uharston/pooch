class BreedsController < ApplicationController 
    def index 
        breeds = Breed.all 
        render json: breeds.to_json( only: [:name])
    end 
end 