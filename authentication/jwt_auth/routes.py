from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

app = Blueprint("jwt_auth", __name__, url_prefix="/jwt")


@app.post("/refresh")
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    return jsonify(access_token=access_token), 200


@app.get("/protected")
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(user=current_user), 200
