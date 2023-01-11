class User < ApplicationRecord
  has_secure_password
  has_one :my_list
  has_many :movies, through: :my_list
  validates :username, uniqueness: true
end
