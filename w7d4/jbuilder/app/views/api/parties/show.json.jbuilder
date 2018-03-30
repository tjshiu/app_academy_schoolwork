json.extract! @party, :name

json.guests @party.guests do |guest|
  json.extract! guest, :name
  json.gifts guest.gifts do |gift|
    json.extract! gift, :title, :description
  end
end

# json.guests @party.guests do |guest|
#   json.extract! guest, :name
#   json.gifts guest.gifts.pluck(:title, :description)
# end

# json.guests do
#   @party.guests.each do |guest|
#     json.set! guest.id do
#       json.extract! guest, :name
#     end
#   end
# end
