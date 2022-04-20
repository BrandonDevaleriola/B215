# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create a main admin sample user.
User.create!(
	firstName: "King",
	middleName: "m",
	lastName: "Brandon",
	phone: 000000,
	email: "brandondeval@gmail.com",
	password: "redred",
	password_confirmation: "redred",
	admin: true)
# Generate a bunch of additional users.
99.times do |n|
	firstName = "Subject#{n+1}"
	middleName = "m"
	lastName = "l"
	phone = 0
	email = "example-#{n+1}@railstutorial.org"
	password = "password"

	User.create!(firstName: firstName,
	middleName: middleName,
	lastName: lastName,
	phone: phone,
	email: email,
	password: password,
	password_confirmation: password)
end