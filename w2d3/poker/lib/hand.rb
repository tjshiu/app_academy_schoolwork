
class Hand
  WINNING_HAND_TYPES = [
    :straight_flush?,
    :royal_flush?,
    :flush?,
    :straight?,
    :four_of_kind?,
    :full_house?,
    :three_of_kind?,
    :two_of_kind?,
    :one_pair
  ]

  def initialize(cards)
    @cards #[card, card, card, card, card]

  end



  def count_pairs
    @count_cards = Hash.new(0)
    @sym = Hash.new(0)
    @cards.each do |card|
      @count_cards[card.value] += 1
      @sym[card.symbol] += 1
    end
  end


  def four_of_kind?
    @count_cards.values.sort == [1,4]
  end

  def three_of_kind?
    @count_cards.values.sort == [1,1,3]
  end

  def full_house?
    @count_cards.values.sort == [2,3]
  end

  def two_of_kind?
    @count_cards.values.sort == [1,2,2]
  end

  def one_pair?
    @count_cards.values.sort == [1,1,1,2]
  end

  def straight?
    sorted_keys = @count_cards.keys.sort
    return false unless sorted_keys.length == 5
    sorted_keys.each_with_index do |value, i|
      break if i == sorted_keys.length - 1
      return false unless value + 1 == sorted_keys[i + 1]
    end
    true
  end

  def flush?
    @sym.size == 1
  end

  def royal_flush?
    flush? && straight? && [1,10, 11, 12, 13] == @count_cards.keys.sort
  end

  def straight_flush?
    flush? && straight? && !royal_flush?
  end

  ["high card", "one pair" "two pair", "three of a kind", "straight", "flush", "full house", "four of a kind",
  "stragiht flush", "royal flush"]


   #player 1
   #player2
   def card_in_hand
     WINNING_HAND_TYPES.each do |type|
       return type if self.send(type)
     end
   end

end
