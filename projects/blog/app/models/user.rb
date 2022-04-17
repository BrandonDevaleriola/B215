class User < ApplicationRecord
	has_many :tools
	has_many :notes
	validates :firstName, length: { maximum: 40 }, presence: true
	validates :middleName, length: { maximum: 40 }, presence: true
	validates :lastName, length: { maximum: 40 }, presence: true
	validates :phone, length: { maximum: 40 }, presence: true
	validates :email, length: { maximum: 40 }, presence: true
end
