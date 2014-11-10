class AgendasController < ApplicationController

	def show
		if session[:id]
			user = User.find(session[:id])
			render(:index, { locals: {user: user} })
		else
			redirect_to "/?badlogin=true"
		end
	end

	def show_selections
		user = User.find(session[:id])
		agenda = Agenda.find(params[:id])
		attendee = user.attendees.where(agenda_id: agenda.id)[0]
		attendee.update(updated_at: Time.now, present: true)
		Attendee.update_attendance
		selections = agenda.selections.order(:position)
		output = {results: selections, position: agenda.position}
		render :json => output
	end


	def create
		hash = {name: params[:name], user_id: params[:user_id], position: 1}
		agenda = Agenda.create(hash)
		render :json => agenda
	end

	def update
		agenda = Agenda.find(params[:id])
		agenda.position = params[:position]
		agenda.save
		render :json => agenda

	end

end
