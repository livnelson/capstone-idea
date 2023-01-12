class User < ApplicationRecord
  has_secure_password
  has_many :my_lists
  has_many :movies, through: :my_lists
  validates :username, uniqueness: true
end
