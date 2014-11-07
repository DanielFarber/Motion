# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def create_info_string(resource)
	output = "<span class='selection_title'>#{resource.title}</span>"
	output += " <span class='selection_artist'>by #{resource.artist}"
	output += "  <span class='vote_up'>↑</span><span class='vote_down'>↓</span>"
end

user1 = User.create({email: "yo@mama.com", password: "password", username: "yourmama"})
user2 = User.create({email: "fiction@al.com", password: "password", username: "fictionAl"})
user3 = User.create({email: "george@strait.com", password: "password", username: "georgestrait"})
user4 = User.create({email: "toby@keith.com", password: "password", username: "tobykeith"})
user5 = User.create({email: "randy@travis.com", password: "password", username: "randytravis"})

agenda1 = Agenda.create({position: 1, user_id: user3.id, name: "Taco Party!!!!!"})
agenda2 = Agenda.create({position: 1, user_id: user1.id, name: "Honky Tonk Pickup Truck"})
agenda3 = Agenda.create({position: 1, user_id: user5.id, name: "Fley fley fley"})
agenda4 = Agenda.create({position: 1, user_id: user4.id, name: "The Houndstooth 33rd St"})
agenda5 = Agenda.create({position: 1, user_id: user2.id, name: "Overlong Triangle"})

