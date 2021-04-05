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

    return render_templae("base.html")

@app.route("/recent-sales")
def recent_sales():
    """display Alissa's recent sales"""

    return render_template("base.html")

@app.route("/contact")
def contact():
    """displays contact page"""

    return render_template("base.html")

if __name__ == '__main__':
    # connect_to_db(app)
    # only this host number works for Yuri, look into why
    app.run(host='127.0.0.1', debug=True, port=5002)