class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.integer :petfinder_id
      t.string :url
    end
  end
end
