class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false, unique: true 
      t.string :body, null: false
      t.boolean :done, default: false
      t.timestamps
    end

    add_index :todos, :title, unique: true
  end
end
