/**
 * 銀行オブジェクト（Enum-like）
 */
export const BANK_ID = {
  /** りそな銀行 */
  RB: '1',
  /** 埼玉りそな銀行 */
  SR: '2',
  /** 関西みらい銀行 */
  KM: '4',
  /** みなと銀行 */
  MB: '5'
} as const;

// Bank オブジェクトから型を抽出
export type BankId = string;

export const BANK_ID_TO_NAME: Record<BankId, string> = {
  [BANK_ID.RB]: 'りそな銀行',
  [BANK_ID.SR]: '埼玉りそな銀行',
  [BANK_ID.KM]: '関西みらい銀行',
  [BANK_ID.MB]: 'みなと銀行'
} as const;

export const BANK_ID_TO_BANK_CODE: Record<BankId, string> = {
  [BANK_ID.RB]: '0010',
  [BANK_ID.SR]: '0017',
  [BANK_ID.KM]: '0159',
  [BANK_ID.MB]: '0562'
} as const;

export interface BankInfo {
  id: string;
  name: string;
}

export const BANKS: BankInfo[] = Object.values(BANK_ID).map((id) => ({
  id,
  name: BANK_ID_TO_NAME[id]
}));

