from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app.models.disaster import DisasterReport
from app import db
from datetime import datetime

bp = Blueprint('main', __name__)

@bp.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Disaster Reporter API!"})

@bp.route('/api/disaster-report', methods=['POST'])
@jwt_required()  # Require a valid JWT token to access this endpoint
def create_report():
    data = request.json
    
    try:
        report = DisasterReport(
            disaster_type=data['disaster_type'],
            city=data['city'],
            landmark=data.get('landmark'),
            latitude=data.get('latitude'),
            longitude=data.get('longitude'),
            occurrence_date=datetime.strptime(data['occurrence_date'], '%Y-%m-%d').date(),
            occurrence_time=datetime.strptime(data['occurrence_time'], '%H:%M').time(),
            severity_level=data['severity_level'],
            casualties=data.get('casualties', 0),
            injuries=data.get('injuries', 0),
            missing_persons=data.get('missing_persons', 0),
            infrastructure_damage=data.get('infrastructure_damage', {}),
            assistance_needed=data.get('assistance_needed', {}),
            contact_phone=data.get('contact_phone')
        )
        
        db.session.add(report)
        db.session.commit()
        
        return jsonify({'message': 'Report created successfully'}), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@bp.route('/api/disaster-reports', methods=['GET'])
def get_reports():
    reports = DisasterReport.query.order_by(DisasterReport.created_at.desc()).all()
    return jsonify([{
        'id': report.id,
        'disaster_type': report.disaster_type,
        'city': report.city,
        'severity_level': report.severity_level,
        'occurrence_date': report.occurrence_date.isoformat(),
        'casualties': report.casualties,
        'injuries': report.injuries,
        'missing_persons': report.missing_persons
    } for report in reports]), 200
