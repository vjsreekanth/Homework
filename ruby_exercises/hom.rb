def filter(arr, &cb)
    unless arr.is_a? Array
        raise ArgumentError.new("Must be an array")
    end
    result =[]
    arr.each {|el| result.push(el) if yield(el) }
     p result
end

  
#     arr = [1,2,3,4,5,6];
#     # arr = 1
#   even = ->(n) { n % 2 == 0 }
#   odd = proc { |n| n % 2 != 0}

  

# filter(arr, &even)  # => [2, 4, 6]
# filter(arr, &odd) # => [1, 3, 5]
# filter(arr) { |n| n > 4 } # => [5, 6]
