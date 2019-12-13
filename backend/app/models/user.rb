class User < ApplicationRecord
    has_many :comments 
    has_many :comments, through: :listings
    has_many :orders
    has_many :orders, through: :listings

    has_secure_password
    
    validates :f_name, presence: true
    validates :l_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end