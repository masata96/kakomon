class CreateExams < ActiveRecord::Migration[7.2]
  def change
    create_table :exams do |t|
      t.string :title
      t.integer :year
      t.string :file_url
      t.references :course, null: false, foreign_key: true
      t.references :uploader, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
