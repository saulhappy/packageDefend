class Order < ApplicationRecord
    belongs_to :user
    belongs_to :listing

    validates :listing_id, presence: true
    validates :user_id, presence: true
end