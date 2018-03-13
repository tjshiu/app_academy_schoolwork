class Deck
  VALUES = %w(1 2 3 4 5 6 7 8 9 10 11 12 13).map(&:to_i)
  SYMBOLS = [:heart, :spade, :diamond, :clover]

  attr_reader :deck
  def initialize(deck)
    @deck = []
    generate_cards
  end

  def generate_cards
    SYMBOLS.each do |symbol|
      VALUES.each do |value|
        @deck << Card.new(value, symbol)
      end
    end
  end


end
