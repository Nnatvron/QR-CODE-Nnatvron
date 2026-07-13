import {
  Globe,
  Wifi,
  MessageCircle,
  FileText,
  QrCode,
} from "lucide-react";


const qrTypes = [

  {
    id: "website",
    title: "Website",
    description: " Create QR Code from URL",
    icon: Globe,
    active: true,
  },


  {
    id: "wifi",
    title: "WiFi",
    description: " Share WiFi access easily",
    icon: Wifi,
    active: true,
  },


  {
    id: "whatsapp",
    title: "WhatsApp",
    description: " Open WhatsApp chat instantly",
    icon: MessageCircle,
    active: false,
  },


  {
    id: "instagram",
    title: "Instagram",
    description: " Share Instagram profile",
    icon: QrCode,
    active: false,
  },


  {
    id: "pdf",
    title: "PDF",
    description: " Create QR Code for PDF files",
    icon: FileText,
    active: false,
  },


];


export default qrTypes;