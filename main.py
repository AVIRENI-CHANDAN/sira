import os

from flask import Flask

app = Flask(__name__)


@app.get("/")
def application_home():
    return "Hello world"


if __name__ == "__main__":
    app.run(debug=os.getenv("FLASK_DEBUG", "False").lower() == "true")
