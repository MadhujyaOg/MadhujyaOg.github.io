import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/davinci.png";
import Tools2 from "/assets/tools/premierepro.png";
import Tools3 from "/assets/tools/aftereffects.png";
import Tools4 from "/assets/tools/fusion.png";
import Tools5 from "/assets/tools/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Davinci Resolve",
    ket: "Editing & Color Grading",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Premiere Pro",
    ket: "Video Editing",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "After Effects",
    ket: "Motion Graphics",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Fusion",
    ket: "Visual Effects",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Canva",
    ket: "Graphic Design",
    dad: "500",
  },
  
];

import Proyek1 from "/assets/proyek/edits.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Intros",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://youtube.com/playlist?list=PLIrbmuitvi0I&si=Sb0_EtG5D2MRapsa",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Edit playlist",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://www.youtube.com/playlist?list=PL_5eDJPsffqUhX9f5M5Rf21HW84cMTiEx",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Color Grading",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://youtu.be/15UWOg20Akw",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "URL",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "URL",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "URL",
    dad: "600",
  },
];

