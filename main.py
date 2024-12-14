from backend import create_app, include_routers
from backend.routers import base_router
app = create_app()
include_routers([base_router], app)
