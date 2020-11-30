class ChangeApiTokenToTextInApiCalls < ActiveRecord::Migration[6.0]
  def change
    change_column :api_calls, :api_token, :text 
  end
end
