import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key-here'
    SQLALCHEMY_DATABASE_URI = os.environ.get('postgresql://locksen_db_user:7omNlhR0P2FEJNzHzTSmfEmOHqUxoOh3@dpg-d0oaeq8dl3ps73ad65lg-a.oregon-postgres.render.com/locksen_db')  # 
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = 'static/images'
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}