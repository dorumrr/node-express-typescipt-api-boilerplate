import { Request, Response } from 'express';
import { createSubmissionSchema, updateSubmissionSchema, getSubmissionSchema } from '../validation/submissionSchema';
import { apiResponse } from '../utils/api_response';
import * as submissionService from '../services/submission_service';

export const createSubmission = async (req: Request, res: Response): Promise<object> => {

	const data: any = req.body || {};

	try {
		await createSubmissionSchema.validateAsync(data);
	} catch (err) {
		const errMsg = `Invalid request: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		const createSubmissionOperation = await submissionService.createSubmission(data);
		return res.status(200).json(apiResponse({
			success: true,
			data: createSubmissionOperation
		}));
	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};

export const updateSubmission = async (req: Request, res: Response): Promise<object> => {

	const data: any = (req.body);

	try {
		await updateSubmissionSchema.validateAsync(data);
	} catch (err) {
		const errMsg = `Invalid request: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		await submissionService.getSubmissionByObjectId(data._id);
	} catch (err) {
		const errMsg = `Invalid id: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		const updateSubmissionOperation: any = await submissionService.updateSubmission(data);
		return res.status(200).json(apiResponse({
			success: true,
			data: updateSubmissionOperation
		}));
	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};

export const deleteSubmission = async (req: Request, res: Response): Promise<object> => {

	const id = req.params['id'];

	try {
		await submissionService.getSubmissionByObjectId(id);
	} catch (err) {
		const errMsg = `Invalid id: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		await submissionService.deleteSubmission(id);
		return res.status(200).json(apiResponse({
			success: true
		}));
	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};

export const getSubmission = async (req: Request, res: Response): Promise<object> => {

	let query: any = req.query || {};

	try {
		await getSubmissionSchema.validateAsync(query);
	} catch (err) {
		const errMsg = `Invalid query: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		const getSubmissionOperation: any = await submissionService.getSubmission(query);
		return res.status(200).json(apiResponse({
			success: true,
			data: getSubmissionOperation
		}));

	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};
