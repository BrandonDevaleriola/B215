class User < ApplicationRecord
	before_save { self.email = email.downcase }
	has_many :tools
	has_many :notes
	validates :firstName, length: { maximum: 40 }, presence: true
	validates :middleName, length: { maximum: 40 }, presence: true
	validates :lastName, length: { maximum: 40 }, presence: true
	validates :phone, length: { maximum: 40 }, presence: true
	validates :email, presence: true, length: { maximum: 40 }, uniqueness: true
	has_secure_password
end
