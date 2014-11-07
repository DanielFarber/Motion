class AttendeesController < ApplicationController

	def index
		render :json => Attendee.where(agenda_id: params[:id])
	end

	def create
		user = User.find(params[:user_id])
		if user.attendee_search(params[:agenda_id]).length != 0
			attendee = user.attendee_search(params[:agenda_id])[0]
			attendee.update(present: true)
		else
			hash = {user_id: user.id, agenda_id: params[:agenda_id], username: user.username, present: true}
			attendee = Attendee.create(hash)
		end
		render :json => Attendee.where(agenda_id: params[:agenda_id])

	end

	def destroy
		attendees = Attendee.where( {user_id: params[:id]})
		attendees.each { |attendee| attendee.update(present: false) }
		render :json => attendees
	end

end
