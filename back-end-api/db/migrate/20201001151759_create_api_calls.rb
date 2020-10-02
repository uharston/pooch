class CreateApiCalls < ActiveRecord::Migration[6.0]
  def change
    create_table :api_calls do |t|
      t.string :name
      t.string :api_token
      t.integer :expires_in 
      t.timestamps
    end
  end
end
