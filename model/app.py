import pickle
from flask import Flask, request, app, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

regmodel = pickle.load(open('gold_price_model.pkl', 'rb'))

@app.route('/predict_api', methods=['POST'])
def predict_api():
    try:
        data = request.json['data'] 
        input_data = np.array(list(data.values())).reshape(1, -1)
        if input_data.shape[1] != 4:
            return jsonify({"error": "Invalid number of features. Expected 4."}), 400

        output = regmodel.predict(input_data)
        return jsonify({"prediction": float(output[0])})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        spx = float(data['SPX'])
        uso = float(data['USO'])
        slv = float(data['SLV'])
        eur_usd = float(data['EUR/USD'])

        input_data = np.array([[spx, uso, slv, eur_usd]])

        output = regmodel.predict(input_data)
        return jsonify({"prediction": float(output[0])})

    except KeyError as e:
        return jsonify({"error": f"Missing key: {e}"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)