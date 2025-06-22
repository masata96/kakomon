class User < ApplicationRecord
  has_secure_password
  has_many :uploaded_exams, class_name: 'Exam', foreign_key: 'uploader_id', inverse_of: :uploader
end
