from flask_login import UserMixin

from database import db


class User(UserMixin, db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    organization_id = db.Column(db.Integer, db.ForeignKey("organization.id"))
    group_id = db.Column(db.Integer, db.ForeignKey("group.id"))

    organization = db.relationship("Organization", back_populates="users")
    group = db.relationship("Group", back_populates="users")
    tickets = db.relationship("Ticket", backref="user", lazy=True)
