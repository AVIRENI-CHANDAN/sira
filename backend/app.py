from typing import List

from fastapi import FastAPI


def create_app(title: str = "FastAPI application", *args, **kwargs):
    return FastAPI(title=title, *args, **kwargs)


def include_routers(routers: List, app: FastAPI):
    for router in routers:
        app.include_router(router)
