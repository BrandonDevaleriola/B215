json.extract! user, :id, :firstName, :middleName, :lastName, :phone, :email, :created_at, :updated_at
json.url user_url(user, format: :json)
