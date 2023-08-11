<a name="readme-top"></a>
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/HemantDutta/oneHealth">
    <img src="heart.gif" alt="Logo">
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

## Methodology for Solving Healthcare Diagnostics Challenges with oneHealth:

The development of oneHealth, aimed at revolutionizing healthcare diagnostics for brain tumors, heart disease, and diabetes, follows a rigorous and comprehensive methodology that leverages a variety of cutting-edge technologies, frameworks, and tools offered by Intel. The approach involves:

- **Problem Understanding and Domain Expertise:** Our team collaborates closely with medical experts to deeply understand the challenges in diagnosing brain tumors, heart disease, and diabetes. This domain knowledge guides the entire development process.

- **Architectural Design:** We design a modular architecture that incorporates React JS for the frontend, Flask for the backend, and Intel's oneAPI toolkit components such as oneDAL, TensorFlow, Intel Keras, and Intel Python for advanced data processing, machine learning, and neural network tasks.

- **Frontend Development with React JS:** React JS is utilized to create a dynamic, responsive, and user-friendly frontend interface. It enables seamless interaction, intuitive visualization of medical data, and ease of use for healthcare professionals.

- **Backend Implementation with Flask:** The Flask micro web framework forms the backbone of the backend, handling data processing, communication with frontend, and serving machine learning models. Flask's simplicity and efficiency are harnessed to optimize data flow.

- **oneAPI Toolkit Integration:** Components of Intel's oneAPI toolkit, including oneDAL, Intel TensorFlow, Intel Keras, and Intel Python, are strategically integrated. oneDAL facilitates efficient data analysis, preprocessing, and feature extraction. TensorFlow and Intel Keras enable deep neural network development, while Intel Python provides enhanced computational capabilities.

- **Model Development and Training:** Using Intel Jupyter Notebook, models are developed, trained, and fine-tuned. Intel Jupyter Notebook's interactive environment enables rapid experimentation, visualization, and collaboration among data scientists and medical experts.

- **Optimization and Scalability:** Intel's performance analysis tools are employed to optimize code, ensuring efficient execution across different hardware accelerators. The scalable nature of oneAPI ensures that the platform can handle increasing patient data and evolving diagnostic requirements.

- **Real-time Collaboration with devMesh:** Intel's devMesh facilitates collaboration, knowledge sharing, and idea exchange among researchers, developers, and healthcare practitioners, fostering innovation and continuous improvement.

- **Validation and Testing:** Rigorous testing is conducted to validate the accuracy and performance of diagnostic algorithms. Real-world medical data is used to ensure the reliability of the diagnostic outcomes.

- **Deployment and User Feedback:** The fully integrated oneHealth platform is deployed for real-world usage, and user feedback is collected to iteratively enhance the platform's usability and diagnostic capabilities.

## Frameworks, Standards, and Techniques:

- **React JS:** Frontend development, creating an interactive and responsive user interface.
- **Flask:** Backend development, handling data processing, communication, and serving machine learning models.
- **oneDAL:** Intel's Data Analytics Library for efficient data analysis and preprocessing.
- **TensorFlow and Intel Keras:** Building and training complex neural network models for accurate disease detection.
- **Intel Python:** Enhancing computational capabilities and data manipulation.
- **Intel Jupyter Notebook:** Interactive development environment for model experimentation and training.
- **Intel devMesh:** Collaboration platform for idea exchange and knowledge sharing.
- **Performance Analysis Tools:** Ensuring code optimization and efficient execution on various hardware accelerators.
- **Supabase:** Real-time database for seamless and responsive data storage and retrieval.



### Built With 

* [![ReactJs][ReactJs]][react-url]
* [![Supabase][Supabase]][sup-url]
* [![oneapi][oneapi]][oneapi-url]
*  [![Scikit-learn ][Scikit-learn]][Scikit-learn]
* [![onedal][onedal]][onedal-url]
* [![Flask][Flask]][Flask-url]
* [![python][python]][python-url]
* [![jupyter][jupyter]][jupyter-url]

## Intel oneAPI <img src="https://github.com/joelbkoshy/Assets/blob/main/oneapi2.png" alt="png" width="30">

Intel oneAPI is a comprehensive suite of software development tools designed to simplify the development of high-performance applications across a variety of architectures, including CPUs, GPUs, FPGAs, and other accelerators. One of the main benefits of oneAPI is that it enables developers to take advantage of the full power of modern hardware, including the latest CPUs and GPUs, without having to write separate code for each platform. This can help save time and reduce development costs, as well as improve the overall performance of the application. Some common uses of oneAPI include developing machine learning models, accelerating data analytics workloads, and optimizing scientific simulations.

## Merits of Using oneAPI

Utilizing the power of oneAPI offers several distinct advantages for the oneHealth project:

1. **Unified Development:** oneAPI provides a unified development environment, allowing us to seamlessly target diverse hardware architectures, including CPUs, GPUs, and FPGAs. This ensures optimal performance across different platforms.

2. **Heterogeneous Computing:** With oneAPI, we harness the capabilities of various accelerators to enhance computational efficiency. This enables us to accelerate complex computations, improving diagnostic speed and accuracy.

3. **Performance Optimization:** The performance analysis tools in oneAPI help us identify bottlenecks and optimize code for maximum efficiency. This results in faster processing times and more responsive diagnostics.

4. **Scalability:** As the oneHealth platform evolves, oneAPI's scalability ensures our application can handle increasing amounts of medical data and diagnostic requirements, providing a future-proof solution.

5. **Ecosystem Integration:** By leveraging oneAPI alongside other Intel technologies, such as oneDAL and TensorFlow, we create a synergistic ecosystem that enhances data analysis, machine learning, and neural network tasks, further improving the accuracy and scope of diagnostics.


### Use of oneDAL

In our oneHealth, we used the oneDAL library of Intel oneAPI to optimize and accelerate our machine learning models. By using the oneDAL library, we were able to take advantage of Intel's industry-leading optimization and parallelization capabilities to improve the efficiency, accuracy, and performance of our models.

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

## Future Scope of oneHealth

The oneHealth project is poised to have a transformative impact on the healthcare landscape, offering advanced diagnostic capabilities for brain tumors, heart disease, and diabetes. As we look ahead, the future scope of oneHealth extends beyond its current capabilities, encompassing crucial aspects of the government and the health sector:

- **Government Collaboration:** The integration of oneHealth into government healthcare initiatives could lead to enhanced disease surveillance, early intervention, and population health management. By leveraging the platform's accurate diagnostics, governments can make informed policy decisions and allocate resources more effectively.

- **Health Sector Advancements:** oneHealth has the potential to revolutionize patient care by providing healthcare professionals with advanced diagnostic tools. This could lead to personalized treatment plans, reduced treatment costs, and improved patient outcomes, driving positive changes across the health sector.

- **Data-Driven Decision Making:** The extensive data generated by oneHealth can contribute to health research and epidemiological studies. Insights gained from large-scale data analysis could aid in identifying disease patterns, risk factors, and potential outbreaks, empowering proactive healthcare strategies.

- **Telemedicine and Remote Diagnostics:** In a rapidly evolving healthcare landscape, oneHealth can enable remote diagnostics through telemedicine platforms. Patients in underserved areas can access accurate diagnostic assessments, bridging geographical gaps and improving healthcare access.

- **Population Health Management:** By analyzing aggregated health data, oneHealth could facilitate population-level health assessments. This data-driven approach can help identify health trends, inform public health campaigns, and guide disease prevention efforts.

- **Integration of oneAPI:** Looking even further into the future, the continued utilization of Intel's oneAPI toolkit within oneHealth can drive advancements in diagnostics. The integration of additional Intel technologies and enhancements could lead to even faster, more accurate, and more versatile diagnostic capabilities.

The future scope of oneHealth is promising, with its potential to reshape how governments and the health sector approach diagnostics and patient care. By harnessing the power of oneAPI and other cutting-edge technologies, oneHealth is poised to play a pivotal role in shaping the future of healthcare.


## What we learned
* **Deep Learning in Healthcare:** Realized the vast potential of deep learning in revolutionizing healthcare diagnostics.
* **oneDNN's Potential:** Leveraged oneDNN's power in accelerating deep learning computations, improving prediction accuracy and efficiency.
* **Medical Imaging:** Understood the complexities and intricacies of processing and analyzing medical images for diagnostic purposes.
* **Interdisciplinary Collaboration:** Learned the importance of merging technology and medical science to build impactful applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributors

- Hemant Dutta: 2247216
- Indresh Hemani: 2247217
- Joel B Koshy: 2247218
- Jimit Shukla: 2247260


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/badge/Contributers-4-green?style=for-the-badge
[contributors-url]: https://github.com/HemantDutta/oneHealth/graphs/contributors
[forks-shield]: https://img.shields.io/badge/Forks-2-blue?style=for-the-badge
[forks-url]: https://github.com/HemantDutta/oneHealth/network/members
[issues-shield]: https://img.shields.io/badge/Issues-0_OPEN-purple?style=for-the-badge
[issues-url]: https://github.com/HemantDutta/oneHealth/issues

[Supabase]:https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge
[sup-url]:https://supabase.com/
[react-url]:https://react.dev/
[ReactJs]:https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
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

