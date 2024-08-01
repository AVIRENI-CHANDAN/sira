from database import db


class RolePermissions(db.Model):
    __tablename__ = "role_permissions"
    role_id = db.Column(db.Integer, db.ForeignKey("role.id"), primary_key=True)
    permission_id = db.Column(
        db.Integer, db.ForeignKey("permission.id"), primary_key=True
    )
