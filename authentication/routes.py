from http import HTTPStatus

from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, create_refresh_token
from werkzeug.security import check_password_hash, generate_password_hash

from models import SuperUser, User

app = Blueprint("auth", __name__, url_prefix="/auth")


@app.post("/login")
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    user = User.query.filter_by(username=username).first()
    super_user = SuperUser.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity={"id": user.id, "role": "user"})
        refresh_token = create_refresh_token(identity={"id": user.id, "role": "user"})
        return (
            jsonify(access_token=access_token, refresh_token=refresh_token),
            HTTPStatus.OK,
        )
    if super_user and check_password_hash(super_user.password, password):
        access_token = create_access_token(
            identity={"id": super_user.id, "role": "super_user"}
        )
        refresh_token = create_refresh_token(
            identity={"id": super_user.id, "role": "super_user"}
        )
        return (
            jsonify(access_token=access_token, refresh_token=refresh_token),
            HTTPStatus.OK,
        )

    return jsonify(msg="Invalid email or password"), HTTPStatus.UNAUTHORIZED
