class ListingSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user 
  has_many :favorites
  has_many :users
end
