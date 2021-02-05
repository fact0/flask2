from flask import Flask, render_template, request, jsonify
import requests
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
API_BASE_URL = 'http://www.numbersapi.com'


def get_lucky_fact(num):
    res = requests.get(f'{API_BASE_URL}/{num}?json')

    data = res.json()
    fact = data['text']
    return fact


def get_year_fact(year):
    res = requests.get(f'{API_BASE_URL}/{year}/year?json')

    data = res.json()
    fact = data['text']
    return fact


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=["POST"])
def lucky_num():
    data = request.json
    r = random.randint(0, 100)
    errors = {'errors': {}}

    if data['name']:
        name = data['name']
    else:
        errors['errors'].update({
            "name": ["This field is required."]})
    if data['email']:
        email = data['email']
    else:
        errors['errors'].update({
            "email": ["This field is required."]
        })
    if data['year'] and int(data['year']) >= 1900 and int(data['year']) <= 2000:
        year = data['year']
    else:
        errors['errors'].update({
            "year": ["Please enter a year between 1900 and 2000."]
        })
    if data['color'] not in ('red', 'green', 'organge', 'blue'):
        errors['errors'].update({
            "color": ["Please pick a color of red, green, orange or blue."]
        })
    else:
        color = data['color']

    if len(errors['errors']) > 0:
        resp_json = jsonify(errors)
        return (resp_json, 201)

    fact_resp = {
        'num': {
            'fact': get_lucky_fact(r),
            'num': r,
        },
        'year': {
            'fact': get_year_fact(year),
            'year': year,
        },
    }

    resp_json = jsonify(fact_resp)
    return (resp_json, 201)
