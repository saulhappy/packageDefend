class FavoriteSerializer < ActiveModel::Serializer

  attributes :id, :listing
  belongs_to :user 
  belongs_to :listing

  # def listing
  #   ActiveModel::SerializableResource.new(object.listing,  each_serializer: ListingSerializer)
  # end

end

