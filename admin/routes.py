from http import HTTPStatus

from flask import Blueprint, current_app, jsonify

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
    model_names = [model.__name__ for model in models]
    return jsonify({"models": model_names}), HTTPStatus.OK


@app.get("/models/all/<model>")
def get_all_models(model):
    current_app.logger.info(f"Request received with model: {model}, models: {models}")
    if model in models:
        current_app.logger.info(f"Input model: {model}")
        current_app.logger.info(f"Type of models collection: {type(models)}")
        model_objects = [
            {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}
            for obj in models[model].query.all()
        ]
        return (
            jsonify(
                {
                    "msg": f"from admin models all model - {model}",
                    "objects": model_objects,
                }
            ),
            HTTPStatus.OK,
        )
    return jsonify({"error": "Invalid model"}), HTTPStatus.NOT_FOUND
