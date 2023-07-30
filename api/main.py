from flask import Flask
from flask_cors import cross_origin
app = Flask(__name__)


@app.route("/")
@cross_origin()
def hello_world():
    return {"message": "hello world", 
            "from": "rutam",}

if __name__ == "__main__":
    app.run(debug=True)