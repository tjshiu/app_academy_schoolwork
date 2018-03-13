
def first_anagram?(string1, string2)
  perm_string = string1.chars.permutation.to_a.map { |sub_array| sub_array.join('') }
  perm_string.include?(string2)
end
p first_anagram?("elvis","lifves")

def second_anagram?(string1, string2)
  string1.chars.each do |ch|
    string1.delete!(ch)
    string2.delete!(ch)
  end
  string1 == "" && string2 == ""
end

def third_anagram?(string1, string2)
  string1.chars.sort == string2.chars.sort
end

def fourth_anagram?(string1, string2)
  count1 = Hash.new(0)
  count2 = Hash.new(0)

  string1.each_char do |ch|
    count1[ch] += 1
  end

  string2.each_char do |ch|
    count2[ch] += 1
  end

  count1 == count2
end

p third_anagram?("elvis","lifves")
p third_anagram?("elvis","lives")


p fourth_anagram?("elvis","lifves")
p fourth_anagram?("elvis","lives")
