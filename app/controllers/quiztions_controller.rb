class QuiztionsController < ApplicationController

	def create
		user = User.find(params[:user_id])
		resp = HTTParty.get("http://www.jservice.io/api/random")
		if user.quiztions.where( {question: resp[0]["question"]} ) == []
			quiztion = Quiztion.create( {user_id: user.id, question: resp[0]["question"]})
			# quiztion[:answer] = resp[0][:question]
			render :json => {quiztion: quiztion, answer: resp[0]["answer"], category: resp[0]["category"], original_event: params[:original_event]}
		else
			redirect_to ("/quiztions")
		end

	end

	def test
		render(:test)
	end

end
