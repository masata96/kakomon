class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :uploaded_exams, serializer: ExamSerializer
end