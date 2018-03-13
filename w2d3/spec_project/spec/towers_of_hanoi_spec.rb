require "rspec"
require "towers_of_hanoi"

RSpec.describe Towers_of_Hanoi do
  subject(:tower) {Towers_of_Hanoi.new}
  describe "#move" do
    before(:each) do
      tower.move(0, 1)
    end

    it "Moves the smaller chip on top of the bigger chip or blank chip" do
      expect(tower.piles).to eq([[3,2],[1],[]])
    end


    it "Raises an error when moving a large chip on a small chip" do
      expect { tower.move(0, 1) }.to raise_error("Cannot place there")
    end


  end



  describe "#won" do
    it "is wone when all the disks are moved" do
      towers = Towers_of_Hanoi.new([[],[],[3, 2, 1]])
      expect(towers).to be_won
    end
  end



end
