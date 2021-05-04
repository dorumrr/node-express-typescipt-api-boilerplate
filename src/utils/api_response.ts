import { IApiResponse } from "interfaces/utils";

export const apiResponse = (data: IApiResponse) => ({
	data: data.data || null,
	success: data.success || false,
	messages: data.messages || []
});
