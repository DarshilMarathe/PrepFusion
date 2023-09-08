from flask import Flask, request, jsonify
import joblib
from  flask_cors import CORS

app = Flask(__name__)
cors_config = {
    "origins": ["http://localhost:3000"],
    "methods": ["GET", "POST"],
    "allow_headers": ["Content-Type"]
}

CORS(app,**cors_config)

# Load your trained machine learning models
module_clf = joblib.load('module_model.pkl')
subject_clf = joblib.load('subject_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    extractedText = data.get('extractedText')  # Updated to retrieve 'extractedText'
    print(extractedText)

    # Predict module and subject based on the extracted text
    module_prediction = module_clf.predict([extractedText])[0]
    subject_prediction = subject_clf.predict([extractedText])[0]

    return jsonify({
        'module': module_prediction,
        'subject': subject_prediction
    })

if __name__ == '__main__':
    app.run(debug=True)
