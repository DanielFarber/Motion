class VotesController < ApplicationController


	def index
		if params[:time]
			time = Time.parse(params[:time]).utc
			votes = Vote.where("created_at > '#{time}'" )
			render :json => votes
		else
			render :json => Agenda.find(params[:id]).votes
		end
	end


	def create
		hash = {user_id: params[:user_id], selection_id: params[:selection_id], up: params[:up], down: params[:down], create: params[:create]}
		vote = Vote.create(hash)
		render :json => vote
	end

end
