import { Request, Response } from 'express';
import { submissionsBySubjectSchema } from '../validation/reportSchema';
import { apiResponse } from '../utils/api_response';
import * as reportService from '../services/report_service';


export const submissionsBySubject = async (req: Request, res: Response): Promise<object> => {

	let query: any = req.query || {};
	query.subject_name = query.subject_name
		.split(',')
		.map((name: any) => ({name}));
	
	try {
		await submissionsBySubjectSchema.validateAsync(query);
	} catch (err) {
		const errMsg = `Invalid query: ${err.message}`;
		const acceptQuery = submissionsBySubjectSchema.$_terms.keys.map((x: any) => x.key + ': ' + x.schema.type).join(', ');
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg, `Query -> ${acceptQuery}`]
		}));
	}

	try {
		const submissionsBySubjectOperation: any = await reportService.submissionsBySubject(query);
		return res.status(200).json(apiResponse({
			success: true,
			data: submissionsBySubjectOperation
		}));

	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};
