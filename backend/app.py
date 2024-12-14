from fastapi import FastAPI

def create_app(title:str="FastAPI application"):
    return FastAPI(title=title)

def include_routers(routers:list, app: FastAPI):
    for router in routers:
        app.include_router(router)
