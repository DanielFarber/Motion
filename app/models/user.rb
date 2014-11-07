class User < ActiveRecord::Base
	has_secure_password
	has_many :quiztions
	has_many :attendees
	validates :email, :password, presence: true
	validates :email, uniqueness: true
	#Do some more password restrictions, for funsies?

	def attendee_search(agenda_id)
		self.attendees.where(agenda_id: agenda_id)
	end


end
