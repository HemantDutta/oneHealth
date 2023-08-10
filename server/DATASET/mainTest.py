import cv2
from keras.models import load_model
from PIL import Image
import numpy as np
import joblib


# model = load_model('D:\\MCA\\4th TRIMESTER\\INTEL ONE API\\DATASET\\BrainTumor10Epochs.h5')/
model=joblib.load('model.pkl')

image=cv2.imread('D:\\MCA\\4th TRIMESTER\\INTEL ONE API\\DATASET\\pred\\pred0.jpg')

img = Image.fromarray(image)
img=img.resize((64,64))
img=np.array(img)

input_img=np.expand_dims(img,axis=0)


probabilities = model.predict(input_img)

probabilities = probabilities.tolist()
if(probabilities[0][0]==1.0):
    probabilities=1
else:
    probabilities=0
print(probabilities)
