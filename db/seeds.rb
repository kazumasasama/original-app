# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'ユーザー'
User.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

puts '性別'
Gender.create!(name: 'Not known', g_id: 0 )
Gender.create!(name: 'Male', g_id: 1 )
Gender.create!(name: 'Female', g_id: 2 )
Gender.create!(name: 'Self-described', g_id: 3 )
Gender.create!(name: 'Not applicable', g_id: 4 )