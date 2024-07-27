import os
from http import HTTPStatus
from functools import wraps

from flask import Flask, render_template, request, send_from_directory

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

    @app.get("/", defaults={"path": ""})
    @app.get("/<path:path>")
    def index(path):
        """
        Route: /
        Methods: GET
        Description: Serves the main index page for the root URL and static files for other paths.

        Args:
            path (str): The path of the requested resource.

        Returns:
            Response: Renders the index.html template for the root URL. Serves the requested static file from the static folder for other paths.
        """
        try:
            if path.startswith("images") and os.path.exists(
                os.path.join(app.root_path, path)
            ):
                return send_from_directory(app.root_path, path), HTTPStatus.OK
            elif path.startswith("static") and os.path.exists(
                os.path.join(app.static_folder, path)
            ):
                return send_from_directory(app.static_folder, path), HTTPStatus.OK
            elif path in ("manifest.json", "logo.svg", "robots.txt"):
                return send_from_directory(app.static_folder, path), HTTPStatus.OK
            elif path.startswith("logo") and path.endswith(".png"):
                return send_from_directory(app.static_folder, path), HTTPStatus.OK
            else:
                return render_template("index.html"), HTTPStatus.OK
        except Exception as e:
            app.logger.error(f"Error serving path {path}: {e}")
            return "Internal Server Error", HTTPStatus.INTERNAL_SERVER_ERROR

    # Register all provided blueprints
    for blueprint in blueprints:
        app.register_blueprint(blueprint)


# Create an app instance
app = create_app()

# Entry point
if __name__ == "__main__":
    from flask_cors import CORS

    # Enable CORS for cross-origin requests
    CORS(app)
    app.run(debug=DEBUG, host=HOST, port=PORT)
