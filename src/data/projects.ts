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
  webpage?: string
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
    report: "/reports/ima206.pdf"
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
    video: "https://www.youtube.com/watch?v=tr3473xCtOI"
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
  webpage: "https://magicbox.education/en/"
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
  video: "https://youtu.be/_JsaTByxVHo"
}



];
