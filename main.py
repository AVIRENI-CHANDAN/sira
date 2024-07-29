from flask import Flask

from routes import enable_cors, register_react_base_endpoint
from settings import DEBUG, HOST, PORT, STATIC_FOLDER, TEMPLATE_FOLDER


# Application factory
def create_app():
    app = Flask(__name__, template_folder=TEMPLATE_FOLDER, static_folder=STATIC_FOLDER)

    from admin import admin_app
    from api_routes import app as api_routes_blueprint

    # Register routes
    register_routes(app, api_routes_blueprint, admin_app)

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

# Entry point
if __name__ == "__main__":
    enable_cors(app)
    app.run(debug=DEBUG, host=HOST, port=PORT)
