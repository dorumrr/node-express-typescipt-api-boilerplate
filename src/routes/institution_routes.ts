import express from 'express';

import {
	createInstitution,
	updateInstitution,
	deleteInstitution,
	getInstitution
} from '../controllers/institution_controller';

const router = express.Router();

router.post('/', createInstitution);
router.patch('/', updateInstitution);
router.delete('/:id', deleteInstitution);
router.get('/', getInstitution);

export = router;
