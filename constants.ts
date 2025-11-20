import { 
  Palette, 
  Fingerprint, 
  Layout, 
  Video, 
  Gamepad2, 
  Sparkles, 
  Mail, 
  Linkedin,
  Phone,
  Zap,
  Image as ImageIcon
} from 'lucide-react';

export const PROFILE_DATA = {
  name: "Preyan Mehta",
  title: "Architect turned Creative Generalist",
  bio: "I'm an Architect turned Creative Generalist, mentored 5000+ minds, and have a decade of experience in Design, Education and Entrepreneurship.",
  avatar: "", // Unused now
};

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: any;
  featured?: boolean;
  tags: string[];
}

export const PORTFOLIO_LINKS: LinkItem[] = [
  {
    id: '1',
    title: "Graphic Design Portfolio",
    description: "A curated glimpse of works ranging from posters and infographics to mockups and carousels.",
    url: "https://drive.google.com/drive/folders/1JmFkv6H4whP4OzkDD8BZxIuiLNFtd2eb?usp=sharing",
    icon: Palette,
    featured: true,
    tags: ["Posters", "Infographics", "Visual Design"]
  },
  {
    id: '2',
    title: "Identity Design Portfolio",
    description: "Strategic brand identity projects defining distinct visual languages and logos.",
    url: "https://drive.google.com/drive/folders/1Tnu_Qp6lFssWqN3uVaFp_3V31Pg76EqF?usp=sharing",
    icon: Fingerprint,
    featured: false,
    tags: ["Branding", "Logo Design", "Identity"]
  },
  {
    id: '3',
    title: "UI-UX Product Design",
    description: "User-centered product design interfaces and experience case studies.",
    url: "https://drive.google.com/drive/folders/1M1FGxWhZB_uoW5rb8dBxeUJ1yHpNwC_E?usp=sharing",
    icon: Layout,
    featured: true,
    tags: ["Figma", "UX Research", "Prototyping"]
  },
  {
    id: '4',
    title: "Video Editing & Motion",
    description: "A collection of motion graphics, animation, product videos, and reels.",
    url: "https://drive.google.com/drive/folders/1JJZj4D5ofpiGT6Co7nSuZam8ZtHI1ReS?usp=sharing",
    icon: Video,
    featured: false,
    tags: ["Motion Graphics", "Animation", "Editing"]
  },
  {
    id: '5',
    title: "Game Design Portfolio",
    description: "Personal game development projects demonstrating interactive mechanics.",
    url: "https://drive.google.com/drive/folders/14EO0HtGFsQjcEfF_CdsvIauLnhaTobjj?usp=sharing",
    icon: Gamepad2,
    featured: false,
    tags: ["Board Game", "Table Top Game", "Trading Card Game"]
  },
  {
    id: '6',
    title: "Project Anvi",
    description: "Indian anime passion project. Concept art and direction developed over 6 months.",
    url: "https://drive.google.com/drive/folders/1g4OEKbqtWbo0mhCyCl3E0MPd9cnfRxnQ?usp=sharing",
    icon: Sparkles,
    featured: true,
    tags: ["Passion Project", "Anime", "Art Direction"]
  },
  {
    id: '7',
    title: "Prototyping Tool",
    description: "Vibe coded using Figma Make within 6 hours.",
    url: "https://fixed-hand-40370323.figma.site/",
    icon: Zap,
    featured: false,
    tags: ["Figma Make", "Vibe Coding", "Prototype"]
  },
  {
    id: '8',
    title: "Relighting Photos via Nano Banana",
    description: "AI relighting tool vibe designed in 6 hours using Figma Make.",
    url: "https://lapel-camel-66842984.figma.site/",
    icon: ImageIcon,
    featured: false,
    tags: ["AI", "Figma Make", "Nano Banana"]
  }
];

export const CONTACT_LINKS = [
  { id: 'email', icon: Mail, url: "mailto:preyanmehta.ds@gmail.com", label: "Email" },
  { id: 'linkedin', icon: Linkedin, url: "https://www.linkedin.com/in/preyanmehta/", label: "LinkedIn" },
  { id: 'phone', icon: Phone, url: "tel:+919638144398", label: "Mobile" },
];