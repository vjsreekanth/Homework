# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Post.delete_all

100.times do
    created_at = Faker::Date.backward(365 * 5)
  
    # Faker is a module. We are accessing classes on the module
    # that will create fake data. No need to require the faker gem at the
    # top of this script because we can access all gems in the Gemfile
    # from anywhere.
    Post.create(
      title: Faker::Hacker.say_something_smart,
      body: Faker::ChuckNorris.fact,
      created_at: created_at,
      updated_at: created_at,
    #   # We can use the user instance for the "user" attribute rather than using "user_id"
    #   user: users.sample,
    )
end
puts Cowsay.say("Generated #{Post.count} posts", :koala)