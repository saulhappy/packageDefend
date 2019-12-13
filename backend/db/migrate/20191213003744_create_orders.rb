class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :listing_id
      t.string :cust_user_id
      t.string :defender_user_id
      t.string :sender
      t.string :status
      t.string :name_on_pack
      t.date :meeting
      t.date :eta
      t.float :price
      t.float :cust_rating
      t.float :defd_rating

      t.timestamps
    end
  end
end
