# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create({email: "farber.daniel.m@gmail.com", password: "password", username: "dfarber"})
user2 = User.create({email: "johnnycash@arkansas.com", password: "password", username: "johnnyC"})
user3 = User.create({email: "georgestrait@texas.com", password: "password", username: "georgestrait"})
user4 = User.create({email: "tobykeith@oklahoma.com", password: "password", username: "tobykeith"})
user5 = User.create({email: "randytravis@northcarolina.com", password: "password", username: "randytravis"})

agenda1 = Agenda.create({position: 1, user_id: user3.id, name: "Bob's Going Away Party!!!!!"})
agenda2 = Agenda.create({position: 1, user_id: user1.id, name: "Honky Tonk Pickup Truck"})
agenda3 = Agenda.create({position: 1, user_id: user5.id, name: "Downtown Grill"})
agenda4 = Agenda.create({position: 1, user_id: user4.id, name: "The Houndstooth 33rd St"})
agenda5 = Agenda.create({position: 1, user_id: user2.id, name: "Overlong Triangle"})

