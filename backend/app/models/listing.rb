class Listing < ApplicationRecord
    belongs_to :user 
    has_many :orders
    has_many :favorites

end