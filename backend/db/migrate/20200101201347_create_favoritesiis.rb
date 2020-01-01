class CreateFavoritesiis < ActiveRecord::Migration[6.0]
  def change
    create_table :favoritesiis do |t|
      t.integer :user_id
      t.integer :listing_id
      t.integer :lst_user_id
      t.float :lst_price
      t.string :lst_max_hold
      t.string :integer
      t.string :lst_f_name
      t.string :lst_l_name
      t.string :lst_email
      t.string :lst_address
      t.float :lst_rating
      t.string :lst_pic_link

      t.timestamps
    end
  end
end
