from flask import Blueprint, request, jsonify
from app.utils.validators import validate_email, validate_password, validate_username
from app.models.user import User, UserRole
from app import db
from flask_jwt_extended import create_access_token
from flask_limiter.util import get_remote_address
from flask_limiter import Limiter

auth_bp = Blueprint('auth', __name__)
limiter = Limiter(key_func=get_remote_address)

@auth_bp.route('/api/auth/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        confirm_password = data.get('confirmPassword')

        # Validate inputs
        if not all([username, email, password, confirm_password]):
            return jsonify({'error': 'All fields are required'}), 400

        if User.query.filter_by(username=username).first():
            return jsonify({'error': 'Username already taken'}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already registered'}), 400

        if password != confirm_password:
            return jsonify({'error': 'Passwords do not match'}), 400

        # Create new user with hashed password
        new_user = User(username=username, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Registration successful'}), 201
    except Exception as e:
        print("Error during registration:", str(e))  # Debugging line
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/api/auth/login', methods=['POST'])
@limiter.limit("5 per minute")  # Limit to 5 login attempts per minute
def login():
    data = request.get_json()
    
    username = data.get('username', '').strip()
    password = data.get('password', '')
    
    user = User.query.filter_by(username=username).first()
    
    if user and user.check_password(password):  # Check hashed password
        access_token = create_access_token(identity={'username': user.username, 'role': user.role.value})
        return jsonify({'access_token': access_token, 'role': user.role.value}), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401 