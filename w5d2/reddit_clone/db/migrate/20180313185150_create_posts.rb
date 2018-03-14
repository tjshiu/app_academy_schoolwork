class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.string :content, null: false
      t.integer :sub_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :sub_id
  end
end
