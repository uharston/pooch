class ApiCall < ApplicationRecord 

    def expired? 
       time_left =  (self.updated_at.to_f * 1000) - (self.expires_in * 1000)
       time_left < 1 ? true : false 
    end 
end 