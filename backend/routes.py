from flask import Blueprint

# Create a Blueprint named 'main'
app = Blueprint("main", __name__)


@app.route("/")
def home():
    """
    Route: /
    Method: GET
    Description: This route returns a simple "Hello, World!" message.

    Returns:
        str: A greeting message "Hello, World!"
    """
    return "Hello, World!"
