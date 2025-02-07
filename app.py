from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin):
    def __init__(self, id):
        self.id = id

@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        farm_id = request.form.get('farmId')
        password = request.form.get('password')
        if farm_id == "test" and password == "test":  # Replace with actual auth
            user = User(farm_id)
            login_user(user)
            return redirect(url_for('dashboard'))
        flash('Invalid credentials')
    return render_template('login.html')

@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    if request.method == 'POST':
        form_data = {
            'farmer_name': request.form.get('farmerName'),
            'address': request.form.get('address'),
            'area': request.form.get('area'),
            'issues': request.form.get('issues'),
            'surveyor_info': request.form.get('surveyorInfo'),
            'tillage': request.form.get('tillage'),
            'ptr': request.form.get('ptr') == 'on',
            'dsr': request.form.get('dsr') == 'on',
            'residue_info': request.form.get('residueInfo')
        }
        print(form_data)  # Replace with database storage
        flash('Form submitted successfully')
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
