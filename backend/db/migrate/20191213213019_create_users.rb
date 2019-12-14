class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :f_name
      t.string :l_name
      t.string :email
      t.string :address
      t.integer :balance
      t.float :rating
      t.string :pic_link
      t.string :password

      t.timestamps
    end
  end
end
