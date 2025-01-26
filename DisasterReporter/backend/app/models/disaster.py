from app import db
from datetime import datetime

class DisasterReport(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    disaster_type = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    landmark = db.Column(db.String(200))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    occurrence_date = db.Column(db.Date, nullable=False)
    occurrence_time = db.Column(db.Time, nullable=False)
    severity_level = db.Column(db.String(20), nullable=False)
    casualties = db.Column(db.Integer, default=0)
    injuries = db.Column(db.Integer, default=0)
    missing_persons = db.Column(db.Integer, default=0)
    infrastructure_damage = db.Column(db.JSON)
    assistance_needed = db.Column(db.JSON)
    contact_phone = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
