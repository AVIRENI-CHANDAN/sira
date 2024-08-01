import os

from werkzeug.security import generate_password_hash

from database import db


class SuperUser(db.Model):
    __tablename__ = "super_user"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)


def create_super_user(app, username=None, email=None, password=None):
    with app.app_context():
        super_user = SuperUser.query.first()
        if not super_user:
            username = username or os.getenv("SUPERUSER_USERNAME")
            email = email or os.getenv("SUPERUSER_EMAIL")
            password = password or os.getenv("SUPERUSER_PASSWORD")
            hashed_password = generate_password_hash(password, method="pbkdf2:sha256")

            new_super_user = SuperUser(
                username=username, email=email, password=hashed_password
            )
            db.session.add(new_super_user)
            db.session.commit()
            app.logger.info(f"Super user created: {username}")
        else:
            app.logger.info("Super user already exists.")
