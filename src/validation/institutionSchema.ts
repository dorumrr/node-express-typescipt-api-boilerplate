import Joi from '@hapi/joi';

export const createInstitutionSchema = Joi.object({
	name: Joi.string().required(),
	address: Joi.string().required(),
	country: Joi.string().required(),
	region: Joi.string().required()
});

export const updateInstitutionSchema = Joi.object({
	_id: Joi.string().required(),
	id: Joi.string().required(),
	name: Joi.string(),
	address: Joi.string(),
	country: Joi.string(),
	region: Joi.string()
});

export const getInstitutionSchema = Joi.object({
	_id: Joi.string(),
	id: Joi.string(),
	name: Joi.string(),
	address: Joi.string(),
	country: Joi.string(),
	region: Joi.string(),
});

