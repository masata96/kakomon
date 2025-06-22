class Course < ApplicationRecord
  has_many :exams, inverse_of: :course
end
