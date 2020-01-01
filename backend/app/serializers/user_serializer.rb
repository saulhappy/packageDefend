class UserSerializer < ActiveModel::Serializer
  attributes :id, :f_name, :l_name, :email, :address, :balance, :rating, :pic_link, :lat, :long
  has_many :orders 
  has_many :listings 
  has_many :comments
  has_many :favorites

end
