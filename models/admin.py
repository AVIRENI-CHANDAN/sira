from database import db


class Admin(db.Model):
    __tablename__ = "admin"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    organization_id = db.Column(db.Integer, db.ForeignKey("organization.id"))

    user = db.relationship("User", backref="admin")
