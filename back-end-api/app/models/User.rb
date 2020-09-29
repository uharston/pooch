class User < ApplicationRecord
    has_secure_password
    has_many :pets 

    def self.create_from_omniauth(auth) 
         
        User.find_or_create_by(uid: auth['googleId']) do |u|
            u.name = auth['name']
            u.email = auth['email']
            u.image_url = auth['imageUrl']
            u.password = SecureRandom.hex(16)
        end 
       
    end 
end
