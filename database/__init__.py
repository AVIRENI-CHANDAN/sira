from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def configure_db(app, config_cls):
    app.config.from_object(config_cls)
    db.init_app(app)

    with app.app_context():
        db.create_all()
    return db
