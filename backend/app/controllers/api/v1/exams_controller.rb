class Api::V1::ExamsController < ApplicationController
  def index
    exams = Exam.includes(:course, :uploader).all
    render json: exams
  end

  def create
    exam = Exam.new(exam_params)
    if exam.save
      render json: exam, status: :created
    else
      render json: { errors: exam.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private

  def exam_params
    params.require(:exam).permit(:title, :year, :file_url, :course_id, :uploader_id)
  end
end
