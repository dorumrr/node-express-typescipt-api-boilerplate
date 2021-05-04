import * as submissionDao from '../db/submission_dao';
import { ISubmissionsBySubject } from '../interfaces/report';

export const submissionsBySubject = async (query: ISubmissionsBySubject): Promise<any> => {

	let where: any = {
		subjects: {
			$elemMatch: {
				$or: query.subject_name
			}
		}	
	}
	
	if (query.min_year || query.max_year) {
		where.year = {
			$gte: query.min_year || 0,
			$lte: query.max_year || new Date().getFullYear()
		}
	}
	
	try {
		return submissionDao.getSubmission(where)
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};
