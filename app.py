import re
from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
import sqlite3


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


def extract_domain(url):
    domain_pattern = r"(?:https?://)?(?:www\.)?([\w\-\.]+)"
    match = re.search(domain_pattern, url)
    if match:
        return match.group(1)
    return None



@app.route("/api/check-url", methods=["POST"])
@cross_origin()
def check_url():
    data = request.get_json()
    url = data.get("url")
    print("Received URL:", url)

    # Connect to the SQLite database
    conn = sqlite3.connect('truthify.db')
    cursor = conn.cursor()

    # Extract the domain part of the URL
    domain = extract_domain(url)

    if domain:
        # Use the domain as the pattern for the LIKE clause
        query = "SELECT * FROM data WHERE url LIKE ?"
        cursor.execute(query, ('%' + domain + '%',))
        result = cursor.fetchone()
    else:
        result = None

    # Close the database connection
    conn.close()

    # Check if the URL was found in the database
    if result:
        return jsonify({
            "status": "unsafe",
            "url": result[0],  # Assuming the URL is the first column in the data table
            "label": result[1],  # Assuming the label is the second column in the data table
            "source": result[2],  # Assuming the source is the third column in the data table
            "last_update": result[3],  # Assuming the last_update is the fourth column in the data table
            "harm_score": result[4],  # Assuming the harm_score is the fifth column in the data table
            "type": result[5]  # Assuming the type is the sixth column in the data table
        })
    else:
        return jsonify({"status": "safe"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

