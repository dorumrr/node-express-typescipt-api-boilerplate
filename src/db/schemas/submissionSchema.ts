import mongoose from 'mongoose';
const { Schema } = mongoose;

const submissionSchema = new Schema({
  id: String,
  institution_id: String,
  year: Number,
  students_total: Number,
  undergraduates_total: Number,
  postgraduates_total: Number,
  staff_total: Number,
  academic_papers: Number,
  institution_income: Number,
  subjects: [{
    name: String,
    academic_papers: Number,
    students_total: Number,
    student_rating: Number
  }]
});

export const SubmissionModel = mongoose.model('submissions', submissionSchema);
