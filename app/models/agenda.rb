class Agenda < ActiveRecord::Base
	belongs_to :user
	has_many :attendees
	has_many :selections
	has_many :votes, through: :selections

end
