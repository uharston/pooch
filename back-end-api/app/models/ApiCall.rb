class ApiCall < ApplicationRecord 

    def expired? 
        time_left = self.expires_in - (Time.now.to_i * 1000)
       time_left < 5 ? true : false 
    end 
end 