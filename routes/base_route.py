import os
from http import HTTPStatus

from flask import render_template, send_from_directory


def register_react_base_endpoint(app):
    """
    Registers the base endpoint for serving a React application's index page and static files.

    Args:
        app (Flask): The Flask application instance.

    This function sets up routes to handle both the root URL and various static file paths.
    It serves the main index page for the root URL and attempts to serve static files
    for other paths. If a file is not found or an error occurs, appropriate error handling
    is performed.
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
            Returns a 404 status if the file is not found, or 500 for internal server errors.
        """
        try:
            if path.startswith("images") and os.path.exists(
                os.path.join(app.root_path, path)
            ):
                return send_from_directory(app.root_path, path), HTTPStatus.OK
            elif (
                (
                    path.startswith("static")
                    or (path.startswith("logo") and path.endswith(".png"))
                )
                and os.path.exists(os.path.join(app.static_folder, path))
            ) or (path in ("manifest.json", "logo.svg", "robots.txt")):
                return send_from_directory(app.static_folder, path), HTTPStatus.OK
            else:
                return render_template("index.html"), HTTPStatus.OK
        except FileNotFoundError:
            app.logger.error(f"File not found: {path}")
            return "File Not Found", HTTPStatus.NOT_FOUND
        except Exception as e:
            app.logger.error(f"Error serving path {path}: {e}")
            return "Internal Server Error", HTTPStatus.INTERNAL_SERVER_ERROR
