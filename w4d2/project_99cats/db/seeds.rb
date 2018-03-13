# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

1000.times { Cat.create(birth_date: Faker::Date.backward(10000),
color: Faker::Color.color_name,
name: Faker::FamilyGuy.character,
sex: ["M", "F"].sample(1).first,
description: Faker::FamilyGuy.quote)}


rent1 = CatRentalRequest.create(cat_id: 2003, start_date: "2018-01-01", end_date: "2018-02-01")
rent2 = CatRentalRequest.create(cat_id: 2004, start_date: "2018-02-02", end_date: "2018-02-18")
rent3 = CatRentalRequest.create(cat_id: 2003, start_date: "2018-01-02", end_date: "2018-01-10")
