import { text } from "stream/consumers";

export type Project = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  summary: string;
  repo?: string;
  cover?: string;
  report?: string;
  video?: string;
  webpage?: string;
  details: string;

};

export const projects: Project[] = [
  {
    slug: "lv-segmentation",
    title: "LVSegmenter: Left Ventricle Segmentation",
    year: 2025,
    tags: ["Télécom Paris","Medical Imaging", "Image Processing", "Deep Learning"],
    summary:
      "Custom model for left ventricle segmentation in cardiac MRI. Based on a Kaggle-style challenge (IMA205: Apprentissage pour l'image et la reconnaissance d'objets).",
    repo: "https://github.com/joelcabred/challenge-ima205/",
    cover: "/covers/lvseg.png",
    report: "/reports/ima205.pdf", 
    details: "Project developed for the course 'Apprentissage pour l'image et la reconnaissance d'objets' at Télécom Paris. The goal was to classify subjects based on their cardiac MRI scans into five categories: Healthy controls, Myocardial infarction, Dilated cardiomyopathy, Hypertrophic cardiomyopathy, and Abnormal right ventricle. The pipeline was implemented in Python using TorchIO for medical image handling and augmentation, Nibabel for MRI loading, and scikit-learn/XGBoost for feature-based classification. We extracted features such as ventricular volumes, myocardial thickness, and ejection fractions from LV segmentations derived via convex hull operations on myocardium masks. The method achieved a Dice score of 0.9999 for segmentation, and in classification, SVM and Logistic Regression reached 100% validation accuracy while XGBoost achieved 97.5% with data augmentation. The most discriminative features were left ventricular ejection fraction, ventricular volumes, and myocardial thickness."
    
  },
  {
    slug: "painting-classification",
    title: "Figurative vs Abstract Painting Classification",
    year: 2025,
    tags: ["Télécom Paris","Computer Vision", "Deep Learning", "Image Processing"],
    summary:
        "Classifying paintings into figurative vs abstract using ResNet50 variants (single-branch, two-branch, dense fusion). Best model achieved ~90% macro F1-score.",
    cover: "/covers/ima206.jpg",
    repo: "https://github.com/NicolasNoya/PaintingClassification",
    report: "/reports/ima206.pdf",
    details: "Project developed for the course 'Modèles génératifs, méthodes par patchs, photographie computationnelle' at Télécom Paris. The objective was to classify paintings as figurative or abstract using convolutional neural networks. The implementation, built entirely in PyTorch, includes a modular training interface supporting both single and two-branch ResNet-50 architectures, with features such as mixed-precision training, weighted cross-entropy loss to handle class imbalance, Gaussian noise regularization, and TensorBoard profiling for monitoring. We compared several variants combining global and local visual representations. The best-performing model reached a macro F1-score of 90%, demonstrating strong generalization and robustness. Grad-CAM visualizations revealed that the model mainly relied on recognizable elements such as faces or objects for classification, reflecting its reliance on semantic rather than stylistic cues."
},
{
    slug: "robotic-face",
    title: "Robotic Face",
    year: 2021,
    tags: ["UDELAR","Robotics", "Arduino", "Computer Vision"],
    summary:
        "Animatronic robotic face capable of imitating emotions and tracking humans with eyes and neck. Developed with Arduino Mega, ROS Noetic, PID control and face_recognition.",
    cover: "/covers/robotic-face.png", 
    repo: "https://github.com/joelcabred/robotic-face", 
    report: "/reports/robotic-face.pdf",
    video: "https://www.youtube.com/watch?v=tr3473xCtOI",
    details: "Project initially developed in 2021 at Universidad de la República (Uruguay) for the course Introducción a las TIC – Robotics track. The goal was to build an animatronic robotic face capable of expressing emotions and tracking human faces. Based on James Bruton's 3D printed model (with a custom eyebrow module), the system used an Arduino Mega to control 11 servomotors managing the eyes, eyelids, neck, and eyebrows. In 2024, the project was expanded with ROS Noetic integration, object-oriented control classes in C++, and real-time face tracking using the face_recognition library. A PID controller was added to achieve smooth and natural motion across the neck and eye axes, with ROS–Arduino communication handled via rosserial_arduino."
},
{
  slug: "caja-magica",
  title: "Caja Mágica — Cognitive Development Game",
  year: 2022,
  tags: ["UDELAR","Extension", "Arduino", "Robotics"],
  summary:
  "Second prototype of a 'magic box' device for a card game aimed at cognitive development in children. Built with Arduino-based hardware (RFID, light, sound) and evaluated in classroom settings, with tools for data collection and analysis. Conducted as an academic extension project with Engineering and Psychology faculties.",  // cover: "/covers/caja-magica.png", // podés poner un render o un ícono
  // repo: "https://...", // si tenés
  // report: "/reports/caja-magica.pdf" // si tenés
  webpage: "https://magicbox.education/en/",
  details: "Conducted as an academic extension project between the Faculties of Engineering and Psychology (Universidad de la República). The goal was to develop a “magic box” device for a cognitive card game that fosters peer interaction and mathematical reasoning in children. The prototype included two Arduino Mega boards communicating in a controller–peripheral setup, with RFID readers, LEDs, and sound feedback. In addition, a Python–based desktop interface (built with PySimpleGUI and CSV data handling) was designed to easily load card configurations, record gameplay data, and allow non-technical users to analyze sessions intuitively. The system was validated in real classroom environments with children."
},
{
  slug: "ima201-microtexture-inpainting",
  title: "Inpainting of Microtextures (IMA201)",
  year: 2024,
  tags: ["Télécom Paris","Image Processing", "Image Inpainting"],
  summary:
    "Implementation of Gaussian-based ADSN models for inpainting microtextures. Evaluated parameters w and k_max across RGB, grayscale and complex textures; achieved realistic completions outperforming some existing methods.",
  cover: "/covers/ima201.png", // poné una imagen representativa
  report: "/reports/ima201.pdf",
  video: "https://youtu.be/_JsaTByxVHo",
  details: "Project developed for the course 'Introduction au traitement des images' (IMA201) at Télécom Paris. The goal was to reconstruct missing regions in microtexture images using Gaussian conditional simulation based on the ADSN model. The algorithm was implemented from scratch in Python using NumPy, SciPy, and OpenCV, with user interaction for region masking, FFT-based convolution optimization, and iterative conditional estimation via the Conjugate Gradient Descent (CGD) method. The implementation supports both grayscale and RGB textures, with experiments evaluating parameters such as boundary width (w), iteration count (kmax), and the impact of spectral centering and padding. Results demonstrated visually consistent texture inpainting and confirmed the efficiency of the ADSN-based approach compared to classical methods."
}



];


export function prepareDocs(projects: Project[]){

  const arr = []
  for (let index = 0; index < projects.length; index++) {
    const element = projects[index];
    let str = 'Title: ' + element.title + '\n';
    str+= 'Year: ' + element.year + '\n';
    str+= 'Tags: ' + element.tags.join(', ') + '\n';
    str+= 'Summary: ' + element.summary + '\n';
    str+= 'Details: ' + element.details;


    arr.push({
      id: element.slug,
      text: str,
      meta: element
    });

  }
  return arr;
}