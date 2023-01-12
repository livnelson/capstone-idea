class Movie < ApplicationRecord
  has_many :my_lists
  has_many :users, through: :my_lists
end
