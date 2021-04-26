# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "supersecret"


Comment.delete_all

Post.delete_all

User.delete_all


super_user = User.create(
  first_name: "sree",
  last_name: "kanth",
  email: "vj@gmail.com",
  password: PASSWORD,
  is_admin: true,
)


10.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD,
  )
end

users = User.all

100.times do
    created_at = Faker::Date.backward(365 * 5)
  
    # Faker is a module. We are accessing classes on the module
    # that will create fake data. No need to require the faker gem at the
    # top of this script because we can access all gems in the Gemfile
    # from anywhere.
    p = Post.create(
      title: Faker::DcComics.title,
      body: Faker::Lorem.sentence(word_count: 50),
      created_at: created_at,
      updated_at: created_at,
    #   # We can use the user instance for the "user" attribute rather than using "user_id"
      user: users.sample,
    )
    if p.valid?
      
      p.comments = rand(0..15).times.map do
        Comment.new(
          body: Faker::GreekPhilosophers.quote,
          user: users.sample,
        )
      end
    end
end


puts Cowsay.say("Generated #{Post.count} posts", :koala)
puts Cowsay.say("Generated #{Comment.count} comments", :stegosaurus)
puts Cowsay.say("Generated #{User.count} users", :ghostbusters)
puts Cowsay.say("Sign in with #{super_user.email} and password: #{PASSWORD}", :cow)