import os

# Retrieve the PORT environment variable, or use 5000 as the default port if not set
PORT = os.getenv("PORT") or 5000

# Retrieve the HOST environment variable, or use "0.0.0.0" as the default host if not set
HOST = os.getenv("HOST") or "0.0.0.0"

# Retrieve the DEBUG environment variable and check if it is set to "true" (case-sensitive).
# If the environment variable is not set or not "true", default to False.
DEBUG = os.getenv("DEBUG") == "true" or False

# Define the paths to the frontend build folders.
# Template folder for the blueprint
TEMPLATE_FOLDER = "frontend/web/build/"
# Static folder for the blueprint
STATIC_FOLDER = "frontend/web/build/"
