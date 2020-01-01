class FavoritesiiSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :listing_id, :lst_user_id, :lst_price, :lst_max_hold, :integer, :lst_f_name, :lst_l_name, :lst_email, :lst_address, :lst_rating, :lst_pic_link

  belongs_to :user 
  # belongs_to :listing
end
