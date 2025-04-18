import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "embedded-sensor-firmware",
    title: "Smart Sensor Firmware",
    description: "Low-power firmware for industrial IoT sensors with real-time analytics capabilities",
    category: "IoT",
    technologies: ["C", "FreeRTOS", "BLE", "ARM Cortex-M4"],
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "Developed firmware for a network of industrial sensors designed to operate on battery power for 5+ years. Implemented sophisticated power management algorithms and optimized communication protocols.",
    challenges: "Balancing real-time processing needs with ultra-low power requirements while ensuring reliability in harsh industrial environments.",
    solutions: "Implemented a custom scheduler with adaptive sleep modes and event-driven architecture to minimize power consumption.",
    outcomes: "Achieved 30% longer battery life than previous generation while adding new features and analytics capabilities."
  },
  {
    id: "medical-device-controller",
    title: "Medical Device Controller",
    description: "Safety-critical firmware for medical infusion pumps with regulatory compliance",
    category: "Medical",
    technologies: ["C++", "RTOS", "IEC 62304", "STM32"],
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "Designed and implemented firmware for FDA-regulated medical infusion pumps, focusing on safety-critical aspects and regulatory compliance.",
    challenges: "Meeting strict regulatory requirements while maintaining performance and implementing fault detection and recovery mechanisms.",
    solutions: "Developed a comprehensive testing framework and implemented redundant safety systems with formal verification methods.",
    outcomes: "Successfully passed FDA validation and received regulatory approval with zero critical findings."
  },
  {
    id: "automotive-can-module",
    title: "Automotive CAN Module",
    description: "High-reliability CAN bus controller for advanced vehicle systems",
    category: "Automotive",
    technologies: ["C", "AUTOSAR", "CAN", "ISO 26262"],
    image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "Developed firmware for automotive CAN bus controllers used in advanced driver assistance systems, following AUTOSAR standards and ISO 26262 safety requirements.",
    challenges: "Ensuring deterministic behavior with microsecond-level timing precision while handling complex diagnostic requirements.",
    solutions: "Implemented a layered architecture with hardware abstraction and comprehensive error handling strategies.",
    outcomes: "Deployed in production vehicles with zero field failures and meeting all timing requirements."
  },
  {
    id: "smart-home-gateway",
    title: "Smart Home Gateway",
    description: "Multi-protocol gateway for connecting and managing smart home devices",
    category: "IoT",
    technologies: ["C++", "Linux", "Zigbee", "Matter", "WiFi"],
    image: "https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "Created firmware for a versatile smart home gateway supporting multiple wireless protocols for seamless integration of diverse smart devices.",
    challenges: "Managing interoperability between different wireless standards and ensuring reliable operation with minimal user intervention.",
    solutions: "Developed a modular architecture with protocol adapters and automatic recovery mechanisms.",
    outcomes: "Successfully deployed to market with support for 200+ third-party devices and excellent user reviews."
  }
];