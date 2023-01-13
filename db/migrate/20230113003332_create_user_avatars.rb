class CreateUserAvatars < ActiveRecord::Migration[6.1]
  def change
    create_table :user_avatars do |t|
      t.string :imgUrl
      t.belongs_to :user
      t.timestamps
    end
  end
end
