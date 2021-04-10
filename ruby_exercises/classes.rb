
# library class
class Library
    def initialize
        @books = [] 
    end

    # shelve method
    def shelve(book)
        unless book.is_a? Book
          raise ArgumentError.new("Must be a Book")
        end
        @books.push(book)
        @books = @books.sort{ |a, b| a.title.downcase <=> b.title.downcase }
        self
    end

    # find_by_title method
    def find_by_title (searchTitle)
        
        mySearchTitle = searchTitle.downcase
        
        if(@books.find { |book| (book.title.downcase).include? mySearchTitle  })
            p (@books.find { |book| (book.title.downcase).include? mySearchTitle  })
        else
            puts  "No books found with the given title"
        end

    end



    # list method
    def list
        @books.each { |book| p book }

    end




end





# book class
class Book
    attr_accessor :title, :authors, :edition
    def initialize title, authors, edition
        @title = title
        @authors = authors
        @edition = edition
    end

end


# eloquent_js = Book.new("Eloquent Javascript", ["Marijn Haverbeke"], 3)
# speaking_js = Book.new("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1)
# the_rust_lang = Book.new("The Rust Programming Language",["Steve Klabnik", "Carol Nichols"],2)

# lib = Library.new
# lib.shelve(speaking_js).shelve(the_rust_lang).shelve(eloquent_js)


# lib.find_by_title("eloquent")
# lib.find_by_title("sree")

# lib.list()