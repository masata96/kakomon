class ExamSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :file_url
  belongs_to :course
  belongs_to :uploader, serializer: UserSerializer
end