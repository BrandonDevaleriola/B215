class CreateTools < ActiveRecord::Migration[7.0]
  def change
    create_table :tools do |t|
      t.integer :user_id
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
