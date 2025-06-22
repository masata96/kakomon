class Exam < ApplicationRecord
  belongs_to :course
  belongs_to :uploader, class_name: 'User'
end
