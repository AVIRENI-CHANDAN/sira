from backend import create_app

app = create_app()

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI!"}