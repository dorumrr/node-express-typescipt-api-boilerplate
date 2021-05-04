export interface ISubmissionSubject {
	name: string;
	academic_papers: number;
	students_total: number;
	student_rating: number;
}

export interface ISubmission {
	_id?: string;
	id?: string;
	institution_id: string;
	year: number;
	students_total: number;
	undergraduates_total: number;
	postgraduates_total: number;
	staff_total: number;
	academic_papers: number;
	institution_income: number;
	subjects: ISubmissionSubject[]
}
