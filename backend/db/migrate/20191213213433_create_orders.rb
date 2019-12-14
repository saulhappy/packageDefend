class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :listing_id
      t.integer :user_id
      t.string :sender
      t.string :status
      t.string :name_on_pack
      t.date :eta
      t.date :meeting
      t.float :rating

      t.timestamps
    end
  end
end
