class UsersController < ApplicationController


	def create
		hash = {email: params[:email], password: params[:password], username: params[:username]}

		user = User.new(hash)
		if user.valid?
			User.create(hash)
			redirect_to ("/?create=true")
		else
			reset_session
			redirect_to ("/?error=true")
		end
	end

	def show
		params[:id] == "self" ? user = User.find(session[:id]) : user = User.find(params[:id])
		render :json => user
	end


end