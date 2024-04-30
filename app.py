from flask import Flask, request

app = Flask(__name__)

@app.route("/endpoint", methods=["POST"])
def handle_url():
    data = request.json
    url = data.get("url")
    # Now we can use the 'url' variable in our Python code
    print("Received URL:", url)
    return "URL received successfully"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
