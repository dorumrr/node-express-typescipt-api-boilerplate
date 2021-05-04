import * as submissionDao from '../db/submission_dao';
import { ISubmission } from '../interfaces/submission';
import { ISubmissionSubject } from '../interfaces/submission';

export const createSubmission = async (data: ISubmission): Promise<any> => {
	try {
		return submissionDao.createSubmission(data);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};

export const updateSubmission = async (data: ISubmission): Promise<any> => {
	try {
		await submissionDao.updateSubmission(data);
		return getSubmissionByObjectId(data._id);
	} catch (err) {
		console.error(err)
		throw Error('Something went wrong!')
 }
};

export const deleteSubmission = async (id: string): Promise<any> => {
	try {	
		return submissionDao.deleteSubmission(id);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};

export const getSubmission = async (query: any): Promise<any> => {
	try {	
		return submissionDao.getSubmission(query);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};

export const getSubmissionByObjectId = async (_id: string): Promise<any> => {
	return submissionDao.getSubmissionByObjectId(_id);
};
