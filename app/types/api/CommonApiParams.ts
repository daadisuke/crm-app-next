import { CustomersIndividualsIdAssetsItemsXBankIDEnum } from 'api-gateway-client';

export interface CommonApiParams {
  contentType: string;
  userAgent: string;
  xUserID: string;
  xBankID: CustomersIndividualsIdAssetsItemsXBankIDEnum;
  xBranchNo: string;
  xHostName: string;
}

export interface CommonAccountingTransactionApiParams extends CommonApiParams {
  xOperationBranchNo: string;
  xOperationSubNo: string;
  xSendOperatorID: string;
}

