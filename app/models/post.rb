class Post < ApplicationRecord

  belongs_to :user, optional: true
  has_many :comments, dependent: :destroy

    validates(:title, presence: true, uniqueness: true)

 
  validates(
    :body, 
    presence: { message: "must include a body" },
    length: { minimum: 50 },
  )


  private

  

end
