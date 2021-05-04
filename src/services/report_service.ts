import * as submissionDao from '../db/submission_dao';
import * as institutionDao from '../db/institution_dao';
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

	let result: any;
	try {
		const submissionsP = submissionDao.getSubmission(where);
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
