from fastapi import APIRouter
from pydantic import BaseModel, Field

router = APIRouter(prefix="", tags=["base"])


class BaseRouteResponse(BaseModel):
    """Base response model for API routes"""

    message: str = "Welcome to FastAPI!"

    class Config:
        from_attributes = True


@router.get("/", response_model=BaseRouteResponse)
async def root_route():
    return {"message": "Welcome to FastAPI!"}
