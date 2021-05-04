import { Request, Response } from 'express';
import { createInstitutionSchema, updateInstitutionSchema, getInstitutionSchema } from '../validation/institutionSchema';
import { apiResponse } from '../utils/api_response';
import * as institutionService from '../services/institution_service';

export const createInstitution = async (req: Request, res: Response): Promise<object> => {

	const data: any = req.body || {};

	try {
		await createInstitutionSchema.validateAsync(data);
	} catch (err) {
		const errMsg = `Invalid request: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		const createInstitutionOperation = await institutionService.createInstitution(data);
		return res.status(200).json(apiResponse({
			success: true,
			data: createInstitutionOperation
		}));
	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};

export const updateInstitution = async (req: Request, res: Response): Promise<object> => {

	const data: any = (req.body);

	try {
		await updateInstitutionSchema.validateAsync(data);
	} catch (err) {
		const errMsg = `Invalid request: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		await institutionService.getInstitutionByObjectId(data._id);
	} catch (err) {
		const errMsg = `Invalid id: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		const updateInstitutionOperation: any = await institutionService.updateInstitution(data);
		return res.status(200).json(apiResponse({
			success: true,
			data: updateInstitutionOperation
		}));
	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};

export const deleteInstitution = async (req: Request, res: Response): Promise<object> => {

	const id = req.params['id'];

	try {
		await institutionService.getInstitutionByObjectId(id);
	} catch (err) {
		const errMsg = `Invalid id: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		await institutionService.deleteInstitution(id);
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

export const getInstitution = async (req: Request, res: Response): Promise<object> => {

	let query: any = req.query || {};

	try {
		await getInstitutionSchema.validateAsync(query);
	} catch (err) {
		const errMsg = `Invalid query: ${err.message}`;
		console.error(errMsg, err);
		return res.status(400).json(apiResponse({
			success: false,
			messages: [errMsg]
		}));
	}

	try {
		const getInstitutionOperation: any = await institutionService.getInstitution(query);
		return res.status(200).json(apiResponse({
			success: true,
			data: getInstitutionOperation
		}));

	} catch (err) {
		console.error(err.message, { err, req });
		return res.status(500).json(apiResponse({
			success: false,
			messages: [err.message]
		}));
	}
};

