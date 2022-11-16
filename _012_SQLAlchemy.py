from flask import Flask, request, flash, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
app.config['SECRET_KEY'] = "random string"

db = SQLAlchemy(app)

class Students(db.Model):
   id = db.Column('student_id', db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   city = db.Column(db.String(50))  
   addr = db.Column(db.String(200))
   pin = db.Column(db.String(10))

   def __init__(self, name, city, addr, pin):
       self.name = name
       self.city=city
       self.addr=addr
       self.pin=pin

@app.route('/')
def show_all():
    students = Students.query.all()
    print(students[0].name)
    return render_template('myapp/show.html', students=students ) #select all value from the table.

@app.route('/new', methods = ['GET', 'POST'])
def new():
   if request.method == 'POST':
      if not request.form['name'] or not request.form['city'] or not request.form['addr']:
         flash('Please enter all the fields', 'error')
      else:
         student = Students(request.form['name'], request.form['city'],
            request.form['addr'], request.form['pin'])
         
         db.session.add(student) #add new record to the dataase.
         db.session.commit() #commit the transfering.
         flash('Record was successfully added')
         return redirect(url_for('show_all'))
   return render_template('myapp/new.html')      

with app.app_context():
    # within this block, current_app points to app.
    db.create_all()
    app.run(debug=True)