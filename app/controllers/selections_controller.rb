class SelectionsController < ApplicationController

	# def show
	# 	selections = Selection.where(agenda_id: params[:id])
	# 	render :json => selections
	# end

	def create
		selections = Selection.where(agenda_id: params[:agenda_id]).order(:position)
		if selections.length == 0
			hash = {position: 1, agenda_id: params[:agenda_id], rdio_id: params[:rdio_id], info: "#{params[:title]} by #{params[:artist]}"}
			selection = Selection.create(hash)
			render :json => selection
		else
			position = selections.last.position + 1
			hash = {position: position, agenda_id: params[:agenda_id], rdio_id: params[:rdio_id], info: "#{params[:title]} by #{params[:artist]}"}
			selection = Selection.create(hash)
			render :json => selection
		end

	end

	def update
		output = {}
		["one", "two"].each do |obj|
			selection = Selection.find(params[obj][:id])
			selection.update( {position: params[obj][:position]})
			output[obj] = selection
		end
		render :json => output

	end

end