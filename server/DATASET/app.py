import os
import tensorflow as tf
import numpy as np
from keras.preprocessing import image
from PIL import Image
import cv2
from keras.models import load_model
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import joblib
import pickle


app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# model = joblib.load('model.pkl')
model = load_model('BrainTumor10Epochs.h5')
print('Model loaded. Check http://127.0.0.1:5000/')

# Get Heart Disease Model
filename = 'RandomForest.pkl'
clf = pickle.load(open(filename, "rb"))


def get_className(classNo):
	if classNo==0:
		return "Brain Tumor Not Detected"
	elif classNo==1:
		return "Brain Tumor Detected"


def getResult(img):
    image=cv2.imread(img)
    image = Image.fromarray(image, 'RGB')
    image = image.resize((64, 64))
    image=np.array(image)
    input_img = np.expand_dims(image, axis=0)
    result=model.predict(input_img)
    return result


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
@cross_origin()
def upload():
    if request.method == 'POST':
        f = request.files['file']
        # print("f is : ",f
        # model = load_model(''))
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)
        value=getResult(file_path)
        result=get_className(value) 
        return result
    return None

# @ app.route('/disease-predict', methods=['POST'])
# @cross_origin()
# def disease_prediction():
#     title = 'Early Heart Disease Prediction'
#
#     if request.method == 'POST':
#         a = int(request.form['age'])
#         s = int(request.form['sex'])
#         cp = int(request.form['cp'])
#         tr = int(request.form['trestbps'])
#         ch = int(request.form['chol'])
#         f = int(request.form['fbs'])
#         r = int(request.form['restecg'])
#         th = int(request.form['thalach'])
#         e = int(request.form['exang'])
#         o = float(request.form['oldpeak'])
#         sl = int(request.form['slope'])
#         c = int(request.form['ca'])
#         thl = int(request.form['thal'])
#
#         data = np.array([[ a , s , cp , tr , ch , f , r , th , e , o , sl , c , thl]])
#         my_prediction = clf.predict(data)
#         print(my_prediction[0])
#         if my_prediction[0] == 0:
#             return "You won't have any heart disease."
#         else:
#              return "You might have a heart disease."
#         return "Break"


if __name__ == '__main__':
    app.run(debug=True,port=5000)