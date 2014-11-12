class SessionsController < ApplicationController

	def index
		if session[:id]
			redirect_to "/agendas"
		else
			message = "You are not logged in." if params[:badlogin]
			message = "Account creation succesful!  Please log in." if params[:create]
			message = "Invalid email or password, or absent username." if params[:error]
			render(:index, {locals: {message: message}})
		end
	end

	def create
		if (user = User.find_by(email: params[:email])) && user.authenticate(params[:password])
			session[:id] = user.id
			redirect_to "/agendas"
		else
			reset_session
			redirect_to "/?error=true"
		end
	end

	def destroy
		reset_session
		redirect_to "/"
	end


end