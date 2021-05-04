import { v4 as uuidv4 } from 'uuid';
import { ISubmission } from "interfaces/submission";
import { SubmissionModel } from "./schemas/submissionSchema";

export const createSubmission = async (data: ISubmission): Promise<any> => {
	return SubmissionModel.create({
		id: uuidv4(), 
		institution_id: data.institution_id,
		year: data.year,
		students_total: data.students_total,
		undergraduates_total: data.undergraduates_total,
		postgraduates_total: data.postgraduates_total,
		staff_total: data.staff_total,
		academic_papers: data.academic_papers,
		institution_income: data.institution_income,
		subjects: data.subjects
	});
}

export const updateSubmission = async (data: ISubmission): Promise<any> => {
	return SubmissionModel.updateOne({ _id: data._id }, data)
};

export const deleteSubmission = async (_id: string): Promise<any> => {
	return SubmissionModel.deleteOne({ _id });
};

export const getSubmission = async (where: any = {}): Promise<any> => {
	return SubmissionModel.find(where);
};

export const getSubmissionByObjectId = async (_id: string): Promise<any> => {
	return SubmissionModel.findOne({ _id });
};
