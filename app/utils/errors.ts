export const ERRORS = {
  GATEWAY_CONNECTION_ERROR: {
    code: 'GATEWAY_CONNECTION_ERROR',
    message:
      'ゲートウェイサーバーとの通信でエラーが発生しました。時間をおいてアクセスしてください。'
  },
  REQUEST_TIMEOUT: {
    code: 'REQUEST_TIMEOUT',
    message:
      'リクエストがタイムアウトしました。時間をおいてアクセスしてください。'
  },
  UNKNOWN_ERROR: {
    code: 'UNKNOWN_ERROR',
    message: '不明なエラーが発生しました。時間をおいてアクセスしてください。'
  },
  INVALID_INPUT: {
    code: 'INVALID_INPUT',
    message: '入力が無効です。正しい形式で入力してください。'
  },
  SERVER_ERROR: {
    code: 'SERVER_ERROR',
    message: 'サーバーエラーが発生しました。時間をおいてアクセスしてください。'
  },
  CUSTOMER_NOT_FOUND: {
    code: 'CUSTOMER_NOT_FOUND',
    message: '検索条件に合致する顧客が存在しません。'
  },
  BRANCH_NOT_FOUND: {
    code: 'BRANCH_NOT_FOUND',
    message: '検索条件に合致する支店が存在しません。'
  },
  CANNOT_GET_USERID: {
    code: 'CANNOT_GET_USERID',
    message: 'ユーザーIDを取得できません。'
  },
  CANNOT_GET_EMPLOYEE_ATTRIBUTES: {
    code: 'CANNOT_GET_EMPLOYEE_ATTRIBUTES',
    message: '従業員属性情報を取得できません。'
  },
  CANNOT_GET_ACCOUNTING_TRANSACTION_API_PARAMS: {
    code: 'CANNOT_GET_ACCOUNTING_TRANSACTION_API_PARAMS',
    message: '情報を取得できませんでした。'
  },
  CANNOT_GET_ACCESS_TOKEN: {
    code: 'CANNOT_GET_ACCESS_TOKEN',
    message: 'アクセストークンを取得できません。'
  },
  CANNOT_GET_CUSTOMER_ID: {
    code: 'CANNOT_GET_CUSTOMER_ID',
    message: '顧客IDを取得できません。'
  },
  CANNOT_GET_SESSION_INFO: {
    code: 'CANNOT_GET_SESSION_INFO',
    message: 'セッション情報を取得できません。'
  },
  CANNOT_GET_HOSTNAME: {
    code: 'CANNOT_GET_HOSTNAME',
    message: 'ホスト名を取得できません。'
  },
  CANNOT_GET_BANKID: {
    code: 'CANNOT_GET_BANKID',
    message: '銀行識別子を取得できません。'
  },
  HAS_NO_INVESTMENT_TRUST_ERROR: {
    code: 'HAS_NO_INVESTMENT_TRUST_ERROR',
    message: '保有している投資信託は存在しません。'
  },
  CANNOT_GET_POLICY_NO: {
    code: 'CANNOT_GET_POLICY_NO',
    message: '証券番号を取得できません。'
  },
  CANNOT_GET_SUB_NO: {
    code: 'CANNOT_GET_SUB_NO',
    message: '枝番を取得できません。'
  },
  CANNOT_FETCH_INFO: {
    code: 'CANNOT_FETCH_INFO',
    message: '情報を取得できませんでした。'
  },
  CANNOT_FETCH_INFO_NO_PERIOD: {
    code: 'CANNOT_FETCH_INFO_NO_PERIOD',
    message: '情報を取得できませんでした'
  },
  CANNOT_FETCH_PARTIAL_INFO: {
    code: 'CANNOT_FETCH_PARTIAL_INFO',
    message: '情報を一部取得できませんでした。'
  },
  CANNOT_FETCH_CUSTOMER_INFO: {
    code: 'CANNOT_FETCH_CUSTOMER_INFO',
    message: '顧客情報を取得できませんでした。'
  },
  CANNOT_FETCH_PARTIAL_CUSTOMER_INFO: {
    code: 'CANNOT_FETCH_PARTIAL_CUSTOMER_INFO',
    message: '顧客情報を一部取得できませんでした。'
  },
  CANNOT_FETCH_WARNING_CODES: {
    code: 'CANNOT_FETCH_WARNING_CODES',
    message: '注意コードを取得できませんでした。'
  },
  CANNOT_CONNECT_NETWORK: {
    code: 'CANNOT_CONNECT_NETWORK',
    message: 'ネットワークに接続されていません。'
  },
  PARSE_JSON_FAILED: {
    code: 'PARSE_JSON_FAILED',
    message: 'リクエストのJSON解析に失敗しました。'
  },
  UNEXPECTED_ERROR: {
    code: 'UNEXPECTED_ERROR',
    message: '予期しないエラーが発生しました'
  },
  CANNOT_OPEN_NEW_TAB: {
    code: 'CANNOT_OPEN_NEW_TAB',
    message: '新しいタブを開けません。時間をおいて、やり直してください。'
  }
} as const;

export type ErrorCode = keyof typeof ERRORS;

export type ErrorDefinition = {
  code: ErrorCode;
  message: string;
};

