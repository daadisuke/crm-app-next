import { BankId } from './Bank';

export interface SessionInfo {
  id: string;
  userId: string;
  userName: string;
  bankId: BankId;
  branchNo: string;
  channelId: string;
  channelName: string;
  operationBranchNo?: string;
  operationSubNo?: string;
  sendOperatorId?: string;
  hostname: string;
  deviceType?: DeviceType;
  storeType?: StoreType;
  lcAreaCode: string;
  lcBranchno: string;
  lcPermission: PermissionType;
}

// r2: R2端末, service: サービス端末, salestab: 渉外タブレット
export type DeviceType = 'r2' | 'service' | 'salestab';

// 1: 営業店, 2: 本部
export type StoreType = '1' | '2';

export type PermissionType =
  | 'GENERAL'
  | 'ADMIN'
  | 'HEADQUARTERS'
  | 'SYSTEM_ADMIN';

