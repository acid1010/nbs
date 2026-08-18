import { zh } from "./content-zh";

export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
  image: string;
}

export interface ProductSpecGroup {
  title: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface ProductItem {
  category: string;
  slug: string;
  description: string;
  image: string;
  items: string[];
  flagship?: string;
  detail: {
    tagline: string;
    overview: string[];
    specGroups: ProductSpecGroup[];
    applications: string[];
    gallery: {
      src: string;
      alt: string;
      caption: string;
    }[];
  };
}

export interface ProjectItem {
  name: string;
  client: string;
  location: string;
  year: string;
  service: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface ContentData {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    products: string;
    projects: string;
    contact: string;
  };
  hero: {
    tagline: string;
    headline: string;
    description: string;
    ctaContact: string;
    ctaServices: string;
    ctaQuotation: string;
  };
  about: {
    title: string;
    subtitle: string;
    whyTitle: string;
    whySubtitle: string;
    description: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string[];
    valuesTitle: string;
    values: {
      title: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    ctaContact: string;
    list: ServiceItem[];
  };
  products: {
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaDetails: string;
    list: ProductItem[];
  };
  productDetail: {
    backToProducts: string;
    overviewTitle: string;
    itemsTitle: string;
    specsTitle: string;
    applicationsTitle: string;
    galleryTitle: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaWhatsapp: string;
    viewProject: string;
    clientLabel: string;
    locationLabel: string;
  };
  projects: {
    title: string;
    subtitle: string;
    list: ProjectItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    list: TestimonialItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    addressTitle: string;
    address: string;
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    whatsappTitle: string;
    whatsapp: string;
    whatsappCta: string;
    whatsappPreFilledMsg: string;
    wechatTitle: string;
    wechatId: string;
    wechatUrl: string;
    wechatCta: string;
    form: {
      name: string;
      company: string;
      phone: string;
      email: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMsg: string;
      successBtnWa: string;
      successBtnClose: string;
    };
  };
  footer: {
    copyright: string;
    legal: string;
  };
}

export const content: { en: ContentData; id: ContentData; zh: ContentData } = {
  en: {
    meta: {
      title: "PT. Nyi Bahari Steel | Heavy Equipment, K3 Safety & Manpower",
      description: "Construction supplier in Purwakarta, West Java: heavy equipment rental, certified K3 safety gear, technical tools, plumbing & electrical installation, and project manpower outsourcing.",
      keywords: "PT Nyi Bahari Steel, heavy equipment rental Purwakarta, excavator rental West Java, K3 safety supplier, PPE construction, technical tools industrial, plumbing electrical installation factory, construction manpower outsourcing Indonesia, project workers Purwakarta",

    },

    nav: {
      home: "Home",
      about: "Why Choose Us",
      services: "Services",
      products: "Products",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tagline: "Industrial Reliability",
      headline: "Heavy Equipment, Safety Gear & Skilled Manpower for Industrial Projects",
      description: "Based in Purwakarta, West Java — we supply heavy equipment, certified K3 safety gear, technical tools, plumbing & electrical installation, and project manpower for construction and industrial sites.",

      ctaContact: "Contact Us",
      ctaServices: "View Services",
      ctaQuotation: "Request Quotation",
    },
    about: {
      title: "About Us",
      subtitle: "PT. Nyi Bahari Steel",
      whyTitle: "Why Choose Us",
      whySubtitle: "A reliable supplier for safer, smoother project operations.",
      description: "PT. Nyi Bahari Steel is a construction supplier company that provides project needs including heavy equipment, safety equipment, technical tools, plumbing and electrical installation, and manpower outsourcing. We are committed to becoming a trusted partner for construction, industrial, and manufacturing companies by providing reliable products, professional services, and responsive support.",
      visionTitle: "Our Vision",
      vision: "To be the leading and most trusted industrial partner in Indonesia, delivering high-caliber construction supplies, precise installations, and qualified manpower that empower clients to build a safer and more efficient future.",
      missionTitle: "Our Mission",
      mission: [
        "Deliver premium-grade technical equipment and safety gear that meet global standards.",
        "Provide skilled, certified, and reliable manpower tailored to specific project demands.",
        "Ensure top-tier execution of electrical and plumbing infrastructure installations.",
        "Foster long-term, mutually beneficial partnerships through operational responsiveness and absolute integrity."
      ],
      valuesTitle: "Company Values",
      values: [
        {
          title: "Safety First",
          description: "Protecting lives and project integrity by providing only tested, certified K3 safety gear and adhering to strict occupational safety standards."
        },
        {
          title: "Absolute Integrity",
          description: "Building trust through honest pricing, transparent timelines, and delivering exactly what we promise."
        },
        {
          title: "Operational Excellence",
          description: "Demanding high quality across our heavy equipment fleet, technical tools, and manual craftsmanship."
        },
        {
          title: "Responsive Support",
          description: "Understanding that downtime is costly. We respond rapidly to quote requests, field changes, and logistical needs."
        }
      ]
    },
    services: {
      title: "Our Core Services",
      subtitle: "Comprehensive solutions tailored for construction, manufacturing, and industrial operations.",
      ctaContact: "Consult Service",
      list: [
        {
          title: "Heavy Equipment Supply",
          description: "We provide a modern, well-maintained fleet of heavy machinery to streamline your earthmoving, lifting, and transport needs.",
          items: ["Excavator", "Towing Services", "Forklift", "Mobile Crane", "Dump Truck", "Dozer", "Vibro Roller", "Project support machinery"],
          image: "/heavy-equipment.jpg"
        },
        {
          title: "Safety Equipment Supply",
          description: "Equip your workforce with reliable occupational health and safety (K3) gear to minimize risk and comply with regulations.",
          items: ["Safety Helmets", "Steel-toe Safety Shoes", "High-visibility Vests", "Industrial Gloves", "Full Body Harnesses", "Safety Goggles", "Masks & Respirators", "Fire Extinguishers"],
          image: "/safety-equipment.jpg"
        },
        {
          title: "Technical Tools & Equipment",
          description: "High-grade industrial power tools and hardware essentials for workshops, fabrication, and structural assembly.",
          items: ["Welding Machines", "Angle Grinders", "Power Drills & Drivers", "Heavy-duty Tool Sets", "Precision Measuring Tools", "Industrial Cutting Tools", "Electrical Hand Tools", "Project Raw Materials"],
          image: "/technical-tools.jpg"
        },
        {
          title: "Plumbing & Electrical Installation",
          description: "Professional utility infrastructure setup and maintenance for commercial buildings, factories, and warehouses.",
          items: ["Clean water pipe laying", "Industrial wastewater systems", "Heavy-duty pump setup", "Electrical panel assembly", "Cabling & wire management", "Plumbing & electrical maintenance"],
          image: "/plumbing-electrical.jpg"
        },
        {
          title: "Project Manpower Outsourcing",
          description: "On-demand access to certified, highly-trained technical and manual workers for civil and industrial operations.",
          items: ["Certified Welders", "General Helpers", "Mechanical Fitters", "Heavy Equipment Operators", "Electrical Technicians", "Plumbing Technicians", "Maintenance Crews"],
          image: "/manpower-outsourcing.jpg"
        }
      ]
    },
    products: {
      title: "Product Categories",
      subtitle: "Explore our curated catalog of industrial materials, safety gear, and technical machinery.",
      ctaQuote: "Request Quotation",
      ctaDetails: "View Details",
      list: [
        {
          category: "Infrastructure Materials",
          slug: "infrastructure-materials",
          description: "Industrial grade pipes, cables, switches, and valves essential for core facility installations.",
          image: "/hydrant-cover.png",
          items: ["HDPE & PVC Water Pipes", "Submersible Water Pumps", "SGP & Black Steel Pipes", "Industrial Electrical Cables"],
          flagship: "Instalasi Hydrant — fire protection piping, pumps & valves",
          detail: {
            tagline: "Utility-grade materials with mill certificates",
            overview: [
              "We supply industrial-grade pipes, cables, valves, and electrical components for facility utility installations — from factory clean water systems to estate-wide wastewater networks. Materials ship with mill test certificates and brand documentation.",
              "Our team also executes the installation: pipe laying, jointing, testing, and electrical termination, giving you a single accountable party for both material quality and workmanship."
            ],
            specGroups: [
              {
                title: "Material Range",
                specs: [
                  { label: "Water Pipes", value: "HDPE PN10/PN16 & PVC AW/D, 20–630mm" },
                  { label: "Steel Pipes", value: "SGP & black steel, schedule 40/80" },
                  { label: "Pumps", value: "Submersible, centrifugal & booster pumps" },
                  { label: "Cables", value: "NYY, NYFGBY, NYM industrial power cables" },
                  { label: "Valves & Fittings", value: "Gate, ball, check valves & HDPE fittings" },
                  { label: "Electrical", value: "Panels, breakers, conduits & trays" }
                ]
              },
              {
                title: "Quality & Delivery",
                specs: [
                  { label: "Certification", value: "Mill test certificates per batch" },
                  { label: "Testing", value: "Hydrotest & continuity test support" },
                  { label: "Lead Time", value: "3–14 days ex-stock or indent" },
                  { label: "Installation", value: "Optional supply-and-install packages" }
                ]
              }
            ],
            applications: [
              "Factory clean water & wastewater systems",
              "Industrial estate utility networks",
              "Fire sprinkler & hydrant piping",
              "Warehouse electrical distribution",
              "Pump house & utility room builds"
            ],
            gallery: [
              {
                src: "/real_life_photos.jpeg",
                alt: "Large-diameter HDPE pipeline pre-assembly at harbour logistics yard",
                caption: "HDPE pipeline supply & pre-assembly — Tanjung Priok"
              },
              {
                src: "/real_life_photos5.jpeg",
                alt: "Overhead fire sprinkler piping installation in a petrochemical plant",
                caption: "Fire sprinkler piping — Cilegon"
              }
            ]
          }
        },
        {
          category: "Project Manpower Outsourcing",
          slug: "project-manpower-outsourcing",
          description: "Skilled and semi-skilled labor mobilization — welders, fitters, operators, riggers, and general helpers — deployed flexibly for construction and industrial sites.",
          image: "/manpower-outsourcing-cover.png",
          items: ["Certified Welders & Fitters", "Heavy Equipment Operators", "Riggers & Scaffolders", "General Helpers & Technicians"],
          detail: {
            tagline: "Certified, field-proven crews ready to mobilize",
            overview: [
              "We mobilize certified technical and manual workers for construction, industrial, and manufacturing projects across West Java and beyond. Every deployment is matched to your scope — from a single certified welder to a full multi-discipline crew.",
              "All workers are screened for competency, equipped with valid certifications (SIO for operators, welder qualification tests, K3 basic training), and covered by work insurance. We handle payroll, permits, and site administration so your team can focus on delivery."
            ],
            specGroups: [
              {
                title: "Available Trades",
                specs: [
                  { label: "Certified Welders", value: "SMAW / GMAW / GTAW, 3G–6G positions" },
                  { label: "Mechanical Fitters", value: "Pipe fitting & structural assembly" },
                  { label: "Heavy Equipment Operators", value: "Excavator, forklift, crane — SIO certified" },
                  { label: "Riggers & Scaffolders", value: "Certified rigging & scaffolding crews" },
                  { label: "Technicians", value: "Electrical, plumbing & maintenance" },
                  { label: "General Helpers", value: "Trained site support & material handling" }
                ]
              },
              {
                title: "Deployment Terms",
                specs: [
                  { label: "Contract Period", value: "Daily, weekly, monthly or per-project" },
                  { label: "Mobilization Time", value: "3–7 working days from PO" },
                  { label: "Coverage Area", value: "West Java, Jakarta, Banten, Central Java" },
                  { label: "Compliance", value: "Insurance, permits & PPE included" }
                ]
              }
            ],
            applications: [
              "Plant maintenance & shutdown projects",
              "Structural steel fabrication & erection",
              "Pipeline installation & repair crews",
              "Warehouse & factory fit-out works",
              "Civil construction site support"
            ],
            gallery: [
              {
                src: "/real_life_photos6.jpeg",
                alt: "NBS manpower crew performing anti-corrosive pipe painting at a petrochemical site",
                caption: "Painting & corrosion protection crew — Cilegon, Banten"
              },
              {
                src: "/real_life_photos4.jpeg",
                alt: "Technicians installing high-level warehouse utilities on scissor lifts",
                caption: "High-level utility installation technicians — Karawang"
              }
            ]
          }
        },
        {
          category: "Heavy Equipment Fleet",
          slug: "heavy-equipment-fleet",
          description: "High-performance loaders, excavators, and utility machinery available for flexible short or long-term lease.",
          image: "/heavy-equipment-cover.png",
          items: ["Excavator 20-Ton Class", "Forklift 3-10 Ton Capacity", "Mobile Crane 25-50 Ton", "Vibro Roller 10-Ton"],
          detail: {
            tagline: "Well-maintained machinery with certified operators",
            overview: [
              "Our heavy equipment fleet is maintained on strict service schedules and inspected before every mobilization. Units are available for bare rental or with our SIO-certified operators, giving you flexibility for earthmoving, lifting, and material transport scopes.",
              "We support short-term daily rentals for spot jobs as well as long-term project contracts, with backup unit arrangements to keep your site running if a machine goes down."
            ],
            specGroups: [
              {
                title: "Fleet Highlights",
                specs: [
                  { label: "Excavator", value: "20-ton class, breaker & auger attachments" },
                  { label: "Forklift", value: "3–10 ton diesel units, indoor & rough terrain" },
                  { label: "Mobile Crane", value: "25–50 ton, telescopic boom" },
                  { label: "Vibro Roller", value: "10-ton soil & asphalt compaction" },
                  { label: "Dump Truck", value: "6x4, 20–25 m³ capacity" },
                  { label: "Dozer", value: "D6-class for clearing & grading" }
                ]
              },
              {
                title: "Rental Terms",
                specs: [
                  { label: "Rental Period", value: "Daily, weekly or monthly" },
                  { label: "Operator", value: "Optional — SIO certified operators available" },
                  { label: "Mobilization", value: "Lowbed transport arranged by NBS" },
                  { label: "Maintenance", value: "On-site service & backup units included" }
                ]
              }
            ],
            applications: [
              "Site clearing, cut & fill earthworks",
              "Material loading & yard logistics",
              "Structural lifting & equipment erection",
              "Road base & soil compaction",
              "Industrial estate infrastructure works"
            ],
            gallery: [
              {
                src: "/real_life_photos2.jpeg",
                alt: "Excavator ditching and positioning industrial drainage pipes",
                caption: "Excavator-supported pipe laying — Cikarang"
              },
              {
                src: "/real_life_photos3.jpeg",
                alt: "Long-run HDPE utility pipeline laid along industrial estate trenches",
                caption: "Earthworks for main utility pipeline — Kendal"
              }
            ]
          }
        },
        {
          category: "K3 Safety Gear",
          slug: "k3-safety-gear",
          description: "Certified safety equipment protecting workers from head to toe, compliant with SNI and international standards.",
          image: "/safety-equipment-cover.png",
          items: ["SNI Safety Helmets", "Heavy-duty Safety Boots", "Reflective Safety Vests", "Chemical Resistant Gloves"],
          detail: {
            tagline: "Certified protection, complete documentation",
            overview: [
              "We supply occupational health and safety (K3) equipment that complies with SNI and international standards (ANSI, EN, CE). Every delivery includes certificates of conformity and batch documentation — critical for passing client safety audits.",
              "From single-site crews to multi-hundred-worker mobilizations, we handle volume orders with consistent stock, branded options (company logo printing), and scheduled replenishment for long-running projects."
            ],
            specGroups: [
              {
                title: "Product Range",
                specs: [
                  { label: "Head Protection", value: "SNI helmets, bump caps, face shields" },
                  { label: "Footwear", value: "Steel-toe boots & shoes, anti-slip, anti-static" },
                  { label: "High-Visibility", value: "Reflective vests & workwear, class 2/3" },
                  { label: "Hand Protection", value: "Chemical, cut-resistant & welding gloves" },
                  { label: "Fall Protection", value: "Full-body harnesses, lanyards, anchors" },
                  { label: "Respiratory & Eye", value: "Masks, respirators, safety goggles" }
                ]
              },
              {
                title: "Standards & Supply",
                specs: [
                  { label: "Compliance", value: "SNI, ANSI, EN — certificates included" },
                  { label: "Fire Safety", value: "APAR extinguishers, refills & inspection" },
                  { label: "Branding", value: "Logo printing/embroidery available" },
                  { label: "Order Scale", value: "Retail boxes to project-scale batches" }
                ]
              }
            ],
            applications: [
              "New site mobilization safety packages",
              "Periodic PPE replenishment contracts",
              "Shutdown & turnaround crew outfitting",
              "Safety audit compliance upgrades",
              "Contractor & visitor PPE programs"
            ],
            gallery: [
              {
                src: "/safety-equipment.jpg",
                alt: "Assorted certified K3 safety gear supplied by NBS",
                caption: "Certified PPE range — SNI & international standards"
              }
            ]
          }
        },
        {
          category: "Industrial Technical Tools",
          slug: "industrial-technical-tools",
          description: "Heavy-duty fabrication and assembly machinery designed to withstand rigorous daily field operations.",
          image: "/technical-tools-cover.png",
          items: ["Inverter Welding Machine", "Heavy Duty Angle Grinders", "Cordless Impact Drills", "Mechanic Tool Set (120+ pcs)"],
          detail: {
            tagline: "Workshop-grade tools built for daily field abuse",
            overview: [
              "We supply industrial power tools and hardware essentials for workshops, fabrication yards, and structural assembly sites. Our catalog focuses on proven heavy-duty brands that survive continuous field operation — not consumer-grade alternatives.",
              "Beyond supply, we advise on tool selection per work scope, provide consumables (electrodes, discs, bits), and support warranty claims with authorized service centers."
            ],
            specGroups: [
              {
                title: "Tool Categories",
                specs: [
                  { label: "Welding", value: "Inverter MMA/MIG machines, 200–400A" },
                  { label: "Grinding & Cutting", value: "4\"–7\" angle grinders, cut-off machines" },
                  { label: "Drilling & Fastening", value: "Cordless impact drills, rotary hammers" },
                  { label: "Hand Tools", value: "Mechanic sets 120+ pcs, torque wrenches" },
                  { label: "Measuring", value: "Laser levels, calipers, survey tools" },
                  { label: "Electrical Tools", value: "Crimpers, testers, cable pullers" }
                ]
              },
              {
                title: "Supply Terms",
                specs: [
                  { label: "Warranty", value: "Official brand warranty, 6–24 months" },
                  { label: "Consumables", value: "Electrodes, discs & bits in stock" },
                  { label: "Bulk Orders", value: "Project pricing for volume purchase" },
                  { label: "Delivery", value: "Site delivery across Java" }
                ]
              }
            ],
            applications: [
              "Steel fabrication & welding workshops",
              "Mechanical & electrical installation crews",
              "Plant maintenance tool provisioning",
              "Site carpentry & formwork operations",
              "Assembly line setup & retrofit works"
            ],
            gallery: [
              {
                src: "/technical-tools.jpg",
                alt: "Industrial technical tools and power equipment supplied by NBS",
                caption: "Heavy-duty power tools & workshop equipment"
              }
            ]
          }
        }
      ]
    },
    productDetail: {
      backToProducts: "Back to Products",
      overviewTitle: "Overview",
      itemsTitle: "Key Items",
      specsTitle: "Specifications",
      applicationsTitle: "Typical Applications",
      galleryTitle: "Field Documentation",
      relatedTitle: "Related Projects",
      ctaTitle: "Need a quotation for this category?",
      ctaSubtitle: "Send us your scope — quantities, duration, and location — and our team will respond within one working day.",
      ctaWhatsapp: "Consult via WhatsApp",
      viewProject: "View project",
      clientLabel: "Client",
      locationLabel: "Location"
    },
    projects: {
      title: "Project Experience",
      subtitle: "A proven track record of successful deliveries, construction supply, and manpower mobilization.",
      list: [
        {
          name: "Civil Utility Pipeline Procurement & Pre-Assembly",
          client: "PT. Bahari Dermaga Logistik",
          location: "Tanjung Priok, Jakarta",
          year: "2024",
          service: "Plumbing Installation & Pipe Materials",
          description: "Supply, testing, and alignment of large-diameter HDPE water supply pipeline segments at the harbour logistics yard.",
          image: "/real_life_photos.jpeg"
        },
        {
          name: "Civil Drainage Infrastructure Pipe Laying",
          client: "PT. Pembangunan Jaya Mandiri",
          location: "Cikarang, West Java",
          year: "2024",
          service: "Plumbing Installation & Pipe Materials",
          description: "Ditching, positioning, and jointing of main industrial wastewater lines and clean water supply routes for a major factory plant.",
          image: "/real_life_photos2.jpeg"
        },
        {
          name: "Industrial Water Distribution Main Pipeline",
          client: "PT. Kawasan Industri Kendal",
          location: "Kendal, Central Java",
          year: "2024",
          service: "Plumbing Installation & Pipe Materials",
          description: "Laying, anchoring, and alignment of long-run HDPE utility piping along the main utility trenches.",
          image: "/real_life_photos3.jpeg"
        },
        {
          name: "High-Level Warehouse Utility Installation",
          client: "PT. Global Logistik Utama",
          location: "Karawang, West Java",
          year: "2025",
          service: "Plumbing & Electrical Installation",
          description: "Installed high-level electrical conduits, lighting grids, and auxiliary pipes utilizing electric scissor lifts in a 15,000 sqm warehouse.",
          image: "/real_life_photos4.jpeg"
        },
        {
          name: "Fire Sprinkler & Piping Infrastructure",
          client: "PT. Mega Industri Perakitan",
          location: "Cilegon, Banten",
          year: "2025",
          service: "Plumbing & Electrical Installation",
          description: "Overhead mechanical pipe alignment, welding, and coupling using hydraulic platforms inside a petrochemical plant.",
          image: "/real_life_photos5.jpeg"
        },
        {
          name: "Infrastructure Corrosion Protection & Painting",
          client: "PT. Energi Abadi Kimia",
          location: "Cilegon, Banten",
          year: "2024",
          service: "Project Manpower Outsourcing",
          description: "Mobilized painting technicians and helpers for pipe surface preparation, priming, and anti-corrosive industrial painting.",
          image: "/real_life_photos6.jpeg"
        }
      ]
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What partners and clients say about working with PT. Nyi Bahari Steel.",
      list: [
        {
          name: "Andi Pratama",
          role: "Project Manager, PT. Global Kontraktor",
          quote: "Equipment arrived on schedule and the operators were genuinely skilled. They kept our site moving without a single safety incident.",
          rating: 5
        },
        {
          name: "Siti Rahmawati",
          role: "Procurement Lead, Industrial Estate Bekasi",
          quote: "Certified safety gear at fair prices, and the paperwork was always complete. Easy to work with for repeat orders.",
          rating: 5
        },
        {
          name: "Budi Santoso",
          role: "Site Engineer, Infrastructure Division",
          quote: "Their manpower outsourcing saved us during a tight deadline. Responsive team and reliable technicians.",
          rating: 5
        },
        {
          name: "Maria Lestari",
          role: "Operations, Manufacturing Plant Karawang",
          quote: "From heavy equipment to technical tools, one supplier covered it all. That simplicity is worth a lot to us.",
          rating: 4
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Connect with our procurement and technical sales team to request a quote or consultation.",
      addressTitle: "Our Office",
      address: "Ciherang, Kec. Pasawahan, Kabupaten Purwakarta, Jawa Barat 41172",
      phoneTitle: "Phone Call",
      phone: "08139547223",
      emailTitle: "Email Address",
      email: "nyibaharisteel@gmail.com",
      whatsappTitle: "WhatsApp Business",
      whatsapp: "+62 813 9547 223",
      whatsappCta: "Consult via WhatsApp",
      whatsappPreFilledMsg: "Hello, I would like to ask about your construction supply and manpower services.",
      wechatTitle: "WeChat",
      wechatId: "NYIBAHARISTEEL",
      // desktop https; mobile uses weixin:// deep-link with wechatId
      wechatUrl: "https://web.wechat.com/",
      wechatCta: "Chat on WeChat",



      form: {
        name: "Full Name",


        company: "Company Name",
        phone: "Phone Number",
        email: "Email Address",
        service: "Service Needed",
        servicePlaceholder: "Select a service...",
        message: "Message Details",
        submit: "Send Inquiry",
        submitting: "Sending...",
        successTitle: "Inquiry Submitted!",
        successMsg: "Thank you for contacting us. Your message has been locally simulated. Would you like to also send it directly to our sales WhatsApp for immediate response?",
        successBtnWa: "Send to WhatsApp Now",
        successBtnClose: "Close"
      }
    },
    footer: {
      copyright: "© 2026 PT. Nyi Bahari Steel. All rights reserved.",
      legal: "Constructing pathways with safety and steel."
    }
  },
  id: {
    meta: {
      title: "PT. Nyi Bahari Steel | Alat Berat, Safety K3 & Manpower",
      description: "Supplier konstruksi di Purwakarta, Jawa Barat: sewa alat berat, APD/safety K3, alat teknik, instalasi plumbing & listrik, serta outsourcing tenaga kerja proyek industri.",
      keywords: "PT Nyi Bahari Steel, supplier alat berat Purwakarta, sewa alat berat Jawa Barat, rental excavator Purwakarta, supplier safety K3, APD konstruksi, alat teknik industri, instalasi plumbing listrik pabrik, outsourcing tenaga kerja konstruksi, manpower proyek Purwakarta, supplier konstruksi Jawa Barat",

    },

    nav: {
      home: "Beranda",
      about: "Mengapa Memilih Kami",
      services: "Layanan",
      products: "Produk",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      tagline: "Keandalan Industri",
      headline: "Supplier Alat Berat, Safety K3 & Tenaga Kerja Proyek di Purwakarta",
      description: "Berbasis di Purwakarta, Jawa Barat — kami menyediakan sewa alat berat, APD/safety K3 bersertifikat, alat teknik, instalasi plumbing & listrik, serta outsourcing tenaga kerja untuk proyek konstruksi dan industri.",

      ctaContact: "Hubungi Kami",
      ctaServices: "Lihat Layanan",
      ctaQuotation: "Minta Penawaran",
    },
    about: {
      title: "Tentang Kami",
      subtitle: "PT. Nyi Bahari Steel",
      whyTitle: "Mengapa Memilih Kami",
      whySubtitle: "Mitra pengadaan yang andal untuk proyek yang lebih aman dan lancar.",
      description: "PT. Nyi Bahari Steel adalah perusahaan supplier konstruksi yang menyediakan kebutuhan proyek meliputi alat berat, alat safety, alat teknik, instalasi plumbing dan listrik, serta penyaluran tenaga kerja (outsourcing). Kami berkomitmen menjadi mitra terpercaya bagi perusahaan konstruksi, industri, dan manufaktur dengan menyediakan produk yang andal, layanan profesional, dan dukungan yang responsif.",
      visionTitle: "Visi Kami",
      vision: "Menjadi mitra industri terdepan dan terpercaya di Indonesia, menghadirkan pasokan konstruksi berkualitas tinggi, instalasi yang presisi, dan tenaga kerja andal yang memberdayakan klien membangun masa depan lebih aman dan efisien.",
      missionTitle: "Misi Kami",
      mission: [
        "Menyediakan peralatan teknik dan perlengkapan safety (K3) kualitas premium berstandar nasional dan internasional.",
        "Menyalurkan tenaga kerja proyek yang terampil, bersertifikat, dan andal sesuai spesifikasi kebutuhan lapangan.",
        "Menjamin eksekusi instalasi utilitas listrik dan pipa air (plumbing) dengan standar keteknikan tertinggi.",
        "Membangun kemitraan jangka panjang yang saling menguntungkan melalui respon operasional cepat dan integritas mutlak."
      ],
      valuesTitle: "Nilai Perusahaan",
      values: [
        {
          title: "Utamakan Keselamatan",
          description: "Melindungi keselamatan jiwa pekerja dan integritas proyek dengan hanya memasok perlengkapan safety K3 bersertifikat."
        },
        {
          title: "Integritas Mutlak",
          description: "Membangun kepercayaan klien melalui penawaran harga yang jujur, transparansi jadwal, dan pemenuhan komitmen penuh."
        },
        {
          title: "Keunggulan Operasional",
          description: "Menghadirkan kualitas terbaik pada seluruh armada alat berat, alat teknik, dan hasil pekerjaan manual tenaga kerja kami."
        },
        {
          title: "Layanan Responsif",
          description: "Kami memahami pentingnya efisiensi waktu proyek. Kami merespon cepat permintaan kuotasi, perubahan di lapangan, dan kebutuhan logistik."
        }
      ]
    },
    services: {
      title: "Layanan Utama Kami",
      subtitle: "Solusi komprehensif yang dirancang khusus untuk operasional konstruksi, manufaktur, dan industri.",
      ctaContact: "Konsultasi Layanan",
      list: [
        {
          title: "Penyewaan Alat Berat",
          description: "Kami menyediakan armada alat berat yang modern dan terawat untuk mempermudah pekerjaan penggalian tanah, pengangkatan material, dan transportasi.",
          items: ["Excavator", "Towing", "Forklift", "Mobile Crane", "Dump Truck", "Dozer", "Vibro Roller", "Alat penunjang proyek lainnya"],
          image: "/heavy-equipment.jpg"
        },
        {
          title: "Pengadaan Alat Safety K3",
          description: "Lengkapi pekerja Anda dengan alat pelindung diri (APD) berkualitas untuk meminimalkan risiko kecelakaan kerja dan mematuhi regulasi.",
          items: ["Helm Safety", "Sepatu Safety (Steel-toe)", "Rompi Safety Reflektif", "Sarung Tangan Proyek", "Body Harness", "Kacamata Safety", "Masker & Respirator", "APAR (Alat Pemadam Api)"],
          image: "/safety-equipment.jpg"
        },
        {
          title: "Alat Teknik & Peralatan",
          description: "Penyediaan mesin-mesin fabrikasi dan perkakas tangan berkualitas tinggi untuk workshop, bengkel, dan perakitan struktur.",
          items: ["Mesin Las", "Gerinda Tangan", "Bor Listrik", "Kunci & Tool Set", "Alat Ukur Presisi", "Alat Potong Material", "Alat Kelistrikan", "Material Pendukung Proyek"],
          image: "/technical-tools.jpg"
        },
        {
          title: "Instalasi Plumbing & Elektrikal",
          description: "Jasa perancangan, instalasi, dan pemeliharaan sistem utilitas air dan listrik untuk gedung, pabrik, dan gudang industri.",
          items: ["Instalasi pipa air bersih", "Instalasi pipa air limbah", "Pemasangan pompa industri", "Instalasi panel listrik", "Penataan kabel/cabling", "Perawatan plumbing & listrik berkala"],
          image: "/plumbing-electrical.jpg"
        },
        {
          title: "Outsourcing Tenaga Kerja Proyek",
          description: "Penyediaan tenaga kerja teknik dan manual berpengalaman serta bersertifikat untuk operasional konstruksi dan industri.",
          items: ["Welder (Tukang Las) Sertifikasi", "Helper (Kenek)", "Fitter (Pengepas Pipa/Struktur)", "Operator Alat Berat", "Teknisi Listrik", "Teknisi Plumbing", "Pekerja Maintenance"],
          image: "/manpower-outsourcing.jpg"
        }
      ]
    },
    products: {
      title: "Kategori Produk",
      subtitle: "Telusuri katalog produk pilihan kami untuk material industri, alat pelindung diri, dan mesin teknik.",
      ctaQuote: "Minta Kuotasi",
      ctaDetails: "Lihat Detail",
      list: [
        {
          category: "Material Utilitas Proyek",
          slug: "infrastructure-materials",
          description: "Pipa, kabel, katup, dan komponen listrik berkualitas tinggi untuk menunjang infrastruktur pabrik.",
          image: "/hydrant-cover.png",
          items: ["Pipa Air HDPE & PVC", "Pompa Air Submersible", "Pipa Besi SGP & Hitam", "Kabel Listrik Industri NYY/NYFGBY"],
          flagship: "Instalasi Hydrant — perpipaan proteksi kebakaran, pompa & katup",
          detail: {
            tagline: "Material kelas utilitas dengan sertifikat pabrik",
            overview: [
              "Kami memasok pipa, kabel, valve, dan komponen listrik kelas industri untuk instalasi utilitas fasilitas — mulai dari sistem air bersih pabrik hingga jaringan air limbah kawasan. Material dikirim beserta mill test certificate dan dokumen merek.",
              "Tim kami juga mengeksekusi pemasangan: penanaman pipa, penyambungan, pengujian, hingga terminasi listrik, sehingga Anda mendapatkan satu pihak yang bertanggung jawab penuh atas kualitas material maupun hasil kerja."
            ],
            specGroups: [
              {
                title: "Rangkaian Material",
                specs: [
                  { label: "Pipa Air", value: "HDPE PN10/PN16 & PVC AW/D, 20–630mm" },
                  { label: "Pipa Baja", value: "SGP & besi hitam, schedule 40/80" },
                  { label: "Pompa", value: "Submersible, sentrifugal & booster" },
                  { label: "Kabel", value: "Kabel power industri NYY, NYFGBY, NYM" },
                  { label: "Valve & Fitting", value: "Gate, ball, check valve & fitting HDPE" },
                  { label: "Kelistrikan", value: "Panel, breaker, conduit & cable tray" }
                ]
              },
              {
                title: "Kualitas & Pengiriman",
                specs: [
                  { label: "Sertifikasi", value: "Mill test certificate per batch" },
                  { label: "Pengujian", value: "Dukungan hydrotest & uji kontinuitas" },
                  { label: "Waktu Kirim", value: "3–14 hari, stok ready atau indent" },
                  { label: "Instalasi", value: "Opsi paket supply-and-install" }
                ]
              }
            ],
            applications: [
              "Sistem air bersih & air limbah pabrik",
              "Jaringan utilitas kawasan industri",
              "Perpipaan fire sprinkler & hydrant",
              "Distribusi listrik gudang & pabrik",
              "Pembangunan ruang pompa & utilitas"
            ],
            gallery: [
              {
                src: "/real_life_photos.jpeg",
                alt: "Pra-perakitan pipa HDPE berdiameter besar di lapangan logistik pelabuhan",
                caption: "Pengadaan & pra-perakitan pipa HDPE — Tanjung Priok"
              },
              {
                src: "/real_life_photos5.jpeg",
                alt: "Pemasangan pipa fire sprinkler overhead di pabrik petrokimia",
                caption: "Perpipaan fire sprinkler — Cilegon"
              }
            ]
          }
        },
        {
          category: "Outsourcing Tenaga Kerja Proyek",
          slug: "project-manpower-outsourcing",
          description: "Penyediaan tenaga kerja terampil dan semi-terampil — tukang las, fitter, operator, rigger, dan helper — yang dikerahkan secara fleksibel untuk proyek konstruksi dan industri.",
          image: "/manpower-outsourcing-cover.png",
          items: ["Tukang Las & Fitter Bersertifikat", "Operator Alat Berat", "Rigger & Perancah", "Helper & Teknisi Umum"],
          detail: {
            tagline: "Tim bersertifikat dan berpengalaman, siap dimobilisasi",
            overview: [
              "Kami memobilisasi tenaga kerja teknik dan manual bersertifikat untuk proyek konstruksi, industri, dan manufaktur di Jawa Barat dan sekitarnya. Setiap pengerahan disesuaikan dengan lingkup pekerjaan Anda — mulai dari satu tukang las bersertifikat hingga tim multi-disiplin lengkap.",
              "Seluruh pekerja telah melalui seleksi kompetensi, dilengkapi sertifikasi yang valid (SIO untuk operator, uji kualifikasi las, pelatihan dasar K3), dan ditanggung asuransi kerja. Kami mengurus penggajian, perizinan, dan administrasi lapangan sehingga tim Anda dapat fokus pada penyelesaian proyek."
            ],
            specGroups: [
              {
                title: "Keahlian Tersedia",
                specs: [
                  { label: "Tukang Las Bersertifikat", value: "SMAW / GMAW / GTAW, posisi 3G–6G" },
                  { label: "Fitter Mekanik", value: "Perakitan pipa & struktur baja" },
                  { label: "Operator Alat Berat", value: "Excavator, forklift, crane — bersertifikat SIO" },
                  { label: "Rigger & Perancah", value: "Tim rigging & scaffolding bersertifikat" },
                  { label: "Teknisi", value: "Listrik, plumbing & pemeliharaan" },
                  { label: "Helper Umum", value: "Dukungan lapangan & penanganan material terlatih" }
                ]
              },
              {
                title: "Ketentuan Pengerahan",
                specs: [
                  { label: "Periode Kontrak", value: "Harian, mingguan, bulanan, atau per proyek" },
                  { label: "Waktu Mobilisasi", value: "3–7 hari kerja sejak PO" },
                  { label: "Area Jangkauan", value: "Jawa Barat, Jakarta, Banten, Jawa Tengah" },
                  { label: "Kepatuhan", value: "Termasuk asuransi, perizinan & APD" }
                ]
              }
            ],
            applications: [
              "Proyek pemeliharaan & shutdown pabrik",
              "Fabrikasi & ereksi struktur baja",
              "Tim pemasangan & perbaikan pipa",
              "Pekerjaan fit-out gudang & pabrik",
              "Dukungan lokasi konstruksi sipil"
            ],
            gallery: [
              {
                src: "/real_life_photos6.jpeg",
                alt: "Tim NBS melakukan pengecatan anti-korosi pipa di lokasi petrokimia",
                caption: "Tim pengecatan & proteksi korosi — Cilegon, Banten"
              },
              {
                src: "/real_life_photos4.jpeg",
                alt: "Teknisi memasang utilitas gudang di ketinggian dengan scissor lift",
                caption: "Teknisi instalasi utilitas ketinggian — Karawang"
              }
            ]
          }
        },
        {
          category: "Armada Alat Berat",
          slug: "heavy-equipment-fleet",
          description: "Excavator, forklift, dan crane berspesifikasi tinggi yang tersedia untuk sewa jangka pendek maupun jangka panjang.",
          image: "/heavy-equipment-cover.png",
          items: ["Excavator Kelas 20 Ton", "Forklift Kapasitas 3-10 Ton", "Mobile Crane 25-50 Ton", "Vibro Roller 10 Ton"],
          detail: {
            tagline: "Mesin terawat dengan operator bersertifikat",
            overview: [
              "Armada alat berat kami dirawat dengan jadwal servis yang ketat dan diperiksa sebelum setiap mobilisasi. Unit tersedia untuk sewa lepas (bare rental) maupun dengan operator bersertifikat SIO, memberikan fleksibilitas untuk pekerjaan galian, pengangkatan, dan transportasi material.",
              "Kami melayani sewa harian untuk pekerjaan singkat maupun kontrak proyek jangka panjang, dengan dukungan unit cadangan agar pekerjaan Anda terus berjalan jika terjadi kendala pada mesin."
            ],
            specGroups: [
              {
                title: "Unggulan Armada",
                specs: [
                  { label: "Excavator", value: "Kelas 20 ton, attachment breaker & auger" },
                  { label: "Forklift", value: "Unit diesel 3–10 ton, indoor & medan berat" },
                  { label: "Mobile Crane", value: "25–50 ton, boom teleskopik" },
                  { label: "Vibro Roller", value: "Pemadatan tanah & aspal 10 ton" },
                  { label: "Dump Truck", value: "6x4, kapasitas 20–25 m³" },
                  { label: "Dozer", value: "Kelas D6 untuk land clearing & perataan" }
                ]
              },
              {
                title: "Ketentuan Sewa",
                specs: [
                  { label: "Periode Sewa", value: "Harian, mingguan, atau bulanan" },
                  { label: "Operator", value: "Opsional — tersedia operator bersertifikat SIO" },
                  { label: "Mobilisasi", value: "Transportasi lowbed diatur oleh NBS" },
                  { label: "Pemeliharaan", value: "Termasuk servis di lokasi & unit cadangan" }
                ]
              }
            ],
            applications: [
              "Land clearing & pekerjaan cut and fill",
              "Pemuatan material & logistik lapangan",
              "Pengangkatan struktur & ereksi peralatan",
              "Pemadatan lapis pondasi jalan & tanah",
              "Pekerjaan infrastruktur kawasan industri"
            ],
            gallery: [
              {
                src: "/real_life_photos2.jpeg",
                alt: "Excavator menggali dan memposisikan pipa drainase industri",
                caption: "Pemasangan pipa dengan dukungan excavator — Cikarang"
              },
              {
                src: "/real_life_photos3.jpeg",
                alt: "Pipa utilitas HDPE bentang panjang terpasang di parit kawasan industri",
                caption: "Pekerjaan tanah untuk pipa utilitas utama — Kendal"
              }
            ]
          }
        },
        {
          category: "Alat Pelindung Diri (APD)",
          slug: "k3-safety-gear",
          description: "Peralatan keselamatan bersertifikat SNI untuk perlindungan menyeluruh pekerja proyek Anda.",
          image: "/safety-equipment-cover.png",
          items: ["Helm Safety SNI", "Sepatu Safety Konstruksi", "Rompi Safety Reflektif", "Sarung Tangan Tahan Kimia"],
          detail: {
            tagline: "Perlindungan bersertifikat, dokumentasi lengkap",
            overview: [
              "Kami memasok peralatan keselamatan dan kesehatan kerja (K3) yang memenuhi standar SNI dan internasional (ANSI, EN, CE). Setiap pengiriman disertai sertifikat kesesuaian dan dokumen batch — penting untuk kelancaran audit keselamatan dari klien Anda.",
              "Dari kebutuhan satu tim lapangan hingga mobilisasi ratusan pekerja, kami menangani pesanan volume besar dengan stok konsisten, opsi branding (cetak logo perusahaan), dan pengisian ulang terjadwal untuk proyek jangka panjang."
            ],
            specGroups: [
              {
                title: "Rangkaian Produk",
                specs: [
                  { label: "Perlindungan Kepala", value: "Helm SNI, bump cap, face shield" },
                  { label: "Alas Kaki", value: "Sepatu & boot steel-toe, anti-slip, anti-statis" },
                  { label: "Visibilitas Tinggi", value: "Rompi & wearpack reflektif, kelas 2/3" },
                  { label: "Perlindungan Tangan", value: "Sarung tangan kimia, anti-sayat & las" },
                  { label: "Perlindungan Jatuh", value: "Full-body harness, lanyard, anchor" },
                  { label: "Pernapasan & Mata", value: "Masker, respirator, kacamata safety" }
                ]
              },
              {
                title: "Standar & Pasokan",
                specs: [
                  { label: "Kepatuhan", value: "SNI, ANSI, EN — sertifikat disertakan" },
                  { label: "Proteksi Kebakaran", value: "APAR, isi ulang & inspeksi berkala" },
                  { label: "Branding", value: "Tersedia cetak/bordir logo perusahaan" },
                  { label: "Skala Pesanan", value: "Eceran hingga batch skala proyek" }
                ]
              }
            ],
            applications: [
              "Paket safety mobilisasi proyek baru",
              "Kontrak pengisian ulang APD berkala",
              "Pengadaan APD tim shutdown & turnaround",
              "Peningkatan kepatuhan audit keselamatan",
              "Program APD kontraktor & tamu"
            ],
            gallery: [
              {
                src: "/safety-equipment.jpg",
                alt: "Rangkaian APD bersertifikat yang dipasok oleh NBS",
                caption: "Rangkaian APD bersertifikat — standar SNI & internasional"
              }
            ]
          }
        },
        {
          category: "Mesin & Perkakas Teknik",
          slug: "industrial-technical-tools",
          description: "Perkakas kerja industri yang dirancang untuk daya tahan maksimal pada operasional berat harian.",
          image: "/technical-tools-cover.png",
          items: ["Mesin Las Inverter", "Gerinda Tangan Heavy-Duty", "Bor Baterai (Cordless Impact)", "Set Kunci Bengkel (120+ Pcs)"],
          detail: {
            tagline: "Perkakas kelas workshop untuk kerja lapangan berat",
            overview: [
              "Kami memasok perkakas listrik industri dan perlengkapan hardware untuk workshop, yard fabrikasi, dan lokasi perakitan struktur. Katalog kami berfokus pada merek heavy-duty yang terbukti tahan operasional lapangan terus-menerus — bukan perkakas kelas konsumen.",
              "Selain pengadaan, kami memberikan rekomendasi pemilihan alat sesuai lingkup kerja, menyediakan consumable (kawat las, mata gerinda, mata bor), serta mendukung klaim garansi melalui service center resmi."
            ],
            specGroups: [
              {
                title: "Kategori Perkakas",
                specs: [
                  { label: "Pengelasan", value: "Mesin las inverter MMA/MIG, 200–400A" },
                  { label: "Gerinda & Potong", value: "Gerinda tangan 4\"–7\", mesin cut-off" },
                  { label: "Bor & Fastening", value: "Cordless impact drill, rotary hammer" },
                  { label: "Perkakas Tangan", value: "Tool set mekanik 120+ pcs, kunci torsi" },
                  { label: "Alat Ukur", value: "Laser level, jangka sorong, alat survei" },
                  { label: "Alat Kelistrikan", value: "Tang crimping, tester, penarik kabel" }
                ]
              },
              {
                title: "Ketentuan Pasokan",
                specs: [
                  { label: "Garansi", value: "Garansi resmi merek, 6–24 bulan" },
                  { label: "Consumable", value: "Kawat las, mata gerinda & bor tersedia" },
                  { label: "Pesanan Besar", value: "Harga proyek untuk pembelian volume" },
                  { label: "Pengiriman", value: "Pengantaran ke lokasi di seluruh Jawa" }
                ]
              }
            ],
            applications: [
              "Workshop fabrikasi & pengelasan baja",
              "Tim instalasi mekanikal & elektrikal",
              "Pengadaan perkakas maintenance pabrik",
              "Pekerjaan bekisting & carpentry lapangan",
              "Setup & retrofit lini perakitan"
            ],
            gallery: [
              {
                src: "/technical-tools.jpg",
                alt: "Perkakas teknik dan mesin industri yang dipasok oleh NBS",
                caption: "Power tool heavy-duty & peralatan workshop"
              }
            ]
          }
        }
      ]
    },
    productDetail: {
      backToProducts: "Kembali ke Produk",
      overviewTitle: "Gambaran Umum",
      itemsTitle: "Item Utama",
      specsTitle: "Spesifikasi",
      applicationsTitle: "Aplikasi Umum",
      galleryTitle: "Dokumentasi Lapangan",
      relatedTitle: "Proyek Terkait",
      ctaTitle: "Butuh penawaran untuk kategori ini?",
      ctaSubtitle: "Kirimkan lingkup kebutuhan Anda — jumlah, durasi, dan lokasi — tim kami akan merespon dalam satu hari kerja.",
      ctaWhatsapp: "Konsultasi via WhatsApp",
      viewProject: "Lihat proyek",
      clientLabel: "Klien",
      locationLabel: "Lokasi"
    },
    projects: {
      title: "Pengalaman Proyek",
      subtitle: "Catatan rekam jejak pengiriman barang, instalasi teknik, dan mobilisasi tenaga kerja proyek yang sukses.",
      list: [
        {
          name: "Pengadaan & Pra-Perakitan Pipa Utilitas Sipil",
          client: "PT. Bahari Dermaga Logistik",
          location: "Tanjung Priok, Jakarta",
          year: "2024",
          service: "Instalasi Plumbing & Material Pipa",
          description: "Penyediaan, pengujian, dan penyejajaran segmen pipa air HDPE berdiameter besar di area lapangan logistik pelabuhan.",
          image: "/real_life_photos.jpeg"
        },
        {
          name: "Pemasangan Pipa Infrastruktur Saluran Air",
          client: "PT. Pembangunan Jaya Mandiri",
          location: "Cikarang, Jawa Barat",
          year: "2024",
          service: "Instalasi Plumbing & Material Pipa",
          description: "Penggalian parit, penempatan, dan penyambungan jalur pipa air limbah utama serta distribusi air bersih untuk kawasan industri manufaktur.",
          image: "/real_life_photos2.jpeg"
        },
        {
          name: "Instalasi Pipa Utama Distribusi Air Industri",
          client: "PT. Kawasan Industri Kendal",
          location: "Kendal, Jawa Tengah",
          year: "2024",
          service: "Instalasi Plumbing & Material Pipa",
          description: "Pemasangan, penjangkaran, dan penyambungan pipa HDPE utilitas bentang panjang di sepanjang jalur parit utilitas kawasan.",
          image: "/real_life_photos3.jpeg"
        },
        {
          name: "Instalasi Utilitas Gedung Gudang Logistik Tinggi",
          client: "PT. Global Logistik Utama",
          location: "Karawang, Jawa Barat",
          year: "2025",
          service: "Instalasi Plumbing & Elektrikal",
          description: "Memasang pipa konduit kelistrikan, grid lampu penerangan, dan pipa penunjang overhead menggunakan tangga hidrolik (scissor lift) di gudang logistik seluas 15.000 m2.",
          image: "/real_life_photos4.jpeg"
        },
        {
          name: "Infrastruktur Pipa & Fire Sprinkler Pabrik",
          client: "PT. Mega Industri Perakitan",
          location: "Cilegon, Banten",
          year: "2025",
          service: "Instalasi Plumbing & Elektrikal",
          description: "Penyusunan parit pipa mekanis di atas plafon, pengelasan, dan fitting penyangga struktur pipa utama di kawasan kilang petrokimia.",
          image: "/real_life_photos5.jpeg"
        },
        {
          name: "Proteksi Korosi & Pengecatan Pipa Infrastruktur",
          client: "PT. Energi Abadi Kimia",
          location: "Cilegon, Banten",
          year: "2024",
          service: "Outsourcing Tenaga Kerja Proyek",
          description: "Memobilisasi pekerja pengecatan teknis untuk persiapan permukaan pipa, pelapisan primer, dan pengecatan anti-korosi industri.",
          image: "/real_life_photos6.jpeg"
        }
      ]
    },
    testimonials: {
      title: "Testimoni",
      subtitle: "Apa kata mitra dan klien tentang bekerja sama dengan PT. Nyi Bahari Steel.",
      list: [
        {
          name: "Andi Pratama",
          role: "Project Manager, PT. Global Kontraktor",
          quote: "Alat datang tepat waktu dan operatornya benar-benar terampil. Proyek kami terus berjalan tanpa satu pun insiden keselamatan.",
          rating: 5
        },
        {
          name: "Siti Rahmawati",
          role: "Procurement Lead, Kawasan Industri Bekasi",
          quote: "Perlengkapan safety bersertifikat dengan harga wajar, dan dokumennya selalu lengkap. Mudah untuk pemesanan berulang.",
          rating: 5
        },
        {
          name: "Budi Santoso",
          role: "Site Engineer, Divisi Infrastruktur",
          quote: "Layanan tenaga kerja mereka menyelamatkan kami saat deadline mepet. Tim responsif dan teknisi andal.",
          rating: 5
        },
        {
          name: "Maria Lestari",
          role: "Operations, Pabrik Manufaktur Karawang",
          quote: "Dari alat berat sampai alat teknik, satu supplier mencakup semuanya. Kemudahan itu sangat berharga bagi kami.",
          rating: 4
        }
      ]
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Hubungi tim penjualan dan tim teknis kami untuk mengajukan permintaan kuotasi harga atau konsultasi proyek.",
      addressTitle: "Kantor Kami",
      address: "Ciherang, Kec. Pasawahan, Kabupaten Purwakarta, Jawa Barat 41172",
      phoneTitle: "Telepon Kantor",
      phone: "08139547223",
      emailTitle: "Alamat Email",
      email: "nyibaharisteel@gmail.com",
      whatsappTitle: "WhatsApp Bisnis",
      whatsapp: "+62 813 9547 223",
      whatsappCta: "Konsultasi via WhatsApp",
      whatsappPreFilledMsg: "Halo, saya ingin bertanya tentang layanan pengadaan alat proyek dan tenaga kerja dari PT. Nyi Bahari Steel.",
      wechatTitle: "WeChat",
      wechatId: "NYIBAHARISTEEL",
      wechatUrl: "https://web.wechat.com/",
      wechatCta: "Chat via WeChat",



      form: {
        name: "Nama Lengkap",


        company: "Nama Perusahaan",
        phone: "Nomor WhatsApp/HP",
        email: "Alamat Email",
        service: "Layanan yang Dibutuhkan",
        servicePlaceholder: "Pilih layanan...",
        message: "Detail Kebutuhan",
        submit: "Kirim Permintaan",
        submitting: "Mengirim...",
        successTitle: "Permintaan Terkirim!",
        successMsg: "Terima kasih telah menghubungi kami. Pesan Anda telah disimulasikan berhasil masuk. Apakah Anda ingin mengirimkan pesan ini langsung ke WhatsApp Sales kami untuk respon instan?",
        successBtnWa: "Kirim ke WhatsApp Sekarang",
        successBtnClose: "Tutup"
      }
    },
    footer: {
      copyright: "© 2026 PT. Nyi Bahari Steel. Semua hak dilindungi.",
      legal: "Membangun dengan jaminan keselamatan dan kekuatan baja."
    }
  },
  zh,
};

export type Language = "en" | "id" | "zh";

/** Canonical product slugs (from the default/id catalog). */
export const productSlugs: string[] = content.id.products.list.map((p) => p.slug);

/** Map related projects to a product category via keyword matching on the project service field. */
export function getRelatedProjects(lang: Language, slug: string): ProjectItem[] {
  const keywords: Record<string, string[]> = {
    "project-manpower-outsourcing": ["manpower", "tenaga kerja", "outsourcing"],
    "heavy-equipment-fleet": ["heavy equipment", "alat berat", "plumbing", "pipe", "pipa"],
    "k3-safety-gear": [],
    "industrial-technical-tools": [],
    "infrastructure-materials": ["plumbing", "pipa", "electrical", "elektrikal"],
  };
  const projects = content[lang].projects.list;
  const match = keywords[slug];
  if (!match || match.length === 0) return projects.slice(0, 3);
  const filtered = projects.filter((p) =>
    match.some((k) => p.service.toLowerCase().includes(k))
  );
  return filtered.length > 0 ? filtered.slice(0, 3) : projects.slice(0, 3);
}
