class ChangePostsOptions < ActiveRecord::Migration[5.1]
  def change
    change_column :posts, :url, :string, null: true
    change_column :posts, :content, :string, null: true
  end
end
