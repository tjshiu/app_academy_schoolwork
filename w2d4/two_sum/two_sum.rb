def two_sum?(arr, target_sum)
  arr.permutation(2).to_a.any? { |sub_array| sub_array.inject(:+) == target_sum }
end

arr = [0, 1, 5, 7]
p two_sum?(arr, 10)

#two_sum time complexicity: 0(n!)
