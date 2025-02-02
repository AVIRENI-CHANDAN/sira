from backend import create_app, include_routers
from backend.routers import auth_router, base_router
from fastapi import Request
import logging
import os

app = create_app()
include_routers([base_router, auth_router], app)

# Set up logging
DEBUG = os.environ.get("DEBUG", "false").lower() == "true"
logging.basicConfig(level=logging.DEBUG if DEBUG else logging.INFO)
logger = logging.getLogger(__name__)


@app.middleware("http")
async def log_requests(request: Request, call_next):
    body = await request.body()  # Read request body
    logger.debug(f"Request: {request.method} {request.url}")
    logger.debug(f"Headers: {dict(request.headers)}")
    logger.debug(f"Body: {body.decode() if body else 'No Body'}")

    response = await call_next(request)
    return response
