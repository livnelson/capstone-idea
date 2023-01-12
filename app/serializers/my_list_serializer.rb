class MyListSerializer < ActiveModel::Serializer
  attributes :id, :name, :poster_path, :user_id, :movie_id
end
