from backend import create_app, include_routers
from backend.routers import auth_router, base_router

app = create_app()
include_routers([base_router, auth_router], app)
