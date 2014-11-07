class CreateAgendas < ActiveRecord::Migration
  def change
    create_table :agendas do |t|
    	t.string :user_id
    	t.integer :position
    	t.string :name

      t.timestamps
    end
  end
end
