class ChangeExpiresInToBigIntInApiCalls < ActiveRecord::Migration[6.0]
  def change
    change_column :api_calls, :expires_in, :bigint
  end
end
