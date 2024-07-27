from http import HTTPStatus

from flask import Blueprint, jsonify

# Create a blueprint for the API routes
app = Blueprint("admin", __name__, url_prefix="/admin")


@app.get("/")
def admin_home():
    return jsonify({"msg": "from admin"}), HTTPStatus.OK
