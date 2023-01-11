User.destroy_all

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N", avatar:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117')

puts "Done Seeding 🌱"