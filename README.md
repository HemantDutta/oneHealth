<a name="readme-top"></a>
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/HemantDutta/oneHealth">
    <img src="https://github.com/HemantDutta/oneHealth/blob/main/client/public/assets/images/oh_heart.png" alt="Logo">
  </a>

  <h3 align="center">oneHealth</h3>

  <p align="center">
    Predict, Prevent, and Protect with oneHealth!
    <br />
    <a href="https://github.com/HemantDutta/oneHealth"><strong>Explore the docs »</strong></a>
    <br />
    <br />
<!--     <a href="https://drive.google.com/file/d/1FttMlM96K5njpDYt_v4MtVvyPX62REhj/view">View Video</a>
    ·
    <a href="https://raison024-smart-garbage-segregation-deploymentapp-lfq9yb.streamlit.app/">View Demo</a>
    · -->
    <a href="https://github.com/HemantDutta/oneHealth/issues">Report Bug</a>
    ·
    <a href="https://github.com/HemantDutta/oneHealth/issues">Request Feature</a>
  </p>
</div>

## Project Overview
oneHealth integrates machine learning and medical science to offer potential early detection solutions for brain tumors, heart diseases, and diabetes. The application leverages advanced data processing techniques to predict the presence of conditions. For heart and diabetes predictions, the app evaluates multiple health parameters for predictions.

## User Experience
The interface is clean, user-friendly, and designed keeping in mind the urgency and gravity of potential diagnoses. Users simply upload their medical images or input health parameters and receive predictions in real-time.

## Value Proposition
Early detection can be a game-changer in the prognosis of many health conditions. With oneHealth, users can have a preliminary screening tool at their fingertips, promoting proactive healthcare and timely medical interventions.


<!-- TABLE OF CONTENTS -->
<!--- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#inspiration">Inspiration</a></li>
        <li><a href=#social-impact>Social Impact</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#intel-oneapi">Intel OneAPI</a>
      <ul>
        <li><a href="#use-of-onednn-in-our-project">Use of oneDNN and TensorFlow in our project</a></li>
      </ul>
    </li>
    <li><a href="#what-it-does">What it does</a></li>
    <li><a href="#how-we-built-it">How we built it</a></li>
    <li><a href="#what-we-learned">What we learned</a></li>
  </ol>
</details> --->



<!-- ABOUT THE PROJECT -->
## About The Project
**oneHealth** is a cutting-edge web application aimed at early disease detection, including brain tumors, heart conditions, and diabetes. By leveraging the power of machine learning and image processing, it enables users to gain insights into their health conditions based on their brain scans and other health parameters, potentially saving lives through early intervention.

### Inspiration
Early detection of life-threatening conditions like brain tumors, heart diseases, and diabetes can significantly improve the prognosis. **oneHealth** aims to bridge the gap between the advancements in AI/ML and the practical application of these technologies in healthcare. The ability to predict a health condition, simply by processing brain scans and health data, can democratize healthcare, making preliminary screening accessible to many.

### Social Impact
* **Empowerment through Information:** Users can make informed decisions regarding their health, armed with predictions from **oneHealth**.
* **Early Intervention:** Early detection leads to timely treatments, potentially preventing severe disease progression.
* **Support for Healthcare Professionals:** Doctors and clinicians can utilize **oneHealth** for preliminary screenings, streamlining patient care.

### Built With 


* [![oneapi][oneapi]][oneapi-url]
*  [![Scikit-learn ][Scikit-learn]][Scikit-learn]
* [![onedal][onedal]][onedal-url]
* [![Flask][Flask]][Flask-url]
* [![python][python]][python-url]
* [![jupyter][jupyter]][jupyter-url]

## Intel oneAPI <img src="https://github.com/joelbkoshy/Assets/blob/main/oneapi2.png" alt="png" width="30">

Intel oneAPI is a comprehensive suite of software development tools designed to simplify the development of high-performance applications across a variety of architectures, including CPUs, GPUs, FPGAs, and other accelerators. One of the main benefits of oneAPI is that it enables developers to take advantage of the full power of modern hardware, including the latest CPUs and GPUs, without having to write separate code for each platform. This can help save time and reduce development costs, as well as improve the overall performance of the application. Some common uses of oneAPI include developing machine learning models, accelerating data analytics workloads, and optimizing scientific simulations.



### Use of oneDAL

In our Bengaluru House Price Prediction project, we used the oneDAL library of Intel oneAPI to optimize and accelerate our machine learning models. By using the oneDAL library, we were able to take advantage of Intel's industry-leading optimization and parallelization capabilities to improve the efficiency, accuracy, and performance of our models.

To use oneDAL in our project, we applied the sklearnex patch to our machine learning models. This was done using the code:

```
from sklearnex import patch_sklearn
patch_sklearn()
```

This allowed us to seamlessly integrate oneDAL into our existing codebase and take advantage of its powerful capabilities without having to rewrite our entire code. With oneDAL, we were able to accelerate the training of our models and improve their accuracy, allowing us to make more accurate predictions about the prices of houses in Bengaluru based on various features such as square feet, bedrooms, bathrooms, and location.

Overall, the use of oneDAL in our project was crucial to achieving the level of accuracy, efficiency, and optimization necessary for accurate house price predictions. By leveraging the power of Intel's oneAPI platform, we were able to take our machine learning models to the next level and produce results that exceeded our expectations.

## What it does
**oneHealth** aids in the preliminary prediction of significant health conditions:
* **Brain Tumor Detection:** Users can upload their brain scan images, which the model processes to predict the likelihood of a tumor.
* **Heart and Diabetes Detection:** By inputting specific health metrics, users receive predictions about potential heart-related issues or diabetes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How we built it
* Initialization of Libraries and Frameworks
* Importing and Preprocessing Datasets
* Building and Validating ML Models
* Integrating Image Processing Techniques
* Training Models using TensorFlow and oneDNN

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## What we learned
* **Deep Learning in Healthcare:** Realized the vast potential of deep learning in revolutionizing healthcare diagnostics.
* **oneDNN's Potential:** Leveraged oneDNN's power in accelerating deep learning computations, improving prediction accuracy and efficiency.
* **Medical Imaging:** Understood the complexities and intricacies of processing and analyzing medical images for diagnostic purposes.
* **Interdisciplinary Collaboration:** Learned the importance of merging technology and medical science to build impactful applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/badge/Contributers-4-green?style=for-the-badge
[contributors-url]: https://github.com/raison024/Smart-Garbage-Segregation/graphs/contributors
[forks-shield]: https://img.shields.io/badge/Forks-2-blue?style=for-the-badge
[forks-url]: https://github.com/raison024/Smart-Garbage-Segregation/network/members
[issues-shield]: https://img.shields.io/badge/Issues-0_OPEN-purple?style=for-the-badge
[issues-url]: https://github.com/raison024/Smart-Garbage-Segregation/issues




[python]: https://img.shields.io/badge/Python-3470a3?&logoColor=white
[python-url]: https://www.python.org/
[jupyter]: https://img.shields.io/badge/Jupyter%20Notebook-da5b0b?&logoColor=white
[jupyter-url]: https://jupyter.org/
[Scikit-learn]: https://img.shields.io/badge/Scikit-learn-20232A?&logoColor=61DAFB
[Scikit-learn-url]: https://www.intel.com/content/www/us/en/docs/oneapi/programming-guide/2023-0/intel-oneapi-data-analytics-library-onedal.html
[Flask]: https://img.shields.io/badge/Flask-90E0EF?&logoColor=white
[Flask-url]: https://www.intel.com/content/www/us/en/docs/oneapi/programming-guide/2023-0/intel-oneapi-data-analytics-library-onedal.html
[oneapi]: https://img.shields.io/badge/Intel%20oneAPI-20232A?&logoColor=61DAFB
[oneapi-url]: https://www.intel.com/content/www/us/en/docs/oneapi/programming-guide/2023-0/intel-oneapi-data-analytics-library-onedal.html
[onedal]: https://img.shields.io/badge/oneDAL-20232A?&logoColor=61DAFB
[onedal-url]: https://www.intel.com/content/www/us/en/developer/tools/oneapi/onedal.html

