User.destroy_all

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N", profile_img:'https://..org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117')

puts "Seeding Avatars 👤"
Avatar.create(name: "Myflix-1", imgUrl:'../../public/myflix-1.jpg')
Avatar.create(name: "Myflix-2", imgUrl:'../../public/myflix-2.jpg')
Avatar.create(name: "Myflix-3", imgUrl:'../../public/myflix-3.jpg')
Avatar.create(name: "Myflix-4", imgUrl:'../../public/myflix-4.jpg')
Avatar.create(name: "Myflix-5", imgUrl:'../../public/myflix-5.jpg')
Avatar.create(name: "Myflix-6", imgUrl:'../../public/myflix-6.jpg')

puts "Done Seeding 🌱"