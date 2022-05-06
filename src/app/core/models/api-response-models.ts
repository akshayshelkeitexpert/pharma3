
export interface ApiCommonResponseModel {
    errorMessagesAr: string[] | null,
    errorMessagesEn: string[] | null,
    message: string | null,
    messagesEn: string[] | null,
    messagesAr: string[] | null
    status: number,
    trace: string | null
}

export interface ApiResponseModel {
    data: any;
    responseMessage: ApiCommonResponseModel
}

export interface ApiSuccessResponse {
    body: ApiResponseModel | any;
    type: number;
    headers: {},
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url: string,
}

export interface ApiErrorResponse {
    error: ApiResponseModel,
    headers: {},
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url: string,
}
