from flask import Flask, request
from firebase_admin import credentials, firestore, initialize_app
from google.cloud import firestore

app = Flask(__name__)
cred = credentials.ApplicationDefault()
initialize_app(cred, {'projectId': 'intern-dashbaord-b288d'})

@app.route('/', methods=['POST'])
def save_payload_to_firebase():
    payload = request.get_json()  # Assuming the JSON payload is sent in the request body
    
    # Save the payload to Firebase
    db = firestore.Client()
    collection_ref = db.collection('payloads')
    collection_ref.add(payload)

    return 'Payload saved successfully'

if __name__ == '__main__':
    app.run(debug=True)
