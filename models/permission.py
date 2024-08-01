from database import db


class Permission(db.Model):
    __tablename__ = "permission"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    description = db.Column(db.String(255))

    roles = db.relationship(
        "Role", secondary="role_permissions", back_populates="permissions"
    )
