def my_min(list)
  list.each_with_index do |num1, idx1|
    smallest = true
    list.each_with_index do |num2,idx2|
      next if idx1 == idx2
      smallest = false if num2 < num1
    end
    return num1 if smallest
  end
end
# p my_min([0,3,5,4,-5,10])
def my_min2(list)
  smallest = list[0]
  list.each do |num|
    if num < smallest
      smallest = num
    end
  end
  smallest
end
# p my_min2([0,3,5,4,-5,10])

def largest_contiguous_subsum(list)
  combos = []
  list.each_with_index do |num1, i1|
    sum = num1
    combos << sum
    list.each_with_index do |num2, i2|
      next if i1 >= i2
      sum += num2
      combos << sum
    end
  end

  combos.max
end
p largest_contiguous_subsum([5, 3, -7])
p largest_contiguous_subsum([-5, -1, -3])
p largest_contiguous_subsum([2, 3, -6, 7, -6, 7])


def largest_contiguous_subsum2(list)
  longest = list.first
  now = 0
  return list.max if list.all? { |el| el < 0 }

  list.each do |num|
    now = 0 if now < 0
    now += num
    if longest < now
      longest = now
    end
  end

  longest
end

p largest_contiguous_subsum2([5, 3, -7])
p largest_contiguous_subsum2([-5, -1, -3])
p largest_contiguous_subsum2([2, 3, -6, 7, -6, 7])
