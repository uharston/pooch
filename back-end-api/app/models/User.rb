class User < ApplicationRecord
    has_secure_password

    def self.create_from_omniauth(auth) 
         
        User.find_or_create_by(uid: auth['uid'], provider: auth['provider']) do |u|
            u.username = auth['info']['email']
            # u.first_name = auth['info']['first_name']
            # u.last_name = auth['info']['last_name']
            # u.email = auth['info']['email']
            # u.image_href = auth['info']['image']
            # u.avatar.attach(auth['info']['image'])
            u.password = SecureRandom.hex(16)
        end 
       
    end 
end
