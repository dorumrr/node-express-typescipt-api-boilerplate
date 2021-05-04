import * as institutionDao from '../db/institution_dao';
import { IInstitution } from '../interfaces/institution';

export const createInstitution = async (data: IInstitution): Promise<any> => {
	try {
		return institutionDao.createInstitution(data);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};

export const updateInstitution = async (data: IInstitution): Promise<any> => {
	try {
		await institutionDao.updateInstitution(data);
		return getInstitutionByObjectId(data._id);
	} catch (err) {
		console.error(err)
		throw Error('Something went wrong!')
 }
};

export const deleteInstitution = async (id: string): Promise<any> => {
	try {	
		return institutionDao.deleteInstitution(id);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};

export const getInstitution = async (query: any): Promise<any> => {
	try {	
		return institutionDao.getInstitution(query);
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
};

export const getInstitutionByObjectId = async (_id: string): Promise<any> => {
	return institutionDao.getInstitutionByObjectId(_id);
};
