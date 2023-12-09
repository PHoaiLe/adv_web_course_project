

export const ApiStatusCodes = 
{
    GET_USER_INFO_SUCCESS: Number.parseInt(process.env.GET_USER_INFO_SUCCESS, 10),
    SIGN_UP_SUCCESS: Number.parseInt(process.env.SIGN_UP_SUCCESS, 10),
    SIGN_IN_SUCCESS: Number.parseInt(process.env.SIGN_IN_SUCCESS, 10),
    ERROR_CONNECT_REFUSED: Number.parseInt(process.env.ERROR_CONNECT_REFUSED, 10),
    REFRESH_TOKEN_SUCCESS: Number.parseInt(process.env.REFRESH_TOKEN_SUCCESS, 10),
    EDIT_USER_PROFILE: Number.parseInt(process.env.EDIT_USER_PROFILE, 10),
    LOGOUT_SUCCESS: Number.parseInt(process.env.LOGOUT_SUCCESS, 10),
    CHANGE_PASSWORD_SUCCESS: Number.parseInt(process.env.CHANGE_PASSWORD_SUCCESS, 10),
    RESET_PASSWORD_OTP: Number.parseInt(process.env.RESET_PASSWORD_OTP, 10),
    RESET_PASSWORD_SECCESS: Number.parseInt(process.env.RESET_PASSWORD_SECCESS, 10),
    
    TEACHER_CREATE_CLASS_SUCCESS: Number.parseInt(process.env.TEACHER_CREATE_CLASS_SUCCESS, 10),
    TEACHER_GET_ALL_CLASSES_SUCCESS: Number.parseInt(process.env.TEACHER_GET_ALL_CLASSES_SUCCESS, 10),
    TEACHER_GET_JOINED_CLASSES_SUCCESS: Number.parseInt(process.env.TEACHER_GET_JOINED_CLASSES_SUCCESS, 10),

    STUDENT_GET_JOINED_CLASSES_SUCCESS: Number.parseInt(process.env.STUDENT_GET_JOINED_CLASSES_SUCCESS, 10)


}
