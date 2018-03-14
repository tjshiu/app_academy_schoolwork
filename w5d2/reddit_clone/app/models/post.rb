class Post < ApplicationRecord
  validates :title, :sub_id, :author_id, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  has_many :post_subs, dependent: :destroy, inverse_of: :post

  has_many :subs,
  through: :post_subs,
  source: :subs
end
