

class Towers_of_Hanoi
  attr_reader :piles

  def initialize(piles = [[3,2,1], [], []])
    @piles = piles
  end

  def move(p1, p2)
    start = @piles[p1]
    destination = @piles[p2]
    if destination.empty? || destination.last > start.last
      destination << start.pop
    else
      raise "Cannot place there"
    end
  end

  # def play
  #   print "Please enter the piles that you want to start and move to: eg(0, 2) "
  #   p1, p2 = gets.chomp.split(",").map(&:to_i)
  #   begin
  #     move(p1, p2)
  #   rescue
  #     play
  #   end
  # end


  def won?
    @piles[2].length == 3 || @piles[1].length == 3
  end



end
