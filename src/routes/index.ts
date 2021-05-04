import express from 'express';
import institutionRoutes from './institution_routes';
import submissionRoutes from './submission_routes';
import reportRoutes from './report_routes';
const router = express.Router();

// /api routes
router.use('/institution', institutionRoutes);
router.use('/submission', submissionRoutes);
router.use('/report', reportRoutes);

export = router;
