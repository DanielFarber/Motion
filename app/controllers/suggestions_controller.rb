class SuggestionsController < ApplicationController

	def index

		output = rdio_get(params[:query])

		render :json => output
	end

	def token
		Rdio.init(ENV["rdio_cons_key"], ENV["rdio_cons_secret"])
		resp = Rdio.api.getPlaybackToken("http://127.0.0.1")
		binding.pry
	end

end

def rdio_get(query)
	Rdio.init(ENV["rdio_cons_key"], ENV["rdio_cons_secret"])
	resp = Rdio.api.search(query, "Track")
	all = []
	resp.each do |track|
		all << {title: track.name, artist: track.album_artist_name, rdio_id: track.key}
	end
	return all
end


