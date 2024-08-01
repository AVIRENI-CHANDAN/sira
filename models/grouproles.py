from database import db


class GroupRoles(db.Model):
    __tablename__ = "group_roles"

    group_id = db.Column(db.Integer, db.ForeignKey("group.id"), primary_key=True)
    role_id = db.Column(db.Integer, db.ForeignKey("role.id"), primary_key=True)
