import logging

from flask import Flask

from authentication import configure_jwt
from database import configure_db
from database.config import ConfigSQLite
from models import *
from routes import enable_cors, register_react_base_endpoint
from settings import DEBUG, HOST, PORT, STATIC_FOLDER, TEMPLATE_FOLDER


# Application factory
def create_app():
    app = Flask(__name__, template_folder=TEMPLATE_FOLDER, static_folder=STATIC_FOLDER)

    # Set up logging
    handler = logging.StreamHandler()
    handler.setLevel(
        logging.DEBUG if DEBUG else logging.INFO
    )  # Handle both DEBUG and INFO modes
    formatter = logging.Formatter(
        "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )
    handler.setFormatter(formatter)
    app.logger.addHandler(handler)

    app.logger.setLevel(logging.DEBUG if DEBUG else logging.INFO)  # Set log level

    from admin import admin_app
    from api_routes import app as api_routes_blueprint
    from authentication import auth_app_routes, jwt_app_routes

    # Register routes
    register_routes(
        app, api_routes_blueprint, admin_app, auth_app_routes, jwt_app_routes
    )

    return app


def register_routes(app, *blueprints):
    """
    Function to register routes for the Flask application.

    Args:
        app (Flask): The Flask application instance.
        blueprints (Blueprint): One or more Flask blueprint instances to register.
    """
    register_react_base_endpoint(app)
    # Register all provided blueprints
    for blueprint in blueprints:
        app.register_blueprint(blueprint)


# Create an app instance
app = create_app()
app.logger.setLevel(logging.DEBUG if DEBUG else logging.WARNING)
configure_db(app, ConfigSQLite)
create_super_user(app)
configure_jwt(app)

# Entry point
if __name__ == "__main__":
    if DEBUG:
        app.logger.info(f"App url map:\n{ app.url_map }")
    enable_cors(app)
    app.run(debug=DEBUG, host=HOST, port=PORT)
