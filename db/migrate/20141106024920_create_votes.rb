class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :selection_id
      t.integer :user_id
      t.boolean :up
      t.boolean :down
      t.boolean :create

      t.timestamps
    end
  end
end
