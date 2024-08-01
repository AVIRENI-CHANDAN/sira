from flask_jwt_extended import JWTManager

from .config import JwtConfig
from .routes import app as jwt_app_routes

jwt = JWTManager()


def configure_jwt(app, config_cls=JwtConfig):
    app.config.from_object(config_cls)
    jwt.init_app(app)
    app.logger.info("JWT Configured.")
    return jwt
