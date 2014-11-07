class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
    	t.integer :user_id
    	t.string :username
    	t.integer :agenda_id
    	t.boolean :present

      t.timestamps
    end
  end
end
