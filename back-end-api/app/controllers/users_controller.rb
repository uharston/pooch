class UsersController < ApplicationController
 
    def update 
        user = User.find_by(email: params[:user][:email])
        if user.valid? 
            pet = user.pets.create(petfinder_id: params[:pet][:id], url: params[:pet][:url] )
            render json: { message: "Dog Saved!", pet_id: pet.petfinder_id }
        end
    end 

end