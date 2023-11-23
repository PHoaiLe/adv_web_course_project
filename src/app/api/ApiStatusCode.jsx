

export const ApiStatusCodes = 
{
    GET_USER_INFO_SUCCESS: Number.parseInt(process.env.GET_USER_INFO_SUCCESS),
    SIGN_UP_SUCCESS: Number.parseInt(process.env.SIGN_UP_SUCCESS),
    SIGN_IN_SUCCESS: Number.parseInt(process.env.SIGN_IN_SUCCESS),
    ERROR_CONNECT_REFUSED: Number.parseInt(process.env.ERROR_CONNECT_REFUSED),
    REFRESH_TOKEN_SUCCESS: Number.parseInt(process.env.REFRESH_TOKEN_SUCCESS),
    EDIT_USER_PROFILE: Number.parseInt(process.env.EDIT_USER_PROFILE),
    LOGOUT_SUCCESS: Number.parseInt(process.env.LOGOUT_SUCCESS),
    CHANGE_PASSWORD_SUCCESS: Number.parseInt(process.env.CHANGE_PASSWORD_SUCCESS),
    RESET_PASSWORD_OTP: Number.parseInt(process.env.RESET_PASSWORD_OTP),
    RESET_PASSWORD_SECCESS: Number.parseInt(process.env.RESET_PASSWORD_SECCESS),
}
