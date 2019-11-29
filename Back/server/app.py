from flask import Flask, request
from flask.json import jsonify
import json, requests, os
from flask_cors import CORS
from flask.templating import render_template

app = Flask(__name__)
CORS(app)

@app.route('/layers/ibgebiomas/')
def getLayersBiomas():
    r = requests.get('http://brazildatacube.dpi.inpe.br/geoserver/grids/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=grids:ibge_biomas&outputFormat=application/json')
    return r.json()

@app.route('/layers/aea250k/')
def getLayersAea():
    r = requests.get('http://brazildatacube.dpi.inpe.br/geoserver/grids/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=grids:aea_250k&outputFormat=application/json')
    return r.json()

app.run(port=5000)