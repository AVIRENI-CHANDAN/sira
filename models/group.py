from database import db


class Group(db.Model):
    __tablename__ = "group"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), unique=True, nullable=False)

    users = db.relationship("User", back_populates="group", lazy=True)
    roles = db.relationship("Role", secondary="group_roles", back_populates="groups")
