from database import db


class Organization(db.Model):
    __tablename__ = "organization"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), unique=True, nullable=False)

    users = db.relationship("User", back_populates="organization", lazy=True)
    projects = db.relationship("Project", backref="organization", lazy=True)
    admins = db.relationship("Admin", backref="organization", lazy=True)
