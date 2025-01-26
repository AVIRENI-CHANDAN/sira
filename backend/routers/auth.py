from fastapi import APIRouter, Form, Depends
from pydantic import BaseModel, Field
from typing import Union
from http import HTTPStatus

auth = APIRouter(prefix="/auth", tags=["authentication"])

USERNAME_PATTERN = r"^[a-zA-Z0-9]+$"
PASSWORD_PATTERN = r"^[a-zA-Z0-9\!\@\#\$\%\^\&\*]+$"
NAME_PATTERN = r"^[A-Za-z]+$"
EMAIL_PATTERN = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z\.]+$"
PHONE_PATTERN = r"^(\+[0-9]+)?[0-9]{10}$"


class AuthErrorResponse(BaseModel):
    error: str
    http_code: int = Field(
        HTTPStatus.SERVICE_UNAVAILABLE,
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
    state: str = Field("", min_length=3, max_length=64)
    country: str = Field(..., min_length=3, max_length=64)


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


LoginResponse = Union[AuthErrorResponse, LoginSuccessResponse]
RegisterResponse = Union[AuthErrorResponse, RegisterSuccessResponse]
LogoutResponse = Union[AuthErrorResponse, LogoutSuccessResponse]
TokenRefreshResponse = Union[AuthErrorResponse, TokenRefreshSuccessResponse]


@auth.post("/login", response_model=LoginResponse)
def user_login(form_data: LoginRequest = Depends()):
    return {
        "username": form_data.username,
        "access_token": "at123456",
        "refresh_token": "rt789012",
    }


@auth.post("/register", response_model=RegisterResponse)
def user_register(form_data: RegistrationRequest = Depends()):
    return {
        "username": form_data.username,
        "access_token": "at123456",
        "refresh_token": "rt789012",
    }


@auth.post("/logout", response_model=LogoutResponse)
def user_logout():
    return {"message": "User logged out successfully"}


@auth.post("/token-refresh", response_model=TokenRefreshResponse)
def refresh_token():
    return {"access_token": "at123456"}
