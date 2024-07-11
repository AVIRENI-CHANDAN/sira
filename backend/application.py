from flask import Flask


def create_app(*args, **kwargs):
    app = Flask(__name__, *args, **kwargs)
    # import routes of the application and register with the app
    from . import routes

    app.register_blueprint(routes.app)
    # return the app
    return app
