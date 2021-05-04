import express from 'express';

import {
	createSubmission,
	updateSubmission,
	deleteSubmission,
	getSubmission
} from '../controllers/submission_controller';

const router = express.Router();

router.post('/', createSubmission);
router.patch('/', updateSubmission);
router.delete('/:id', deleteSubmission);
router.get('/', getSubmission);

export = router;
