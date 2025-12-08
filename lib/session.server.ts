// session.server.ts
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import invariant from 'tiny-invariant';
import { CustomersIndividualsIdAssetsItemsXBankIDEnum } from 'api-gateway-client/gateway/apis/IndividualsAssetsApi';
import {
  CommonAccountingTransactionApiParams,
  CommonApiParams
} from '../app/types/api/CommonApiParams';
import { BankId } from '../app/types/Bank';
import { SessionInfo } from '../app/types/Session';
import { ERRORS } from '../app/utils/errors';

const KEYS = {
  SESSION_ID: 'crm-session-id',
  USER_ID: 'crm-user-id', // RⅡID
  USER_NAME: 'crm-user-name',
  BANK_ID: 'crm-bank-id',
  BRANCHNO: 'crm-branchno',
  CHANNEL_ID: 'crm-channel-id',
  CHANNEL_NAME: 'crm-channel-name',
  OPERATION_BRANCHNO: 'crm-operation-branchno',
  OPERATION_SUBNO: 'crm-operation-subno',
  SEND_OPERATOR_ID: 'crm-send-operator-id',
  CLIENT_IP: 'crm-client-ip',
  DEVICE_TYPE: 'crm-device-type',
  STORE_TYPE: 'crm-store-type',
  LC_AREA_CODE: 'crm-lc-area-code',
  LC_BRANCHNO: 'crm-lc-branchno',
  LC_PERMISSION: 'crm-lc-permission'
};

// 当日の23:59:59までの秒数を取得
function getSecondsUntilEndOfDay(): number {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);

  return Math.floor((endOfDay.getTime() - now.getTime()) / 1000);
}

const cookieOptions = {
  httpOnly: true,
  path: '/',
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
};

export async function createUserSession({
  sessionInfo,
  redirectTo
}: {
  sessionInfo: SessionInfo;
  redirectTo: string;
}) {
  const cookieStore = await cookies();
  const maxAge = getSecondsUntilEndOfDay();
  
  cookieStore.set(KEYS.SESSION_ID, sessionInfo.id, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.USER_ID, sessionInfo.userId, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.USER_NAME, sessionInfo.userName, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.BANK_ID, sessionInfo.bankId, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.BRANCHNO, sessionInfo.branchNo, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.CHANNEL_ID, sessionInfo.channelId, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.CHANNEL_NAME, sessionInfo.channelName, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.OPERATION_BRANCHNO, sessionInfo.operationBranchNo || '', { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.OPERATION_SUBNO, sessionInfo.operationSubNo || '', { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.SEND_OPERATOR_ID, sessionInfo.sendOperatorId || '', { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.CLIENT_IP, sessionInfo.hostname, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.DEVICE_TYPE, sessionInfo.deviceType || '', { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.STORE_TYPE, sessionInfo.storeType || '', { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.LC_AREA_CODE, sessionInfo.lcAreaCode, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.LC_BRANCHNO, sessionInfo.lcBranchno, { ...cookieOptions, maxAge });
  cookieStore.set(KEYS.LC_PERMISSION, sessionInfo.lcPermission, { ...cookieOptions, maxAge });

  let redirectUrl = redirectTo;
  if (!sessionInfo.operationBranchNo) {
    redirectUrl = redirectTo.includes('?')
      ? redirectTo + '&showUBTRegistrationAlert=true'
      : redirectTo + '?showUBTRegistrationAlert=true';
  }
  
  redirect(redirectUrl);
}

export async function getSessionInfo(): Promise<SessionInfo | undefined> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(KEYS.SESSION_ID)?.value;
  const userId = cookieStore.get(KEYS.USER_ID)?.value;
  const userName = cookieStore.get(KEYS.USER_NAME)?.value;
  const bankId = cookieStore.get(KEYS.BANK_ID)?.value;
  const branchNo = cookieStore.get(KEYS.BRANCHNO)?.value;
  const channelId = cookieStore.get(KEYS.CHANNEL_ID)?.value;
  const channelName = cookieStore.get(KEYS.CHANNEL_NAME)?.value;
  const operationBranchNo = cookieStore.get(KEYS.OPERATION_BRANCHNO)?.value;
  const operationSubNo = cookieStore.get(KEYS.OPERATION_SUBNO)?.value;
  const sendOperatorId = cookieStore.get(KEYS.SEND_OPERATOR_ID)?.value;
  const hostname = cookieStore.get(KEYS.CLIENT_IP)?.value;
  const deviceType = cookieStore.get(KEYS.DEVICE_TYPE)?.value;
  const storeType = cookieStore.get(KEYS.STORE_TYPE)?.value;
  const lcAreaCode = cookieStore.get(KEYS.LC_AREA_CODE)?.value;
  const lcBranchno = cookieStore.get(KEYS.LC_BRANCHNO)?.value;
  const lcPermission = cookieStore.get(KEYS.LC_PERMISSION)?.value;

  if (!sessionId || !userId) {
    return undefined;
  }

  return {
    id: sessionId,
    userId: userId,
    userName: userName || '',
    bankId: (bankId as BankId) || '',
    branchNo: branchNo || '',
    channelId: channelId || '',
    channelName: channelName || '',
    operationBranchNo: operationBranchNo || undefined,
    operationSubNo: operationSubNo || undefined,
    sendOperatorId: sendOperatorId || undefined,
    hostname: hostname || '',
    deviceType: deviceType as SessionInfo['deviceType'] | undefined,
    storeType: storeType as SessionInfo['storeType'] | undefined,
    lcAreaCode: lcAreaCode || '',
    lcBranchno: lcBranchno || '',
    lcPermission: (lcPermission as SessionInfo['lcPermission']) || 'GENERAL'
  };
}

export async function getUserId(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.USER_ID)?.value;
}

export async function getUserName(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.USER_NAME)?.value;
}

export async function getHostname(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.CLIENT_IP)?.value;
}

export async function getBankId(): Promise<BankId | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.BANK_ID)?.value as BankId | undefined;
}

export async function getBranchno(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.BRANCHNO)?.value;
}

export async function getChannel(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.CHANNEL_ID)?.value;
}

export async function getChannelName(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(KEYS.CHANNEL_NAME)?.value;
}

export async function setDeviceType(
  deviceType: 'r2' | 'service' | 'salestab' | undefined
) {
  const cookieStore = await cookies();
  cookieStore.set(KEYS.DEVICE_TYPE, deviceType || '', {
    ...cookieOptions,
    maxAge: getSecondsUntilEndOfDay()
  });
}

export async function requireUserId(
  redirectTo?: string
): Promise<string> {
  const userId = await getUserId();

  if (userId) return userId;

  const searchParams = new URLSearchParams([['redirectTo', redirectTo || '/crm-app']]);
  redirect(`/crm-app/login?${searchParams}`);
}

export async function destroySession(redirectTo?: string) {
  const cookieStore = await cookies();
  
  Object.values(KEYS).forEach(key => {
    cookieStore.delete(key);
  });
  
  redirect(redirectTo || '/crm-app');
}

export function getCustomerIdFromParams(params: { id?: string }): string {
  const customerId = params.id;
  invariant(customerId, ERRORS.CANNOT_GET_CUSTOMER_ID.message);
  return customerId;
}

export async function getCommonApiParams(): Promise<CommonApiParams> {
  const sessionInfo = await getSessionInfo();
  invariant(sessionInfo, ERRORS.CANNOT_GET_SESSION_INFO.message);
  const { headers } = await import('next/headers');
  const headersList = await headers();

  return {
    contentType: 'application/json',
    userAgent: headersList.get('user-agent') || '',
    xUserID: sessionInfo.userId,
    xBankID: sessionInfo.bankId.padStart(
      3,
      '0'
    ) as CustomersIndividualsIdAssetsItemsXBankIDEnum,
    xBranchNo: sessionInfo.branchNo,
    xHostName: sessionInfo.hostname
  };
}

export async function getCommonAccountingTransactionApiParams(): Promise<CommonAccountingTransactionApiParams> {
  const sessionInfo = await getSessionInfo();
  invariant(sessionInfo, ERRORS.CANNOT_GET_SESSION_INFO.message);

  const { operationBranchNo, operationSubNo, sendOperatorId } = sessionInfo;

  if (!operationBranchNo || !operationSubNo || !sendOperatorId) {
    throw new Error(
      ERRORS.CANNOT_GET_ACCOUNTING_TRANSACTION_API_PARAMS.message
    );
  }
  return {
    ...(await getCommonApiParams()),
    xOperationBranchNo: operationBranchNo,
    xOperationSubNo: operationSubNo,
    xSendOperatorID: sendOperatorId
  };
}

