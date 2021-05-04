import Joi from '@hapi/joi';

export const submissionsBySubjectSchema = Joi.object({
	subject_name: Joi.any(),
	min_year: Joi.number(),
	max_year: Joi.number()
});
