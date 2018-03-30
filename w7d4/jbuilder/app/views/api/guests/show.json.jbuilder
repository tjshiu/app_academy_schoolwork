json.partial! 'api/guests/guests', guest: @guest

json.gifts @guest.gifts.pluck(:id)
