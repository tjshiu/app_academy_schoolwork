# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#

class CatRentalRequest < ApplicationRecord
  belongs_to :cat,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: :Cat

  def self.overlapping_requests
    CatRentalRequest
      .where.not(id: self.id)
      .where(cat_id: self.cat_id)
      .where('(start_date > )')
  end
end
