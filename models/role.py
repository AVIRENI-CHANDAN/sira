from database import db


class Role(db.Model):
    __tablename__ = "role"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), unique=True, nullable=False)

    permissions = db.relationship(
        "Permission", secondary="role_permissions", back_populates="roles"
    )
    groups = db.relationship("Group", secondary="group_roles", back_populates="roles")
