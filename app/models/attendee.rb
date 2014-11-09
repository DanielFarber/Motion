class Attendee < ActiveRecord::Base
	belongs_to :user

	def self.update_attendance
		self.where(present: true).where(updated_at: Time.new.at_beginning_of_year..(Time.now - 5)).each do |attendee|
			attendee.update(present: false)
		end
	end

end
