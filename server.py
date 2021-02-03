from flask import Flask, render_template, jsonify
import time

app = Flask(__name__)

@app.route("/")
def homepage():
    """display homepage"""

    return render_template("base.html")

@app.route("/about")
def about():
    """display about Alissa Page"""

    return render_template("base.html")

@app.route("/testimonials")
def testimonials():
    """display the testimonials page"""

    return render_template("base.html")

@app.route("/listings")
def listings():
    """display the listings page"""

    return render_tempalte("base.html")

@app.route("/recent-sales")
def recent_sales():
    """display Alissa's recent sales"""

    return render_template("base.html")

@app.route("/contact")
def contact():
    """displays contact page"""

    return render_tempalte("base.html")