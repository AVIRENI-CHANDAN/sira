from fastapi import FastAPI

def create_app(title:str="FastAPI application"):
    return FastAPI(title=title)

