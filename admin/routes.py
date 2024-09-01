from http import HTTPStatus

from flask import Blueprint, jsonify

from database import db

# Create a blueprint for the API routes
app = Blueprint("admin", __name__, url_prefix="/admin")
models = {}


@app.get("/")
def admin_home():
    return jsonify({"msg": "from admin"}), HTTPStatus.OK


def all_models():
    all_mdls = db.Model.__subclasses__()
    for mdl in all_mdls:
        models[mdl.__name__] = mdl
    return all_mdls


@app.get("/models/list")
def get_models_list():
    models = all_models()
    model_names = [model.__name__ for model in models] * 2
    return jsonify({"models": model_names}), HTTPStatus.OK


@app.get("/models/all/{model}")
def get_all_models(model):
    if model in models:
        print("Input model", model)
        print("Type of models collection", type(models))
        return jsonify({"msg": "from admin models all model"}), HTTPStatus.OK
    return jsonify({"error": "Invalid model"}), HTTPStatus.NOT_FOUND
