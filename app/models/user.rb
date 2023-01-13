class User < ApplicationRecord
  has_secure_password
  has_many :my_lists
  has_many :user_avatar
  has_many :avatars, through: :user_avatar
  validates :username, uniqueness: true
end
