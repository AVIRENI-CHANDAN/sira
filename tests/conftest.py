import pytest
from fastapi.testclient import TestClient
from backend import create_app, include_routers
from backend.routers import base_router


@pytest.fixture(scope="module")
def client():
    app = create_app()
    include_routers([base_router], app)
    with TestClient(app) as c:
        yield c
