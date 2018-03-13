class Array
  def my_uniq
    uniq = []
    self.each do |el|
      uniq << el unless uniq.include?(el)
    end

    uniq
  end

  def two_sum
    sum_idx = []

    self.each_with_index do |el, idx|
      (idx + 1...length).each do |idx2|
        sum_idx << [idx, idx2] if el + self[idx2] == 0
      end
    end

    sum_idx
  end

  def my_transpose#(arr)
    new_arr = []
    #arr.each_with_index do |row, idx|
    self.each_with_index do |row, idx|
      new_row = []
      row.each_index do |idx2|
        new_row << self[idx2][idx]
      end
      new_arr << new_row
    end

    new_arr
  end

  def stock_picker
    max = self[1] - self[0]
    idx = []
    self.each_with_index do |price,i|
      (i+1...length).each do |i2|
        price2 = self[i2]
        if (price2 - price) > max
          max = (price2 - price)
          idx = [i,i2]
        end
      end
    end
    idx
    end

end
