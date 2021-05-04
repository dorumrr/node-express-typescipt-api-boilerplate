import Joi from '@hapi/joi';

export const createSubmissionSchema = Joi.object({
	institution_id: Joi.string().required(),
	year: Joi.number().required(),
	students_total: Joi.number().required(),
	undergraduates_total: Joi.number().required(),
	postgraduates_total: Joi.number().required(),
	staff_total: Joi.number().required(),
	academic_papers: Joi.number().required(),
	institution_income: Joi.number().required(),
	subjects: Joi.array().items({
		name: Joi.string().required(),
		academic_papers: Joi.number().required(),
		students_total: Joi.number().required(),
		student_rating: Joi.number().required()
	})
});

export const updateSubmissionSchema = Joi.object({
	_id: Joi.string().required(),
	id: Joi.string(),
	institution_id: Joi.string(),
	year: Joi.number(),
	students_total: Joi.number(),
	undergraduates_total: Joi.number(),
	postgraduates_total: Joi.number(),
	staff_total: Joi.number(),
	academic_papers: Joi.number(),
	institution_income: Joi.number(),
	subjects: Joi.array().items({
		name: Joi.string(),
		academic_papers: Joi.number(),
		students_total: Joi.number(),
		student_rating: Joi.number()
	})
});

export const getSubmissionSchema = Joi.object({
	_id: Joi.string(),
	id: Joi.string(),
	institution_id: Joi.string(),
	year: Joi.number(),
	students_total: Joi.number(),
	undergraduates_total: Joi.number(),
	postgraduates_total: Joi.number(),
	staff_total: Joi.number(),
	academic_papers: Joi.number(),
	institution_income: Joi.number(),
	subjects: Joi.array().items({
		name: Joi.string(),
		academic_papers: Joi.number(),
		students_total: Joi.number(),
		student_rating: Joi.number()
	})
});
