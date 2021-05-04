import * as submissionDao from '../db/submission_dao';
import * as institutionDao from '../db/institution_dao';
import { ISubmission } from '../interfaces/submission';

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

	let result: any;
	try {	
		const submissionsP = submissionDao.getSubmission(query);
		const institutionsP = institutionDao.getInstitution();
		result = await Promise.all([submissionsP, institutionsP]);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}

	const submissions = result[0].map((x: any) => ({
		...x._doc,
		institution_details: result[1].find((o: any) => o.id === x.institution_id)
	}));
	return submissions;
};

export const getSubmissionByObjectId = async (_id: string): Promise<any> => {
	return submissionDao.getSubmissionByObjectId(_id);
};
