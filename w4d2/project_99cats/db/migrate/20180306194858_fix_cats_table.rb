class FixCatsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :cats, :birth_date, :date, null: false
    add_column :cats, :color, :string, null: false
    add_column :cats, :name, :string, null: false
    add_column :cats, :sex, :string, null: false
    add_column :cats, :description, :text, null: false
  end
end
