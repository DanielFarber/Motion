class CreateSelections < ActiveRecord::Migration
  def change
    create_table :selections do |t|
    	t.integer :agenda_id
    	t.integer :position
      t.string :rdio_id
      t.string :info

      t.timestamps
    end
  end
end
