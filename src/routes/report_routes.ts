import express from 'express';

import {
	submissionsBySubject
} from '../controllers/report_controller';

const router = express.Router();

router.get('/submissionsBySubject', submissionsBySubject);

export = router;
