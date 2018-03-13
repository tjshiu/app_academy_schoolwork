require 'project.rb'
require 'rspec'

RSpec.describe Array do
  describe "#my_uniq" do
    it "removes duplicates" do
      arr = [1,2,1,3,3]
      expect(arr.my_uniq).to eq([1,2,3])
    end
  end

  describe "#two_sum" do

    it "finds index pairs for two elements that sums to zero" do
      arr = [-1,0,2,-2,1]
      expect(arr.two_sum).to eq([[0,4],[2,3]])
    end

    it "returns empty arr when no index pairs that sum to zero" do
      arr = [1,2,3,4,5]
      expect(arr.two_sum).to eq([])
    end
  end

  describe "#my_transpose" do
    it "convert between the row-oriented and column-oriented representations" do
    arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
      ]

    transposted = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]]


    # expect(my_transpose(arr)).to eq(transposted)

     expect(arr.my_transpose).to eq(transposted)
    end
  end

  describe "#stock_picker" do
    it "outputs the most profitable pair of days" do
      arr = [5, 3, 6, 7, 8]
      expect(arr.stock_picker).to eq([1, 4])
    end
  end


end
