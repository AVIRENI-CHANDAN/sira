import os
from http import HTTPStatus

from flask import Flask, render_template, request, send_from_directory

from settings import DEBUG, HOST, PORT, STATIC_FOLDER, TEMPLATE_FOLDER


# Application factory
def create_app():
    app = Flask(__name__, template_folder=TEMPLATE_FOLDER, static_folder=STATIC_FOLDER)

    # Register routes
    register_routes(app)

    return app


def register_routes(app):
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
            if path == "":
                return render_template("index.html"), HTTPStatus.OK
            else:
                return send_from_directory(app.static_folder, path), HTTPStatus.OK
        except Exception as e:
            app.logger.error(f"Error serving path {path}: {e}")
            return "Internal Server Error", HTTPStatus.INTERNAL_SERVER_ERROR


# Create an app instance
app = create_app()

# Entry point
if __name__ == "__main__":
    app.run(debug=DEBUG, host=HOST, port=PORT)
