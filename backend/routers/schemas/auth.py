from pydantic import BaseModel, Field, validator
from http import HTTPStatus

USERNAME_PATTERN = r"^[a-zA-Z0-9]{3,20}$"
PASSWORD_PATTERN = r"^[a-zA-Z0-9!@#$%^&*\-_.;,:\?+=~|\\{}\[\]()]{8,}$"
NAME_PATTERN = r"^[A-Za-z]+$"
EMAIL_PATTERN = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z\.\-]+$"
PHONE_PATTERN = r"^(\+[0-9]+)?[0-9]{10}$"


class AuthErrorResponse(BaseModel):
    error: str
    http_code: int = Field(
        HTTPStatus.UNAUTHORIZED,
        alias="statusCode",
        description="HTTP status code of the error",
    )


class LoginRequest(BaseModel):
    username: str = Field(..., min_length=5, max_length=255, pattern=USERNAME_PATTERN)
    password: str = Field(..., min_length=5, max_length=255, pattern=PASSWORD_PATTERN)


class RegistrationRequest(BaseModel):
    first_name: str = Field(..., min_length=3, max_length=255, pattern=NAME_PATTERN)
    last_name: str = Field(..., min_length=3, max_length=255, pattern=NAME_PATTERN)
    username: str = Field(..., min_length=5, max_length=255, pattern=USERNAME_PATTERN)
    password: str = Field(..., min_length=5, max_length=255, pattern=PASSWORD_PATTERN)
    cnfm_pswd: str = Field(..., min_length=5, max_length=255, pattern=PASSWORD_PATTERN)
    email: str = Field(..., min_length=5, max_length=255, pattern=EMAIL_PATTERN)
    phn_nbr: str = Field(..., min_length=10, max_length=15, pattern=PHONE_PATTERN)
    address: str = Field("", min_length=5, max_length=255)
    city: str = Field("", min_length=3, max_length=255)
    state: str = Field("", min_length=2, max_length=64)
    country: str = Field(..., min_length=3, max_length=64)
    zip_code: str = Field("", min_length=5, max_length=10)

    @validator("cnfm_pswd")
    def passwords_match(cls, cnfm_pswd, values):
        if "password" in values and cnfm_pswd != values["password"]:
            raise ValueError("Password and confirm password do not match")
        return cnfm_pswd


class LoginSuccessResponse(BaseModel):
    username: str
    access_token: str
    refresh_token: str


class RegisterSuccessResponse(BaseModel):
    username: str
    access_token: str
    refresh_token: str


class LogoutSuccessResponse(BaseModel):
    message: str


class TokenRefreshSuccessResponse(BaseModel):
    access_token: str
