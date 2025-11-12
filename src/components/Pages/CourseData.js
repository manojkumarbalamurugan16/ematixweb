import embeddedimg from "./Course images/embedded course.png";
import iotimg from "./Course images/IOT course.png";
import pcbdesignimg from "./Course images/PCB design Course.png";
import webcourseimg from "./Course images/WEB DEVELOPMENT Course.png";

const courses = [
  {
    id: 1,
    title: "Embedded Systems",
    content:
      "Learn the fundamentals of Embedded Systems, including microcontrollers, sensors, and actuators.",
    DOR: "2025-01-15",
    fees: "Rs-11000",
    image: embeddedimg,
    curriculum: [
      {
        title: "Introduction to Embedded Systems",
        topics: [
          "Overview of Embedded Systems",
          "Embedded System Applications",
          "Challenges in Embedded Systems"
        ],
      },
      {
        title: "Basics of Electronics",
        topics: [
          "Understanding Electrical Components",
          "Ohm's Law",
          "Circuit Design Basics"
        ],
      },
      {
        title: "Microcontrollers and Microprocessors",
        topics: [
          "What are Microcontrollers?",
          "Microprocessor vs Microcontroller",
          "Introduction to ARM and AVR Microcontrollers"
        ],
      },
      {
        title: "Programming Fundamentals",
        topics: [
          "Basic C Programming",
          "Data Structures and Algorithms",
          "Introduction to Embedded C"
        ],
      },
      {
        title: "RTOS (Real-Time Operating Systems)",
        topics: [
          "Introduction to RTOS",
          "RTOS Scheduling",
          "RTOS Applications and Use Cases"
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Internet of Things",
    content:
      "Learn about IoT technologies, including communication protocols and cloud integration.",
    DOR: "2025-02-10",
    fees: "Rs-11000",
    image: iotimg,
    curriculum: [
      {
        title: "Introduction to IoT",
        topics: [
          "What is IoT?",
          "IoT Architecture",
          "IoT Applications in Industry"
        ],
      },
      {
        title: "IoT Communication Protocols",
        topics: [
          "Wi-Fi and Bluetooth in IoT",
          "ZigBee and LoRaWAN",
          "MQTT and HTTP Protocols"
        ],
      },
      {
        title: "Sensors and Actuators for IoT",
        topics: [
          "Types of Sensors in IoT",
          "Interfacing Sensors with Microcontrollers",
          "Actuators and Control Systems"
        ],
      },
      {
        title: "IoT Cloud Integration",
        topics: [
          "IoT Cloud Platforms Overview",
          "Data Collection and Analysis",
          "Cloud Security for IoT"
        ],
      },
      {
        title: "IoT Security",
        topics: [
          "Challenges in IoT Security",
          "Cryptography in IoT",
          "Secure Communication Protocols"
        ],
      },
    ],
  },
  {
    id: 3,
    title: "PCB Design",
    content: "Learn about PCB design technologies and layout techniques.",
    DOR: "2025-02-10",
    fees: "Rs-11000",
    image: pcbdesignimg,
    curriculum: [
      {
        title: "Introduction to PCB Design",
        topics: [
          "PCB Design Process",
          "Types of PCBs",
          "Basic Tools for PCB Design"
        ],
      },
      {
        title: "Understanding Schematic Diagrams",
        topics: [
          "Reading Circuit Schematics",
          "Schematic Symbols",
          "Designing a Schematic"
        ],
      },
      {
        title: "Component Placement Techniques",
        topics: [
          "Best Practices for Component Placement",
          "Design Rule Check (DRC)",
          "Thermal Management in PCB"
        ],
      },
      {
        title: "Routing and Trace Design",
        topics: [
          "PCB Trace Width Calculation",
          "Routing Techniques and Strategies",
          "Signal Integrity"
        ],
      },
      {
        title: "PCB Manufacturing and Testing",
        topics: [
          "PCB Fabrication Process",
          "Testing Methods for PCBs",
          "Quality Control in PCB Manufacturing"
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Web Development",
    content:
      "Learn about web technologies, including HTML, CSS, JavaScript, and modern frameworks.",
    DOR: "2025-02-10",
    fees: "Rs-11000",
    image: webcourseimg,
    curriculum: [
      {
        title: "Introduction to Web Development",
        topics: [
          "Overview of Web Development",
          "Frontend vs Backend Development",
          "Web Development Tools and Setup"
        ],
      },
      {
        title: "HTML and CSS Basics",
        topics: [
          "Structure of an HTML Page",
          "CSS Styling and Layout",
          "Responsive Design with Media Queries"
        ],
      },
      {
        title: "JavaScript Programming",
        topics: [
          "JavaScript Basics",
          "DOM Manipulation",
          "Event Handling in JavaScript"
        ],
      },
      {
        title: "Frontend Frameworks (e.g., React)",
        topics: [
          "React Basics and Components",
          "State Management in React",
          "Routing and Navigation in React"
        ],
      },
      {
        title: "Backend Development (e.g., Node.js)",
        topics: [
          "Introduction to Node.js",
          "Building APIs with Express.js",
          "Connecting to Databases with MongoDB"
        ],
      },
    ],
  },
];

export default courses;
