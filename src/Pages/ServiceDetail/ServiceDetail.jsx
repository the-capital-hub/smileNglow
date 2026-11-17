
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  HeartPulse,
} from "lucide-react";
import "./ServiceDetail.css";

import generalImage from "../../assets/services/general-dentistry.jpg";
import implantImage from "../../assets/services/dental-implants.jpg";
import orthodonticImage from "../../assets/services/orthodontic-treatment.jpg";
import cosmeticImage from "../../assets/services/cosmetic-dentistry.jpg";
import rootCanalImage from "../../assets/services/root-canal.jpg";
import extractionImage from "../../assets/services/tooth-extraction.jpg";
import CrownLengtheningandGumReshaping from "../../assets/services/CrownLengtheningandGumReshaping.png";
import DentalTraumainKids from "../../assets/services/DentalTraumainKids.png";
import DentalVeneers from "../../assets/services/DentalVeneers.png";
import DigitalSmileDesign from "../../assets/services/DigitalSmileDesign.png";
import EarlyChildhoodCaries from "../../assets/services/EarlyChildhoodCaries.png";
import FullMouthFixedCeramicTeeth from "../../assets/services/FullMouthFixedCeramicTeeth.png";
import GingivalDepigmentation from "../../assets/services/GingivalDepigmentation.png";
import GrowthModulation from "../../assets/services/GrowthModulation.png";
import InlayandOnlay from "../../assets/services/InlayandOnlay.png";
import MandibularSurgery from "../../assets/services/MandibularSurgery.png";
import MaxillarySurgery from "../../assets/services/MaxillarySurgery.png";
import MicroscopicRootCanalTreatment from "../../assets/services/MicroscopicRootCanalTreatment.png";
import PreventivyDentistry from "../../assets/services/PreventivyDentistry.png";
import RetreatmentofFailedRootCanals from "../../assets/services/RetreatmentofFailedRootCanals.png";
import SmileDesigning from "../../assets/services/SmileDesigning.png";
import SpaceClosureinAnteriorTeeth from "../../assets/services/SpaceClosureinAnteriorTeeth.png";
import StripCrowns from "../../assets/services/StripCrowns.png";
import TeethWhitening from "../../assets/services/TeethWhitening.png";
import ToothColoredRestoration from "../../assets/services/ToothColoredRestoration.png";
import ToothJewellery from "../../assets/services/ToothJewellery.png";
import VitalPulpTherapy from "../../assets/services/VitalPulpTherapy.png";
import RootCanalTreatmentforPrimaryTeeth from "../../assets/services/RootCanalTreatmentforPrimaryTeeth.png";
import PeriapicalSurgery from "../../assets/services/PeriapicalSurgery.png";

import MetalBracesTreatment from "../../assets/services/MetalBracesTreatment.png";
import CeramicBracesTreatment from "../../assets/services/CeramicBracesTreatment.png";
import DamonBracesTreatment from "../../assets/services/DamonBracesTreatment.png";
import InvisalignTreatment from "../../assets/services/InvisalignTreatment.png";

import ImmediateLoadedImplants from "../../assets/services/ImmediateLoadedImplants.png";
import KeyholeImplantand3DGuidedImplants from "../../assets/services/KeyholeImplantand3DGuidedImplants.png";
import ScalingandToothPolishing from "../../assets/services/ScalingandToothPolishing.png";

import PreventiveDentistry from "../../assets/services/PreventiveDentistry.png";


/* =========================================
   REUSABLE TREATMENT DATA BUILDER
========================================= */

const createTreatment = ({
  title,
  image,
  imageAlt,
  intro,
  benefits,
  steps,
  aftercare,
  faqs,
}) => ({
  title,
  subtitle: `Explore ${title.toLowerCase()} and understand the care options available for your smile.`,
  image,
  imageAlt,
  intro,
  benefits,
  steps,
  aftercare: aftercare || [
    "Follow the instructions provided by your dentist.",
    "Maintain regular brushing and oral hygiene.",
    "Attend recommended dental review appointments.",
    "Discuss any discomfort or concerns with your dental team.",
  ],
  faqs: faqs || [
    {
      question: `Who may need ${title.toLowerCase()}?`,
      answer: `Your dentist will assess your teeth, gums and overall oral health to determine whether ${title.toLowerCase()} is appropriate for your needs.`,
    },
    {
      question: `How is ${title.toLowerCase()} planned?`,
      answer: "Treatment planning begins with a dental examination. Your dentist may recommend imaging or additional assessment before explaining the available options.",
    },
    {
      question: "How long does treatment take?",
      answer: "The treatment duration depends on your individual dental condition, the procedure involved and the plan recommended by your dentist.",
    },
    {
      question: "Will I need follow up visits?",
      answer: "Follow up visits may be recommended to review healing, treatment progress and your ongoing oral health.",
    },
  ],
});

/* =========================================
   TREATMENT DATABASE
========================================= */

const services = {
  "general-dentistry": createTreatment({
    title: "General Dentistry",
    image: generalImage,
    imageAlt: "General dental checkup",
    intro: "General dentistry focuses on maintaining healthy teeth and gums through routine examinations, preventive guidance and appropriate dental care. Regular visits help your dentist monitor oral health and discuss concerns at an early stage.",
    benefits: [
      "Routine dental examinations",
      "Preventive oral care guidance",
      "Early identification of dental concerns",
      "Personalized care recommendations",
    ],
    steps: [
      ["Consultation", "Discuss your concerns and dental history."],
      ["Examination", "The dentist checks your teeth and gums."],
      ["Care Plan", "Review suitable care and treatment options."],
      ["Follow Up", "Get guidance for maintaining oral health."],
    ],
  }),

  "root-canal-treatment": createTreatment({
    title: "Root Canal Treatment",
    image: rootCanalImage,
    imageAlt: "Root canal treatment illustration",
    intro: "Root canal treatment may help save a natural tooth when the soft tissue inside it becomes inflamed or infected. During the procedure, the affected tissue is removed, the inside of the tooth is cleaned and the space is sealed. Your dentist will examine the tooth and explain the most suitable treatment plan.",
    benefits: [
      "May help preserve your natural tooth",
      "Addresses infection inside the tooth",
      "Helps manage pain caused by dental infection",
      "Supports restoration of tooth function",
    ],
    steps: [
      ["Consultation", "Discuss your symptoms and dental history."],
      ["Examination", "The dentist examines the tooth and may recommend an X ray."],
      ["Cleaning", "The affected tissue is removed and the inner space is cleaned."],
      ["Sealing", "The cleaned space is filled and sealed."],
      ["Restoration", "A suitable restoration may be recommended to protect the tooth."],
    ],
    aftercare: [
      "Follow the instructions provided by your dentist.",
      "Avoid chewing hard foods on the treated tooth until advised.",
      "Maintain regular brushing and flossing.",
      "Attend recommended follow up appointments.",
      "Contact your dentist if pain or swelling worsens.",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer: "The procedure is generally performed using local anaesthesia. Some tenderness may occur afterwards. Your dentist can explain what to expect in your case.",
      },
      {
        question: "How many visits are needed?",
        answer: "The number of visits depends on the condition of the tooth, its complexity and the treatment plan recommended by your dentist.",
      },
      {
        question: "Will I need a crown after root canal treatment?",
        answer: "Some treated teeth may need a crown or another restoration for protection. Your dentist will recommend the appropriate option after examination.",
      },
      {
        question: "How should I care for my tooth after treatment?",
        answer: "Follow your dentist's instructions, maintain good oral hygiene and attend the recommended follow up visits.",
      },
    ],
  }),

  "microscopic-root-canal-treatment": createTreatment({
    title: "Microscopic Root Canal Treatment",
    image: MicroscopicRootCanalTreatment,
    imageAlt: "Root canal treatment",
    intro: "Microscopic root canal treatment uses magnification to help the dentist examine the internal structures of a tooth in greater detail. It may be considered in selected cases where additional visibility is useful during treatment.",
    benefits: [
      "Magnified view of tooth structures",
      "Support for detailed examination",
      "Helps the dentist assess complex anatomy",
      "Treatment planned around the tooth condition",
    ],
    steps: [
      ["Consultation", "Discuss symptoms and previous dental treatment."],
      ["Detailed Examination", "The dentist evaluates the tooth and its root canals."],
      ["Magnified Treatment", "Magnification may assist during cleaning and treatment."],
      ["Sealing", "The treated canal space is sealed as planned."],
      ["Restoration", "The tooth is assessed for suitable restoration."],
    ],
  }),

  "root-canal-retreatment": createTreatment({
    title: "Retreatment of Failed Root Canals",
    image: RetreatmentofFailedRootCanals,
    imageAlt: "Root canal dental model",
    intro: "Root canal retreatment may be considered when a previously treated tooth develops persistent or recurring problems. The dentist examines the tooth, reviews previous treatment and discusses whether retreatment or another option may be appropriate.",
    benefits: [
      "Reassessment of a previously treated tooth",
      "Review of possible causes of recurring problems",
      "Discussion of available treatment options",
      "Planning based on current dental findings",
    ],
    steps: [
      ["Review", "Discuss previous treatment and current symptoms."],
      ["Assessment", "Examine the tooth and review relevant imaging."],
      ["Reopening", "The dentist accesses the previously treated canal when indicated."],
      ["Cleaning", "The canal is cleaned and managed according to findings."],
      ["Restoration", "The tooth is sealed and restoration options are reviewed."],
    ],
  }),

  "root-canal-treatment-primary-teeth": createTreatment({
    title: "Root Canal Treatment for Primary Teeth",
    image: RootCanalTreatmentforPrimaryTeeth,
    imageAlt: "Child dental care",
    intro: "Some primary teeth affected by deep decay or infection may need pulp treatment to help maintain comfort and function until natural tooth replacement. The dentist will assess the child's tooth and explain the suitable approach.",
    benefits: [
      "Assessment of infected primary teeth",
      "Support for comfort and oral function",
      "Consideration of the child's dental development",
      "Personalized care planning for children",
    ],
    steps: [
      ["Child Friendly Consultation", "Discuss symptoms and the child's dental history."],
      ["Examination", "Assess the affected primary tooth."],
      ["Pulp Assessment", "Determine the appropriate pulp treatment."],
      ["Treatment", "Carry out the recommended procedure."],
      ["Review", "Monitor the tooth and surrounding dental development."],
    ],
  }),

  "periapical-surgery": createTreatment({
    title: "Periapical Surgery",
    image: PeriapicalSurgery,
    imageAlt: "Dental root illustration",
    intro: "Periapical surgery may be considered when inflammation or infection around a tooth root remains after other treatment. The dentist or specialist will review the tooth and explain whether surgery is appropriate.",
    benefits: [
      "Assessment of infection around a tooth root",
      "Review of options when other treatment has not resolved the concern",
      "Specialist treatment planning",
      "Follow up guidance after the procedure",
    ],
    steps: [
      ["Consultation", "Review symptoms and previous dental treatment."],
      ["Imaging", "Assess the root and surrounding tissues."],
      ["Surgical Planning", "Discuss the procedure and possible alternatives."],
      ["Procedure", "The affected area is treated as planned."],
      ["Review", "Monitor healing and discuss further care."],
    ],
  }),

  "dental-implants": createTreatment({
    title: "Dental Implants",
    image: implantImage,
    imageAlt: "Dental implant model showing an artificial tooth root and crown",
    intro: "Dental implants are designed to replace missing tooth roots. A small implant is placed in the jawbone and, after healing, can support a dental crown, bridge or other suitable restoration. Your dentist will assess your gums, bone support and overall oral health to determine whether implants are suitable for you.",
    benefits: [
      "A fixed option for replacing missing teeth",
      "Designed to support chewing function",
      "Can help preserve jawbone in the area of a missing tooth",
      "Restoration planned around your dental needs",
    ],
    steps: [
      ["Consultation", "Discuss missing teeth, expectations and suitable replacement options."],
      ["Dental Assessment", "Your dentist examines your mouth and may recommend dental imaging."],
      ["Implant Placement", "The implant is placed in the jawbone using the planned procedure."],
      ["Healing Period", "The implant is given time to integrate with the surrounding bone."],
      ["Final Restoration", "A suitable crown, bridge or other restoration is attached when appropriate."],
    ],
    aftercare: [
      "Follow the aftercare instructions provided by your dentist.",
      "Brush and clean around the implant as advised.",
      "Attend all recommended review appointments.",
      "Avoid smoking and discuss its impact on healing with your dentist.",
      "Report persistent pain, swelling or unusual movement to your dentist.",
    ],
    faqs: [
      {
        question: "Are dental implants suitable for everyone?",
        answer: "Not everyone is an immediate candidate. Your dentist will assess bone support, gum health, medical history and other factors before recommending treatment.",
      },
      {
        question: "How long does dental implant treatment take?",
        answer: "Treatment time varies depending on the individual case, healing and whether additional procedures are needed. Your dentist can provide a more specific timeline after examination.",
      },
      {
        question: "Is dental implant placement painful?",
        answer: "The procedure is generally performed with local anaesthesia. Some discomfort, swelling or tenderness may occur afterwards. Your dentist will explain how to manage recovery.",
      },
      {
        question: "How long can dental implants last?",
        answer: "Implant longevity varies. Good oral hygiene, regular dental reviews and appropriate care can help maintain the implant and its restoration.",
      },
      {
        question: "Can I replace several missing teeth with implants?",
        answer: "Depending on your oral health and treatment plan, implants may support individual crowns, bridges or other restorations.",
      },
    ],
  }),

  "immediate-loaded-implants": createTreatment({
    title: "Immediate Loaded Implants",
    image: ImmediateLoadedImplants,
    imageAlt: "Dental implant restoration",
    intro: "Immediate loading is an implant approach in which a temporary restoration may be attached soon after implant placement in carefully selected cases. Suitability depends on clinical findings, implant stability and the dentist's treatment plan.",
    benefits: [
      "An option for selected implant cases",
      "Treatment planned around implant stability",
      "May reduce the time without a temporary tooth",
      "Individual assessment before recommendation",
    ],
    steps: [
      ["Consultation", "Discuss missing teeth and expectations."],
      ["Clinical Assessment", "Evaluate bone, gums and implant suitability."],
      ["Implant Placement", "Place the implant according to the treatment plan."],
      ["Loading Assessment", "Determine whether immediate restoration is appropriate."],
      ["Review", "Monitor healing and restoration stability."],
    ],
  }),

  "full-mouth-fixed-ceramic-teeth": createTreatment({
    title: "Full Mouth Fixed Ceramic Teeth",
    image: FullMouthFixedCeramicTeeth,
    imageAlt: "Full mouth dental restoration model",
    intro: "Full mouth fixed ceramic teeth may be considered for people who need extensive dental rehabilitation. The treatment plan depends on the condition of existing teeth, gums, bone support and the type of restoration recommended.",
    benefits: [
      "Comprehensive assessment of the full mouth",
      "Restoration planning for chewing function",
      "Discussion of suitable ceramic options",
      "A treatment plan tailored to oral health needs",
    ],
    steps: [
      ["Consultation", "Discuss dental concerns and treatment goals."],
      ["Full Mouth Assessment", "Evaluate teeth, gums and supporting structures."],
      ["Treatment Planning", "Review suitable restorative options."],
      ["Restoration", "Carry out the planned dental rehabilitation."],
      ["Maintenance", "Review the restorations and ongoing care."],
    ],
  }),

  "keyhole-3d-guided-implants": createTreatment({
    title: "Keyhole Implant and 3D Guided Implants",
    image: KeyholeImplantand3DGuidedImplants,
    imageAlt: "Dental implant planning model",
    intro: "Computer guided implant planning uses dental imaging and digital planning tools to help assess implant position. A guided or minimally invasive approach may be suitable in selected cases after clinical examination.",
    benefits: [
      "Digital planning of implant position",
      "Assessment of bone and nearby structures",
      "Guided treatment planning when appropriate",
      "Individual evaluation before surgery",
    ],
    steps: [
      ["Consultation", "Discuss missing teeth and treatment expectations."],
      ["Digital Imaging", "Review relevant scans and dental records."],
      ["3D Planning", "Plan implant position based on clinical findings."],
      ["Implant Procedure", "Perform the planned implant procedure."],
      ["Follow Up", "Monitor healing and restoration progress."],
    ],
  }),

  "metal-braces-treatment": createTreatment({
    title: "Metal Braces Treatment",
    image: MetalBracesTreatment,
    imageAlt: "Metal orthodontic braces",
    intro: "Metal braces use brackets and wires to guide teeth into planned positions over time. An orthodontic assessment helps determine the treatment approach, expected duration and review schedule.",
    benefits: [
      "Option for correcting tooth alignment",
      "Can address selected bite concerns",
      "Adjustments monitored during treatment",
      "Guidance for braces care and oral hygiene",
    ],
    steps: [
      ["Consultation", "Discuss alignment and bite concerns."],
      ["Assessment", "Examine teeth and review dental records."],
      ["Braces Placement", "Fit the braces according to the treatment plan."],
      ["Adjustments", "Attend scheduled orthodontic reviews."],
      ["Retention", "Discuss retainers after active treatment."],
    ],
  }),

  "ceramic-braces-treatment": createTreatment({
    title: "Ceramic Braces Treatment",
    image: CeramicBracesTreatment,
    imageAlt: "Ceramic orthodontic braces",
    intro: "Ceramic braces use tooth coloured or translucent brackets to help guide teeth into planned positions. Your orthodontist will assess whether this option is suitable for your alignment needs.",
    benefits: [
      "Tooth coloured bracket option",
      "Personalized alignment planning",
      "Regular progress monitoring",
      "Professional oral hygiene guidance",
    ],
    steps: [
      ["Consultation", "Discuss your preferred alignment options."],
      ["Assessment", "Examine your teeth and bite."],
      ["Placement", "Fit ceramic braces according to the plan."],
      ["Adjustments", "Monitor tooth movement during reviews."],
      ["Retention", "Review retainer options after treatment."],
    ],
  }),

  "damon-braces-treatment": createTreatment({
    title: "Damon Braces Treatment",
    image: DamonBracesTreatment,
    imageAlt: "Self ligating orthodontic braces",
    intro: "Damon braces are a type of self ligating orthodontic system. The suitability of this system depends on the patient's bite, alignment needs and the orthodontist's clinical assessment.",
    benefits: [
      "Self ligating bracket system option",
      "Individualized orthodontic planning",
      "Scheduled progress assessments",
      "Guidance throughout treatment",
    ],
    steps: [
      ["Consultation", "Discuss your smile and bite concerns."],
      ["Assessment", "Review alignment and orthodontic records."],
      ["Braces Placement", "Place the recommended bracket system."],
      ["Progress Review", "Monitor tooth movement and make adjustments."],
      ["Retention", "Discuss long term alignment maintenance."],
    ],
  }),

  "invisalign-treatment": createTreatment({
    title: "Invisalign Treatment",
    image: InvisalignTreatment,
    imageAlt: "Clear dental aligner",
    intro: "Clear aligner treatment uses a series of removable transparent trays to move teeth gradually. Your dentist or orthodontist will assess your bite and determine whether clear aligners are appropriate.",
    benefits: [
      "Removable clear aligner option",
      "Digital treatment planning may be used",
      "Can be removed for eating and cleaning",
      "Progress monitored by your dental team",
    ],
    steps: [
      ["Consultation", "Discuss alignment goals and concerns."],
      ["Digital Assessment", "Review your teeth and bite."],
      ["Treatment Planning", "Plan the aligner sequence."],
      ["Aligner Wear", "Use aligners according to professional instructions."],
      ["Review", "Attend progress checks and discuss retainers."],
    ],
  }),

  "maxillary-surgery": createTreatment({
    title: "Maxillary Surgery",
    image: MaxillarySurgery,
    imageAlt: "Jaw alignment dental model",
    intro: "Maxillary surgery involves the upper jaw and may be considered for selected skeletal or bite related concerns. Assessment and planning are generally coordinated by an appropriately qualified specialist team.",
    benefits: [
      "Assessment of upper jaw position",
      "Review of bite and facial structure",
      "Specialist treatment planning",
      "Coordinated dental and surgical care",
    ],
    steps: [
      ["Specialist Consultation", "Discuss jaw, bite and functional concerns."],
      ["Diagnostic Assessment", "Review clinical findings and imaging."],
      ["Treatment Planning", "Discuss surgical and orthodontic options."],
      ["Surgical Care", "Proceed with the specialist treatment plan."],
      ["Recovery Review", "Attend planned follow up appointments."],
    ],
  }),

  "mandibular-surgery": createTreatment({
    title: "Mandibular Surgery",
    image: MandibularSurgery,
    imageAlt: "Lower jaw alignment model",
    intro: "Mandibular surgery involves the lower jaw and may be recommended for selected jaw position or bite concerns. A specialist assessment is needed to understand the available options and treatment sequence.",
    benefits: [
      "Assessment of lower jaw position",
      "Review of bite and chewing concerns",
      "Specialist surgical planning",
      "Coordinated orthodontic and surgical care",
    ],
    steps: [
      ["Specialist Consultation", "Discuss jaw position and functional concerns."],
      ["Diagnostic Assessment", "Review imaging and clinical findings."],
      ["Treatment Planning", "Discuss surgical and orthodontic options."],
      ["Surgical Care", "Receive the planned specialist procedure."],
      ["Follow Up", "Review recovery and treatment progress."],
    ],
  }),

  "cosmetic-dentistry": createTreatment({
    title: "Cosmetic Dentistry",
    image: cosmeticImage,
    imageAlt: "Cosmetic dental treatment",
    intro: "Cosmetic dentistry focuses on the appearance of your smile. Your dentist can discuss options such as whitening, veneers and restorative procedures based on your dental needs and oral health.",
    benefits: [
      "Discuss options for your smile goals",
      "Personalized treatment recommendations",
      "Understand available cosmetic procedures",
      "Receive professional care guidance",
    ],
    steps: [
      ["Consultation", "Share what you would like to improve."],
      ["Assessment", "Review your teeth and oral health."],
      ["Treatment Plan", "Discuss suitable cosmetic options."],
      ["Treatment", "Proceed with the agreed dental care."],
      ["Review", "Check your result and aftercare needs."],
    ],
  }),

  "tooth-colored-restoration": createTreatment({
    title: "Tooth Colored Restoration",
    image: ToothColoredRestoration,
    imageAlt: "Tooth coloured dental restoration",
    intro: "Tooth coloured restorations use dental materials selected to blend with the natural appearance of teeth. They may be used to repair certain areas affected by decay, wear or damage.",
    benefits: [
      "Restoration designed to blend with tooth colour",
      "Repair of selected damaged areas",
      "Support for tooth shape and function",
      "Material choice based on clinical needs",
    ],
    steps: [
      ["Consultation", "Discuss the tooth and restoration concern."],
      ["Examination", "Assess the extent of damage or decay."],
      ["Preparation", "Prepare the tooth when needed."],
      ["Restoration", "Place and shape the selected material."],
      ["Review", "Check bite, finish and care instructions."],
    ],
  }),

  "crown-lengthening-gum-reshaping": createTreatment({
    title: "Crown Lengthening and Gum Reshaping",
    image: CrownLengtheningandGumReshaping,
    imageAlt: "Dental gum contouring",
    intro: "Crown lengthening and gum reshaping are procedures that adjust the gum line and, in selected cases, the supporting tissue around teeth. The dentist will assess gum health and explain whether these procedures are suitable.",
    benefits: [
      "Assessment of gum line and tooth exposure",
      "Treatment planned around oral health",
      "May support selected restorative needs",
      "Discussion of healing and maintenance",
    ],
    steps: [
      ["Consultation", "Discuss gum appearance or restorative concerns."],
      ["Assessment", "Examine gum health and tooth structure."],
      ["Planning", "Discuss the appropriate procedure."],
      ["Treatment", "Perform the planned gum or tissue adjustment."],
      ["Review", "Monitor healing and oral hygiene."],
    ],
  }),

  "gingival-depigmentation": createTreatment({
    title: "Gingival Depigmentation",
    image: GingivalDepigmentation,
    imageAlt: "Healthy gum appearance",
    intro: "Gingival depigmentation is a cosmetic procedure that may be considered to reduce selected areas of darker gum pigmentation. A dentist will first assess gum health and explain expected outcomes and limitations.",
    benefits: [
      "Assessment of gum pigmentation",
      "Discussion of cosmetic treatment options",
      "Individualized procedure planning",
      "Guidance for healing and follow up",
    ],
    steps: [
      ["Consultation", "Discuss your gum appearance goals."],
      ["Assessment", "Examine gum health and pigmentation."],
      ["Planning", "Review suitable treatment options."],
      ["Procedure", "Carry out the agreed procedure."],
      ["Aftercare", "Follow healing and review instructions."],
    ],
  }),

  "inlay-onlay": createTreatment({
    title: "Inlay and Onlay",
    image: InlayandOnlay,
    imageAlt: "Dental inlay and onlay restorations",
    intro: "Inlays and onlays are custom restorations used to repair selected areas of a damaged tooth. Your dentist will assess how much tooth structure remains and whether an inlay, onlay or another restoration is appropriate.",
    benefits: [
      "Custom restoration for selected tooth damage",
      "Designed to restore tooth shape",
      "Option when a standard filling may not be suitable",
      "Material selection based on clinical needs",
    ],
    steps: [
      ["Consultation", "Discuss the damaged tooth."],
      ["Assessment", "Examine the remaining tooth structure."],
      ["Preparation", "Prepare the tooth for the restoration."],
      ["Fitting", "Fit and adjust the custom restoration."],
      ["Review", "Check the bite and care requirements."],
    ],
  }),

  "smile-designing": createTreatment({
    title: "Smile Designing",
    image: SmileDesigning,
    imageAlt: "Smile design dental consultation",
    intro: "Smile designing involves assessing the appearance of teeth, gums and smile proportions before discussing suitable cosmetic or restorative options. The plan should reflect oral health, facial features and individual preferences.",
    benefits: [
      "Review of smile goals and preferences",
      "Assessment of teeth and gum appearance",
      "Discussion of suitable treatment options",
      "Individualized smile planning",
    ],
    steps: [
      ["Smile Consultation", "Discuss the changes you would like to explore."],
      ["Dental Assessment", "Review teeth, gums and oral health."],
      ["Planning", "Discuss possible cosmetic and restorative options."],
      ["Treatment", "Proceed with the agreed treatment plan."],
      ["Review", "Assess the outcome and maintenance needs."],
    ],
  }),

  "space-closure-anterior-teeth": createTreatment({
    title: "Space Closure in Anterior Teeth",
    image: SpaceClosureinAnteriorTeeth,
    imageAlt: "Front teeth smile alignment",
    intro: "Spaces between front teeth may be managed using orthodontic or restorative approaches, depending on their cause and size. A dental assessment helps determine which option is appropriate.",
    benefits: [
      "Assessment of spaces between front teeth",
      "Review of orthodontic and restorative options",
      "Treatment planned around tooth proportions",
      "Consideration of bite and oral health",
    ],
    steps: [
      ["Consultation", "Discuss the spaces and your smile goals."],
      ["Assessment", "Examine tooth position, size and bite."],
      ["Planning", "Compare suitable closure options."],
      ["Treatment", "Proceed with the selected approach."],
      ["Review", "Check alignment, appearance and maintenance."],
    ],
  }),

  "tooth-jewellery": createTreatment({
    title: "Tooth Jewellery",
    image: ToothJewellery,
    imageAlt: "Decorative dental tooth jewellery",
    intro: "Tooth jewellery is a cosmetic option in which a small decorative accessory may be attached to a tooth surface. A dental professional should assess the tooth and explain safe placement and removal options.",
    benefits: [
      "Personalized decorative smile option",
      "Professional assessment before placement",
      "Discussion of suitable tooth surfaces",
      "Guidance on cleaning and maintenance",
    ],
    steps: [
      ["Consultation", "Discuss the desired style and placement."],
      ["Tooth Assessment", "Check the selected tooth and enamel."],
      ["Preparation", "Prepare the surface according to the chosen method."],
      ["Placement", "Attach the jewellery using an appropriate dental method."],
      ["Review", "Receive cleaning and maintenance guidance."],
    ],
  }),

  "digital-smile-design": createTreatment({
    title: "Digital Smile Design",
    image: DigitalSmileDesign,
    imageAlt: "Digital smile design planning",
    intro: "Digital smile design uses photographs, scans or digital planning tools to help review possible changes to a smile. It can support communication and planning but does not replace a clinical examination.",
    benefits: [
      "Digital review of smile proportions",
      "Visual support during treatment discussions",
      "Planning based on individual preferences",
      "Coordination with suitable dental procedures",
    ],
    steps: [
      ["Consultation", "Discuss smile goals and expectations."],
      ["Records", "Collect relevant photographs or digital scans."],
      ["Digital Planning", "Review possible smile design options."],
      ["Treatment Plan", "Discuss suitable clinical procedures."],
      ["Review", "Evaluate the plan and next steps."],
    ],
  }),

  "dental-veneers": createTreatment({
    title: "Dental Veneers",
    image: DentalVeneers,
    imageAlt: "Dental veneer model",
    intro: "Dental veneers are thin coverings placed on selected tooth surfaces to change their appearance. A dentist will assess tooth health, enamel and bite before recommending whether veneers are suitable.",
    benefits: [
      "Option for selected cosmetic concerns",
      "Can change the appearance of tooth shape",
      "Material options discussed with your dentist",
      "Planning based on tooth health and smile goals",
    ],
    steps: [
      ["Consultation", "Discuss your smile goals."],
      ["Assessment", "Check tooth health, enamel and bite."],
      ["Planning", "Review veneer material and design options."],
      ["Placement", "Fit the planned veneers."],
      ["Review", "Check fit, bite and maintenance."],
    ],
  }),

  "teeth-whitening": createTreatment({
    title: "Teeth Whitening",
    image: TeethWhitening,
    imageAlt: "Professional teeth whitening",
    intro: "Teeth whitening is a cosmetic procedure intended to lighten the appearance of natural teeth. A dental examination helps identify the cause of discoloration and whether whitening is appropriate.",
    benefits: [
      "Assessment of tooth discoloration",
      "Professional whitening options",
      "Guidance on sensitivity and expectations",
      "Advice on maintaining results",
    ],
    steps: [
      ["Consultation", "Discuss tooth shade and expectations."],
      ["Dental Check", "Assess teeth and gums before whitening."],
      ["Shade Review", "Record the starting tooth shade."],
      ["Whitening", "Use the recommended whitening method."],
      ["Aftercare", "Receive guidance on sensitivity and maintenance."],
    ],
  }),

  "pediatric-dentistry": createTreatment({
    title: "Pediatric Dentistry",
    image: PreventivyDentistry,
    imageAlt: "Child friendly dental care",
    intro: "Pediatric dentistry focuses on children's oral health, including preventive care, dental development and treatment of common childhood dental concerns. Care is planned according to the child's age and needs.",
    benefits: [
      "Dental care tailored to children",
      "Monitoring of teeth and jaw development",
      "Preventive oral health guidance",
      "Support for positive dental visits",
    ],
    steps: [
      ["Child Friendly Visit", "Understand the child's concerns and history."],
      ["Dental Examination", "Check teeth, gums and development."],
      ["Care Planning", "Discuss preventive or treatment options."],
      ["Dental Care", "Provide the recommended care."],
      ["Review", "Plan future visits and home care."],
    ],
  }),

  "growth-modulation": createTreatment({
    title: "Growth Modulation",
    image: GrowthModulation,
    imageAlt: "Child orthodontic assessment",
    intro: "Growth modulation is an orthodontic approach that may be considered while a child's jaws are still developing. The timing and suitability depend on the child's growth pattern and orthodontic assessment.",
    benefits: [
      "Assessment during jaw development",
      "Early identification of selected bite concerns",
      "Treatment planning based on growth",
      "Monitoring by an orthodontic professional",
    ],
    steps: [
      ["Consultation", "Discuss bite and jaw development concerns."],
      ["Growth Assessment", "Review dental and jaw development."],
      ["Planning", "Determine whether early treatment may help."],
      ["Appliance or Care", "Begin the recommended approach if indicated."],
      ["Monitoring", "Review growth and treatment progress."],
    ],
  }),

  "early-childhood-caries": createTreatment({
    title: "Early Childhood Caries",
    image: EarlyChildhoodCaries,
    imageAlt: "Child dental examination",
    intro: "Early childhood caries refers to tooth decay affecting young children. Early dental assessment helps identify the extent of decay and plan suitable treatment alongside guidance on feeding habits and oral hygiene.",
    benefits: [
      "Early assessment of childhood tooth decay",
      "Treatment planning for affected teeth",
      "Guidance for parents and caregivers",
      "Support for preventive oral care",
    ],
    steps: [
      ["Consultation", "Discuss the child's symptoms and oral care routine."],
      ["Examination", "Check affected teeth and gums."],
      ["Treatment Plan", "Discuss suitable care options."],
      ["Dental Care", "Provide the recommended treatment."],
      ["Prevention", "Review diet, brushing and follow up needs."],
    ],
  }),

  "tooth-coloured-fillings": createTreatment({
    title: "Tooth Coloured Fillings",
    image: generalImage,
    imageAlt: "Tooth coloured dental filling",
    intro: "Tooth coloured fillings use restorative materials designed to blend with natural teeth. They may be recommended to repair cavities or selected areas of tooth damage after a dental examination.",
    benefits: [
      "Natural looking restoration option",
      "Repair of selected cavities",
      "Support for tooth shape and function",
      "Material choice based on the tooth condition",
    ],
    steps: [
      ["Consultation", "Discuss sensitivity or tooth damage."],
      ["Examination", "Assess the tooth and extent of decay."],
      ["Preparation", "Remove decay where required."],
      ["Filling", "Place and shape the restorative material."],
      ["Review", "Check the bite and home care instructions."],
    ],
  }),

  "vital-pulp-therapy": createTreatment({
    title: "Vital Pulp Therapy",
    image: VitalPulpTherapy,
    imageAlt: "Pediatric dental treatment",
    intro: "Vital pulp therapy is a group of procedures used in selected cases to maintain the health of living pulp tissue in a tooth. The dentist will assess the tooth and decide whether this approach is suitable.",
    benefits: [
      "Assessment of pulp health",
      "Treatment planning for selected teeth",
      "May help preserve living pulp tissue",
      "Follow up monitoring of the treated tooth",
    ],
    steps: [
      ["Consultation", "Discuss symptoms and dental history."],
      ["Pulp Assessment", "Evaluate the tooth and pulp condition."],
      ["Treatment Selection", "Choose the appropriate pulp therapy."],
      ["Procedure", "Carry out the planned treatment."],
      ["Review", "Monitor the tooth over time."],
    ],
  }),

  "strip-crowns": createTreatment({
    title: "Strip Crowns",
    image: StripCrowns,
    imageAlt: "Pediatric dental crown model",
    intro: "Strip crowns are tooth coloured restorations sometimes used to restore damaged primary front teeth. The dentist will assess the tooth and determine whether this restoration is suitable.",
    benefits: [
      "Restoration option for selected primary teeth",
      "Tooth coloured appearance",
      "Support for tooth shape and function",
      "Care planned around the child's needs",
    ],
    steps: [
      ["Consultation", "Discuss the child's tooth and concerns."],
      ["Assessment", "Check the primary tooth and surrounding tissues."],
      ["Preparation", "Prepare the tooth for restoration."],
      ["Crown Placement", "Place and shape the strip crown."],
      ["Review", "Check fit and provide care instructions."],
    ],
  }),

  "scaling-tooth-polishing": createTreatment({
    title: "Scaling and Tooth Polishing",
    image: ScalingandToothPolishing,
    imageAlt: "Professional dental cleaning",
    intro: "Scaling removes hardened deposits from tooth surfaces, while polishing may help remove certain surface stains. Your dental professional will assess gum health and recommend an appropriate cleaning approach.",
    benefits: [
      "Removal of hardened plaque deposits",
      "Assessment of gum health",
      "Cleaning guidance for home care",
      "Support for preventive dental visits",
    ],
    steps: [
      ["Consultation", "Discuss gum health and cleaning concerns."],
      ["Examination", "Check plaque, deposits and gum condition."],
      ["Scaling", "Remove deposits using suitable dental instruments."],
      ["Polishing", "Polish tooth surfaces when appropriate."],
      ["Guidance", "Review brushing and interdental cleaning."],
    ],
  }),

  "preventive-dentistry": createTreatment({
    title: "Preventive Dentistry",
    image: generalImage,
    imageAlt: "Preventive dental checkup",
    intro: "Preventive dentistry aims to reduce the risk of dental problems through regular checkups, oral hygiene advice and suitable preventive measures. Recommendations depend on age, oral health and individual risk factors.",
    benefits: [
      "Regular oral health monitoring",
      "Personalized brushing guidance",
      "Early identification of dental concerns",
      "Advice on diet and preventive care",
    ],
    steps: [
      ["Consultation", "Discuss oral health habits and concerns."],
      ["Examination", "Assess teeth, gums and oral health."],
      ["Risk Review", "Identify areas that may need preventive attention."],
      ["Prevention Plan", "Discuss suitable preventive measures."],
      ["Review", "Plan regular dental checkups."],
    ],
  }),

  "dental-trauma-kids": createTreatment({
    title: "Dental Trauma in Kids",
    image: DentalTraumainKids,
    imageAlt: "Child dental consultation",
    intro: "Dental trauma in children can involve chipped, displaced or injured teeth. Prompt assessment by a dentist is important because treatment depends on the type of injury, the child's age and whether the affected tooth is primary or permanent.",
    benefits: [
      "Assessment of injured teeth",
      "Evaluation of surrounding tissues",
      "Treatment planning based on the injury",
      "Guidance for parents and caregivers",
    ],
    steps: [
      ["Initial Assessment", "Discuss how and when the injury happened."],
      ["Dental Examination", "Check the injured tooth and surrounding area."],
      ["Treatment Planning", "Determine the appropriate care."],
      ["Dental Treatment", "Provide treatment according to the injury."],
      ["Follow Up", "Monitor healing and tooth development."],
    ],
  }),

  "tooth-extraction": createTreatment({
    title: "Tooth Extraction",
    image: extractionImage,
    imageAlt: "Dental extraction instrument",
    intro: "Tooth extraction may be recommended when a tooth cannot be treated or needs to be removed for another dental reason. Your dentist will explain the options, procedure and aftercare.",
    benefits: [
      "Assessment of the tooth and surrounding area",
      "Clear explanation of treatment options",
      "Professional care during the procedure",
      "Guidance for recovery and aftercare",
    ],
    steps: [
      ["Consultation", "Discuss your symptoms and concerns."],
      ["Assessment", "Your dentist examines the affected tooth."],
      ["Procedure", "Review the recommended extraction plan."],
      ["Aftercare", "Receive recovery instructions and follow up advice."],
    ],
  }),
};

/* =========================================
   SERVICE DETAIL PAGE
========================================= */

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const service = services[slug];

  if (!service) {
    return (
      <main className="service-detail-not-found">
        <h1>Service not found</h1>
        <p>Please return to the services page to choose a treatment.</p>
        <Link to="/services" className="service-detail-button">
          View Services
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </main>
    );
  }

  const isRootCanal = slug === "root-canal-treatment";
  const isDentalImplant = slug === "dental-implants";

  return (
    <main className="service-detail-page">
      <section
        className="service-detail-hero"
        style={{ "--service-hero-image": `url("${service.image}")` }}
      >
        <div className="service-detail-hero-shade" />

        <div className="service-detail-hero-content">
          <nav className="service-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <span className="service-detail-eyebrow">Smile & Glow Vasan</span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>

          <Link
            to="/book-appointment"
            className="service-detail-button service-detail-button-orange"
          >
            <CalendarDays size={18} aria-hidden="true" />
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="service-detail-overview service-detail-container">
        <div className="service-detail-image">
          <img src={service.image} alt={service.imageAlt} />
        </div>

        <div className="service-detail-copy">
          <span className="service-detail-eyebrow">About The Service</span>
          <h2>
            {isRootCanal
              ? "Understanding Root Canal Treatment"
              : isDentalImplant
              ? "Understanding Dental Implants"
              : "Care Designed Around Your Smile"}
          </h2>
          <p>{service.intro}</p>

          <div className="service-detail-benefits">
            {service.benefits.map((benefit) => (
              <div className="service-detail-benefit" key={benefit}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-process service-detail-container">
        <div className="service-detail-process-heading">
          <span className="service-detail-eyebrow">Your Visit</span>
          <h2>
            {isDentalImplant
              ? "Your Dental Implant Journey"
              : isRootCanal
              ? "How Root Canal Treatment Works"
              : "What To Expect"}
          </h2>
          <p>
            Your dentist will explain each step and help you understand
            the care options recommended for your needs.
          </p>
        </div>

        <div
          className={`service-detail-steps ${
            service.steps.length === 5 ? "five-steps" : ""
          }`}
        >
          {service.steps.map(([title, description], index) => (
            <article className="service-detail-step" key={title}>
              <span className="service-detail-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {service.aftercare && (
        <section className="service-detail-aftercare service-detail-container">
          <div className="service-detail-aftercare-copy">
            <span className="service-detail-eyebrow">After Your Visit</span>
            <h2>
              {isDentalImplant
                ? "Caring for Your Dental Implants"
                : isRootCanal
                ? "Taking Care of Your Tooth"
                : `Aftercare for ${service.title}`}
            </h2>
            <p>
              Good aftercare and regular dental visits support your oral health
              after treatment.
            </p>

            <div className="service-detail-aftercare-list">
              {service.aftercare.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-detail-aftercare-visual">
            <div className="service-detail-aftercare-icon">
              <ShieldCheck size={54} />
            </div>
            <span>Care Beyond Treatment</span>
            <h3>Your oral health matters at every step.</h3>
          </div>
        </section>
      )}

      {service.faqs && (
        <section className="service-detail-faq service-detail-container">
          <div className="service-detail-section-heading">
            <span className="service-detail-eyebrow">Common Questions</span>
            <h2>
              {isDentalImplant
                ? "Dental Implant FAQs"
                : isRootCanal
                ? "Root Canal FAQs"
                : `${service.title} FAQs`}
            </h2>
            <p>
              Helpful information to understand your dental treatment.
            </p>
          </div>

          <div className="service-detail-faq-list">
            {service.faqs.map((faq, index) => (
              <article
                className={`service-detail-faq-item ${
                  openFaq === index ? "active" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </button>

                {openFaq === index && (
                  <div className="service-detail-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="service-detail-note service-detail-container">
        <div className="service-detail-note-icon">
          <ShieldCheck size={28} aria-hidden="true" />
        </div>
        <div className="service-detail-note-copy">
          <h2>Personalized Dental Care</h2>
          <p>
            Every treatment starts with an assessment. Your dentist will explain
            the suitable options, expected steps and aftercare for your needs.
          </p>
        </div>
      </section>

      <section className="service-detail-cta service-detail-container">
        <div className="service-detail-cta-icon">
          <Sparkles size={34} aria-hidden="true" />
        </div>

        <div className="service-detail-cta-copy">
          <span>Smile & Glow Vasan</span>
          <h2>Ready to Plan Your Visit?</h2>
          <p>Contact our team to discuss your dental care options.</p>
        </div>

        <Link
          to="/book-appointment"
          className="service-detail-button service-detail-button-light"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Book Appointment
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
