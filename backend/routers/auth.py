from fastapi import APIRouter, Form, Depends
from pydantic import BaseModel, Field, validator
from typing import Union
from http import HTTPStatus
from backend.routers.schemas import (
    LoginRequest,
    LoginSuccessResponse,
    LogoutSuccessResponse,
    RegisterSuccessResponse,
    RegistrationRequest,
    AuthErrorResponse,
)

auth = APIRouter(prefix="/auth", tags=["authentication"])


LoginResponse = Union[LoginSuccessResponse, AuthErrorResponse]
RegisterResponse = Union[RegisterSuccessResponse, AuthErrorResponse]
LogoutResponse = Union[LogoutSuccessResponse, AuthErrorResponse]
TokenRefreshResponse = Union[TokenRefreshSuccessResponse, AuthErrorResponse]


@auth.post("/login", response_model=LoginResponse)
def user_login(form_data: LoginRequest):
    return {
        "username": form_data.username,
        "access_token": "at123456",
        "refresh_token": "rt789012",
    }


@auth.post("/register", response_model=RegisterResponse)
def user_register(form_data: RegistrationRequest):
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
