class UserAvatarSerializer < ActiveModel::Serializer
  attributes :id, :imgUrl, :user_id
end
