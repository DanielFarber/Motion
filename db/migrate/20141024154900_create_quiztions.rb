class CreateQuiztions < ActiveRecord::Migration
  def change
    create_table :quiztions do |t|
    	t.integer :user_id
    	t.string :question

      t.timestamps
    end
  end
end
