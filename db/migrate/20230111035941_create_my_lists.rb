class CreateMyLists < ActiveRecord::Migration[6.1]
  def change
    create_table :my_lists do |t|
      t.string :name
      t.string :poster_path
      t.belongs_to :user
      t.belongs_to :movie
      t.timestamps
    end
  end
end
