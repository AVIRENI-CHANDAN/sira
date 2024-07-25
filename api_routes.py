from http import HTTPStatus

from flask import Blueprint, jsonify

# Create a blueprint for the API routes
app = Blueprint("api", __name__, url_prefix="/api")


@app.get("/team/all")
def get_all_team():
    """
    Route: /api/team/all
    Methods: GET
    Description: Returns a list of SIRA team members.

    Returns:
        Response: JSON response containing the list of team members with HTTP status 200 (OK).
    """
    team_mates = [
        {
            "name": "Avireni Chandan",
            "role": "Software Engineer",
            "image": "chandan.jpeg",
        }
    ]
    return jsonify({"team": team_mates}), HTTPStatus.OK
