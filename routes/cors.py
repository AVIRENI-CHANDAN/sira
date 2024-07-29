from flask_cors import CORS


def enable_cors(app):
    # Enable CORS for cross-origin requests
    CORS(app)
