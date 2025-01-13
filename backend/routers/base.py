from fastapi import APIRouter

router = APIRouter(prefix="get", tags=["base"])


@router.get("/")
def root_route():
    return {"message": "Welcome to FastAPI!"}
