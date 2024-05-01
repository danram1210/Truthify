from flask import Flask, request, flash, redirect, render_template, session, jsonify
import os
from flask_session import Session
from flask_cors import CORS, cross_origin
import random

# Create a new Flask app
app = Flask(__name__)

# Allow cross-origin requests
CORS(app)

@app.route("/endpoint", methods=["POST"])
def handle_url():
    data = request.json
    url = data.get("url")
    print("Received URL:", url)
    return "URL received successfully"

# Check URL 
@app.route("/api/check-url", methods=["POST"])
@cross_origin()
def check_url():
    data = request.get_json()
    url = data.get("url")
    print("Received URL:", url)
    safe_json = jsonify({"status": "safe"})
    unsafe_json = jsonify({"status": "unsafe"})
    result = random.choice([safe_json, unsafe_json])

    return result

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

    # Check if URL matches our DB in actual function - add this implementation once working instead of random choice
    