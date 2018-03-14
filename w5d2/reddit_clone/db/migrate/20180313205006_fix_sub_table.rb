class FixSubTable < ActiveRecord::Migration[5.1]
  def change
    change_column(:subs, :title, :string, null: false)
    change_column(:subs, :description, :string, null: false)
    change_column(:subs, :moderator_id, :integer, null: false)

    add_index :subs, :moderator_id
  end
end
