class Api::V1::CoursesController < ApplicationController
  def index
    courses = Course.all
    render json: courses
  end

  def create
    course = Course.new(course_params)
    if course.save
      render json: course, status: :created
    else
      render json: { errors: course.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private

  def course_params
    params.require(:course).permit(:name)
  end
end
