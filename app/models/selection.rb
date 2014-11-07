class Selection < ActiveRecord::Base
	belongs_to :resource
	has_many :votes
end
