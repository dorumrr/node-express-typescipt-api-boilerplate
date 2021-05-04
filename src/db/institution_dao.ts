import { v4 as uuidv4 } from 'uuid';
import { IInstitution } from "interfaces/institution";
import { InstitutionModel } from "./schemas/institutionSchema";

export const createInstitution = async (data: IInstitution): Promise<any> => {
	return InstitutionModel.create({
		id: uuidv4(),
		name: data.name,
		address: data.address,
		country: data.country,
		region: data.region,
	});
};

export const updateInstitution = async (data: IInstitution): Promise<any> => {
	return InstitutionModel.updateOne({ _id: data._id }, data)
};

export const deleteInstitution = async (_id: string): Promise<any> => {
	return InstitutionModel.deleteOne({ _id });
};

export const getInstitution = async (where: any = {}): Promise<any> => {
	return InstitutionModel.find(where);
};

export const getInstitutionByObjectId = async (_id: string): Promise<any> => {
	return InstitutionModel.findOne({ _id });
};
