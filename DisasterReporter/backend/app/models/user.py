from app import db
from datetime import datetime
from enum import Enum
from werkzeug.security import generate_password_hash, check_password_hash

class UserRole(Enum):
    ADMIN = 'ADMIN'
    AUTHORITY = 'AUTHORITY'
    USER = 'USER'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    role = db.Column(db.Enum(UserRole), default=UserRole.USER, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Additional fields for authority users
    organization = db.Column(db.String(100))
    jurisdiction = db.Column(db.String(100))
    verified = db.Column(db.Boolean, default=False)
    
    def __repr__(self):
        return f'<User {self.username}>' 

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

