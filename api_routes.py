from http import HTTPStatus

from flask import Blueprint, jsonify

app = Blueprint("api", __name__, url_prefix="/api")


@app.get("/team/all")
def get_all_team():
    team_mates = [
        {
            "name": "Avireni Chandan",
            "role": "Software Engineer",
            "image": "chandan.jpeg",
        }
    ]
    return jsonify({"team": team_mates}), HTTPStatus.OK
