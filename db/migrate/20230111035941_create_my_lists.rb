class CreateMyLists < ActiveRecord::Migration[6.1]
  def change
    create_table :my_lists do |t|
      t.string :title
      t.string :poster_path
      t.belongs_to :movie
      t.timestamps
    end
  end
end
