from flask import Blueprint, jsonify, request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)

app = Blueprint("jwt_auth", __name__, url_prefix="/jwt")


@app.get("/validate")
@jwt_required()
def validate_token():
    # If this endpoint is reached, the token is valid
    current_user = get_jwt_identity()
    return jsonify({"message": "Token is valid!", "user": current_user}), 200


@app.post("/refresh")
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)
    new_refresh_token = create_refresh_token(identity=current_user)
    return jsonify(access_token=new_access_token, refresh_token=new_refresh_token), 200


@app.get("/protected")
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(user=current_user), 200
