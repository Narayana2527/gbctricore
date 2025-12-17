import React from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

// Note: I have cleaned up the redundant entries in the 'course-overview' array for 'Tosca'
const CourseDetailsData ={
    "Tosca":{
        "banner":"/assets/images/course-img.jpg",
        "overview":"Our TOSCA Automation Training program is designed to help learners master codeless automation using Tricentis Tosca, the most widely used enterprise testing platform. This course covers everything from testing fundamentals to advanced Tosca functionalities such as API Testing, Test Data Services, Recovery Scenarios, DB operations, and CI/CD integration.Through hands-on sessions, real-time examples, and industry-aligned best practices, participants gain the ability to design, automate, and execute robust end-to-end test solutions.",
        "course-overview":[
            {
                "section_number": 1,                 
                "section_title":"Pre-TOSCA Foundation Topics",
                "topics":[
                    "Agile methodology & Scrum process",
                    "Waterfall model overview",
                    "Manual testing fundamentals",
                    "SDLC & STLC process",
                    "Defect life cycle & JIRA workflow",
                    "Types of testing"
                ]
            },
            {
                "section_number": 2, 
                "section_title": "Introduction to TOSCA",
                "topics": [
                    "Repository structure & naming conventions",
                    "Best-practice project organization",
                    "Artifact creation & approval stages",
                    "Reusable Test Step Blocks",
                    "Test Configuration Parameters",
                    "Folder & workspace management"
                ]
            },
            {
                "section_number": 3,                 
                "section_title":"Modules Creation",
                "topics":[
                    "Create, edit, rescan, merge & replace modules",
                    "Save module structures",
                    "Work with XModules"
                ]
            },
            {
                "section_number": 4,                 
                "section_title":"Test Case Design & Development",
                "topics":[
                    "Create and manage TestCases",
                    "Adding test steps & test data",
                    "Action modes in TestCases",
                    "Working with Standard ModulesSDLC & STLC process",
                    "Assigning modules to TestCases"
                ]
            },
            {
                "section_number": 5,                 
                "section_title":"Buffering & Web Handling",
                "topics":[
                    "Using Buffer and Dynamic Buffer",
                    "Storing and retrieving buffer values",                    
                ]
            },
            {
                "section_number": 6,                 
                "section_title":"Loops and Conditions",
                "topics":[
                    "If-Else logic",
                    "Do loops",
                    "Order of condition handling"
                ]
            },
            {
                "section_number": 7,                 
                "section_title":"Test Libraries & Reusability",
                "topics":[
                    "TestCase libraries",
                    "Reusable test step blocks",
                    "Working with Manual TestCases"
                ]
            },
            {
                "section_number": 8,                 
                "section_title":"String & File Operations",
                "topics":[
                    "Standard string operations",
                    "Dynamic expressions",
                    "File operations in Tosca"
                ]
            },
            {
                "section_number": 9,                 
                "section_title":"Tosca Database Operations",
                "topics":[
                    "TBOX DB: Open/Close Connection",
                    "Run SQL statements",
                    "Work with Expert Modules"
                ]
            },
            {
                "section_number": 10,                 
                "section_title":"Multi-User Environment & Synchronization",
                "topics":[
                    "Repository synchronization",
                    "Synchronization behavior settings",
                    "Enable/disable synchronization"
                ]
            },
            {
                "section_number": 11,                 
                "section_title":"Execution Lists & Test Events",
                "topics":[
                    "Create ExecutionLists",
                    "Execution management & TestEvents",
                    "Recovery Scenarios setup"
                ]
            },
            {
                "section_number": 12,                 
                "section_title":"Excel & PDF Engine",
                "topics":[
                    "Steering Excel files",
                    "Excel comparisons",
                    "PDF validations & PDF comparisons"
                ]
            },
            {
                "section_number": 13,                 
                "section_title":"API Testing",
                "topics":[
                    "API TestCase creation",
                    "Test structure best practices",
                    "Schema, request/response handling"
                ]
            },
            {
                "section_number": 14,                 
                "section_title":"Test Data Services (TDS)",
                "topics":[
                    "Configure TDS",
                    "Authentication & authorization",
                    "Using TDS API documentation"
                ]
            },
            {
                "section_number": 15,                 
                "section_title":"TestCase Design & Template Instances",
                "topics":[
                    "Working with Templates",
                    "Schema path",
                    "Instance creation & management"
                ]
            },
        ],
        "objectives":[
            "100% practical training with real-time examples",
            "Complete hands-on experience in Tosca Commander",
            "Industry-aligned advanced automation curriculum",
            "Project-based learning with reusable framework concepts",
            "Expert trainers with enterprise automation experience",
            "Interview preparation & certification support",
            "Access to recordings, materials, and doubt-clearing sessions"

        ],
        "courseOutcomes":[
            "Build end-to-end automated test suites using Tosca",
            "Perform UI, API, DB, Excel, PDF, and integrated testing",
            "Design reusable, scalable automation frameworks",
            "Handle test data, template instances, and advanced operations",
            "Work confidently in agile enterprise automation environments"

        ]
    },
    
    "selenium":{
        "banner":"/assets/images/course-img.jpg",
        "overview":"Our Selenium with Java Automation Training is designed to help learners master automation testing using Java, Selenium WebDriver, TestNG, Cucumber (BDD), Page Object Model (POM), Hybrid Frameworks, and CI/CD pipelines.This course provides complete hands-on experience, real-time use cases, and industry-level framework development to prepare you for Automation Test Engineer roles in top IT companies.",
        "course-overview":[
            {
                "section_number": 1,                 
                "section_title":"Core Java for Test Automation",
                "topics":[
                    "Java basics & OOPs concepts",
                    "Data types, variables, operators",
                    "Conditional statements & loops",
                    "Arrays, Strings, Collections",
                    "Exception handling",
                    "File handling",
                    "Java I/O, Streams",
                    "Constructors, Inheritance, Polymorphism",
                    "Interfaces & Abstract classes"

                ]
            },
            {
                "section_number": 2, 
                "section_title": "Selenium WebDriver – Foundations",
                "topics": [
                    "Introduction to Selenium Suite",
                    "Selenium architecture & components",
                    "WebDriver setup & configuration",
                    "Locators (ID, Name, CSS, XPath, LinkText)",
                    "Finding elements & WebElement methods",
                    "Browser interactions (Chrome, Firefox, Edge)",
                    "Handling alerts, popups, frames & windows",
                    "Synchronization: Implicit, Explicit & Fluent Waits",
                    "Actions class: Mouse & keyboard events",
                    "Handling dynamic elements & web tables"

                ]
            },
            {
                "section_number": 3,                 
                "section_title":"TestNG Framework",
                "topics":[
                    "TestNG installation & configuration",
                    "Annotations & execution flow",
                    "Test suites, groups & parallel execution",
                    "Assertions & reporting",
                    "Data-driven testing using DataProviders",
                    "Listeners (ITestListener, IReporter)",
                    "Retry mechanism & failed test handling"

                ]
            },
            {
                "section_number": 4,                 
                "section_title":"Selenium Grid & Parallel Execution",
                "topics":[
                    "Grid architecture",
                    "Hub & Node configuration",
                    "Parallel execution on multiple browsers",
                    "RemoteWebDriver"

                ]
            },
            {
                "section_number": 5,                 
                "section_title":"Cucumber BDD (Behavior-Driven Development)",
                "topics":[
                    "Gherkin syntax: Feature, Scenario, Steps",
                    "Step definitions & glue code",
                    "Hooks & tags",
                    "DataTables",
                    "Cucumber reports",
                    "Integrating Selenium with Cucumber",
                    "BDD framework creation from scratch"
                                    
                ]
            },
            {
                "section_number": 6,                 
                "section_title":"Framework Design & Automation Architecture",
                "section_sub":   [
                    {
                        "sub_title":"Page Object Model (POM)",
                        "topics":[
                            "PageFactory",
                            "Object repositories",
                            "Reusable methods & utilities"
                        ]
                    },
                    {
                        "sub_title":"Hybrid Framework",
                        "topics":[
                            "Combining POM + TestNG + Utilities",
                            "Exception handling & custom libraries",
                            "Reusable driver management",
                            "Test data management"

                        ]
                    },
                    {
                        "sub_title":"Data-Driven Framework",
                        "topics":[
                            "Apache POI for Excel integration",
                            "Property files / JSON for configuration"
                        ]
                    },
                    {
                        "sub_title":"Cucumber BDD Framework",
                        "topics":[
                            "Step definitions, runners, hooks",
                            "Reporting: Extent Reports, Allure Reports"
                        ]
                    }
                ],
                
            },
            {
                "section_number": 7,                 
                "section_title":"Build Tools & Version Control",
                "section_sub":[
                    {
                        "sub_title":"Maven",
                        "topics":[
                            "PageFactory",
                            "Object repositories",
                            "Reusable methods & utilities"
                        ]
                    },
                    {
                        "sub_title":"Git & GitHub",
                        "topics":[
                            "Version control commands",
                            "Branching, merging & pull requests",
                            "Reusable methods & utilities"
                        ]
                    }
                ],
            },
            {
                "section_number": 8,                 
                "section_title":"CI/CD Integration",
                "topics":[
                    "Jenkins pipeline setup",
                    "Triggering scripts automatically",
                    "Scheduler-based builds",
                    "Report generation & notifications"

                ]
            },
            {
                "section_number": 9,                 
                "section_title":"API Testing Basics (Add-on)",
                "topics":[
                    "REST API fundamentals",
                    "Postman usage",
                    "Introduction to RestAssured",
                    "Simple GET/POST automation"

                ]
            },
            {
                "section_number": 10,                 
                "section_title":"Additional Automation Concepts",
                "topics":[
                    "Logging using Log4j",
                    "Debugging & breakpoints",
                    "Custom exception handling",
                    "Working with JSON/XML files",
                    "Code optimization & best practices"

                ]
            },
            
        ],
        "objectives":[
            "100% Hands-on Training with real-time project",
            "Complete Selenium + Java + TestNG + Cucumber coverage",
            "End-to-End Framework Development from scratch",
            "Interview preparation & mock assessments",
            "Industry-level automation standards & best practices",
            "Assignments, use-cases & capstone project",
            "Git, Maven, Jenkins CI/CD integration",
            "Reusable utilities & custom framework creation",
            "Access to recordings & lifetime study materials"


        ],
        "courseOutcomes":[
            "Build scalable automation frameworks using Java + Selenium",
            "Automate web UI test scenarios across browsers",
            "Perform parallel execution using Selenium Grid",
            "Integrate scripts with Maven, Git, Jenkins",
            "Automate REST API basics",
            "Work confidently on enterprise-level automation projects"

        ]
    },    
    "IBM-Mainframes":{
        "banner":"/assets/images/course-img.jpg",
        "overview":"Our IBM Mainframe Training program is designed to equip learners with strong fundamentals and hands-on skills in COBOL, JCL, VSAM, DB2, CICS, REXX, TSO/ISPF, and real-time Mainframe application development.This course is ideal for beginners and professionals aiming to build careers in Banking, Insurance, Retail, Manufacturing, and Fortune 500 Mainframe environments.With practical assignments, real-time project exposure, and industry-standard coding techniques, learners gain the expertise required to work confidently as Mainframe Developers or Support Engineers.",
        "course-overview":[
            {
                "section_number": 1,                 
                "section_title":"Introduction to Mainframes",
                "topics":[
                    "What is a Mainframe?",
                    "Evolution & architecture",
                    "LPAR, CPU, Storage & DASD concepts",
                    "Industries using Mainframes",
                    "Understanding Batch vs Online Processing"

                ]
            },
            {
                "section_number": 2, 
                "section_title": "TSO & ISPF",
                "topics": [
                    "Logging into TSO",
                    "ISPF panels & menu navigation",
                    "Dataset creation, browsing, editing",
                    "Copy, move, delete, rename datasets",
                    "Utilities: 3.3, 3.4, sort, search, member list",
                    "Using SDSF for job monitoring"

                ]
            },
            {
                "section_number": 3,                 
                "section_title":"JCL (Job Control Language)",
                "topics":[
                    "JCL structure, syntax, rules",
                    "JOB, EXEC, DD statements",
                    "Condition codes & RETURN codes",
                    "Instream vs Cataloged procedures",
                    "DD names, datasets, disposition",
                    "Symbolic parameters & overrides",
                    "Restart & Checkpoint concepts",
                    "Error handling & debugging of jobs"

                ]
            },
            {
                "section_number": 4,                 
                "section_title":"COBOL Programming ",
                "section_sub":[
                    {
                        "sub_title":"Foundations",
                        "topics":[
                            "COBOL program structure",
                            "IDENTIFICATION, ENVIRONMENT, DATA, PROCEDURE Divisions",
                            "Variables, Data Types, PIC clauses",
                            "File handling & Sequential/Indexed files",
                            "Reading, Writing, Updating records"

                        ]
                    },{
                        "sub_title":"Advanced COBOL",
                        "topics":[
                            "Internal & external tables",
                            "Arrays, Subscripts, Indexes",
                            "COBOL STRING, UNSTRING, INSPECT",
                            "File Status codes",
                            "Report writing",
                            "Subprograms, CALL statements",
                            "Working-Storage vs Linkage Section"


                        ]
                    }
                ]                
            },
            {
                "section_number": 5,                 
                "section_title":"VSAM (Virtual Storage Access Method)",
                "topics":[
                    {
                        "title": "Framework Architecture",
                        "subTopics": [
                            "Page Object Model (POM)",
                            "Data Driven Framework",
                            "Hybrid Framework"
                        ]
                    },
                    "IDCAMS utility",
                    "Defining, loading & listing VSAM datasets",
                    "VSAM programming with COBOL",
                    "VSAM error codes & debugging"
                 
                ]
            },
            {
                "section_number": 6,                 
                "section_title":"DB2 (Database 2)",
                "topics":[
                    "DB2 architecture & components",
                    "DDL & DML operations",
                    "Tables, indexes, views",
                    "SQL programming basics (SELECT, INSERT, UPDATE, DELETE)",
                    "Embedded SQL in COBOL",
                    "Cursors in COBOL–DB2 programs",
                    "Bind process & plan/package concepts",
                    "Performance optimization basics"

                ]
            },
            {
                "section_number": 7,                 
                "section_title":"CICS – Online Transaction Processing",
                "topics":[
                    "CICS architecture & components",
                    "Terminals, screens, BMS maps",
                    "Write, Read, SEND/RECEIVE MAP",
                    "HANDLE CONDITION, SYNCPOINT",
                    "COMMAREAs & program communication",
                    "COBOL–CICS programming",
                    "Error handling & debugging"

                ]
            },
            {
                "section_number": 8,                 
                "section_title":"Mainframe Utilities & Tools",
                "topics":[
                    "SORT utility",
                    "IEBCOPY, IEBGENER",
                    "FileAid, Endevor/Changeman basics",
                    "Abend handling tools",
                    "Debugging utilities"

                ]
            },
            {
                "section_number": 9,                 
                "section_title":"Tosca Database Operations",
                "topics":[
                    "TBOX DB: Open/Close Connection",
                    "Run SQL statements",
                    "Work with Expert Modules"
                ]
            },
            {
                "section_number": 10,                 
                "section_title":"Multi-User Environment & Synchronization",
                "topics":[
                    "Repository synchronization",
                    "Synchronization behavior settings",
                    "Enable/disable synchronization"
                ]
            },
            {
                "section_number": 11,                 
                "section_title":"Execution Lists & Test Events",
                "topics":[
                    "Create ExecutionLists",
                    "Execution management & TestEvents",
                    "Recovery Scenarios setup"
                ]
            },
            {
                "section_number": 12,                 
                "section_title":"Excel & PDF Engine",
                "topics":[
                    "Steering Excel files",
                    "Excel comparisons",
                    "PDF validations & PDF comparisons"
                ]
            },
            {
                "section_number": 13,                 
                "section_title":"API Testing",
                "topics":[
                    "API TestCase creation",
                    "Test structure best practices",
                    "Schema, request/response handling"
                ]
            },
            {
                "section_number": 14,                 
                "section_title":"Test Data Services (TDS)",
                "topics":[
                    "Configure TDS",
                    "Authentication & authorization",
                    "Using TDS API documentation"
                ]
            },
            {
                "section_number": 15,                 
                "section_title":"TestCase Design & Template Instances",
                "topics":[
                    "Working with Templates",
                    "Schema path",
                    "Instance creation & management"
                ]
            },
        ],
        "objectives":[
            "Complete Hands-on Mainframe Training",
            "COBOL + JCL + VSAM + DB2 + CICS covered in-depth",
            "Real-time project implementation",
            "Access to Mainframe emulator environment (if provided)",
            "Assignments, coding challenges & mock interviews",
            "Resume preparation & interview guidance",
            "Industry-oriented best practices",
            "Practical knowledge of Mainframe utilities and tools",
            "Exposure to production support & real-time ticket scenarios"


        ],
        "courseOutcomes":[
            "Write and execute COBOL, JCL, VSAM, DB2, and CICS programs",
            "Develop and maintain Mainframe batch & online applications",
            "Debug, test, and optimize Mainframe jobs",
            "Handle real-time support activities & production incidents",
            "Work confidently in banking, insurance & financial Mainframe projects"

        ]
    },
    "okta":{
        "banner":"/assets/images/course-img.jpg",
        "overview":"Our OKTA IAM Training program is designed to help learners master cloud-based identity and access management, covering everything from user authentication, authorization, SSO, MFA, provisioning, API security, and lifecycle automation.This course provides deep hands-on experience with Okta Admin Console, Okta Integration Network (OIN), Identity Governance, and Zero-Trust security concepts, preparing you for enterprise IAM roles.",
        "course-overview":[
            {
                "section_number": 1,                 
                "section_title":"Introduction to Identity & Access Management",
                "topics":[
                    "What is IAM?",
                    "Authentication vs Authorization",
                    "Core IAM concepts: Identity Stores, Federation, SSO, MFA",
                    "Why Okta? Overview of Okta Identity Cloud",
                    "Zero Trust & security fundamentals"

                ]
            },
            {
                "section_number": 2, 
                "section_title": "Okta Tenant & Admin Console",
                "topics": [
                    "Okta tenant setup",
                    "Navigation through Okta Admin Console",
                    "Understanding org structure, dashboards, directories",
                    "Managing admins & admin roles"

                ]
            },
            {
                "section_number": 3,                 
                "section_title":"Universal Directory",
                "topics":[
                    "User profiles & attributes",
                    "Group management",
                    "Custom attributes",
                    "Directory integrations (AD/LDAP)",
                    "Importing users & directory sync"

                ]
            },
            {
                "section_number": 4,                 
                "section_title":"Single Sign-On (SSO)",
                "topics":[
                    "SSO concepts & workflows",
                    "SAML 2.0 integration",
                    "OAuth 2.0 & OpenID Connect (OIDC) integration",
                    "Application assignments",
                    "SSO for enterprise apps (Salesforce, Slack, ServiceNow, etc.)",
                    "IdP & SP initiated flows",
                    "SSO troubleshooting"

                ]
            },
            {
                "section_number": 5,                 
                "section_title":"Multi-Factor Authentication (MFA) & Adaptive MFA",
                "topics":[
                    "MFA enrollment & verification methods",
                    "Okta Verify, Google Authenticator, SMS, Email",
                    "Adaptive MFA policies",
                    "Contextual Access Management",
                    "Location, risk & device-based access",
                    "Configuring step-up authentication"
                    
                ]
            },
            {
                "section_number": 6,                 
                "section_title":"Lifecycle Management (LCM)",
                "topics":[
                    "Provisioning & deprovisioning",
                    "Joiner–Mover–Leaver (JML) workflows",
                    "HR-driven IT provisioning",
                    "Group rules",
                    "Automation policies",
                    "Password policies",
                    "Application provisioning using SCIM"

                ]
            },
            {
                "section_number": 7,                 
                "section_title":"Integration with Active Directory / LDAP",
                "topics":[
                    "AD/LDAP architecture",
                    "Installing & configuring Okta AD Agent",
                    "Real-time sync",
                    "Password sync & group management",
                    "Managing profile masters"

                ]
            },
            {
                "section_number": 8,                 
                "section_title":"API Access Management",
                "topics":[
                    "OAuth 2.0 authorization servers",
                    "Scopes, tokens, claims",
                    "Custom API authorization policies",
                    "Protecting APIs using Okta"

                ]
            },
            {
                "section_number": 9,                 
                "section_title":"Okta Workflows (Automation)",
                "topics":[
                    "No-code automation",
                    "Building automation flows",
                    "User lifecycle automation",
                    "Event-driven workflows",
                    "Common real-time use cases"

                ]
            },
            {
                "section_number": 10,                 
                "section_title":"Okta Identity Governance (Optional Advanced Module)",
                "topics":[
                    "Access Requests",
                    "Access Certification",
                    "Application Access Governance",
                    "Risk-based certification campaigns"

                ]
            },
            {
                "section_number": 11,                 
                "section_title":"Okta Integration Network (OIN)",
                "topics":[
                    "Pre-built app integrations",
                    "Configuring cloud apps",
                    "Custom app integrations",
                    "Assigning & revoking access"

                ]
            },
            {
                "section_number": 12,                 
                "section_title":"Security Policies & Compliance",
                "topics":[
                    "Authentication policies",
                    "Password policies",
                    "Device trust policies",
                    "Session lifetime settings",
                    "Logging & monitoring",
                    "SIEM integration (Splunk / QRadar)",

                ]
            },
            {
                "section_number": 13,                 
                "section_title":"Reporting & Troubleshooting",
                "topics":[
                    "System logs",
                    "API logs",
                    "Event types & analysis",
                    "Troubleshooting SSO/MFA/Provisioning issues"

                ]
            },
            {
                "section_number": 14,                 
                "section_title":"Real-Time Project Implementation",
                "topics":[
                    "Configure enterprise SSO for multiple apps",
                    "Implement MFA + Adaptive MFA",
                    "Automate user lifecycle using Okta Workflows",
                    "Build SSO using SAML & OIDC",
                    "SCIM-based provisioning for SaaS apps",
                    "Create & test OAuth Authorization Server",
                    "Integrate Okta with AD and automate sync"

                ]
            },
            // {
            //     "section_number": 15,                 
            //     "section_title":"TestCase Design & Template Instances",
            //     "topics":[
            //         "Working with Templates",
            //         "Schema path",
            //         "Instance creation & management"
            //     ]
            // },
        ],
        "objectives":[
            "Complete hands-on OKTA IAM training",
            "SSO, MFA, Lifecycle Management, OAuth, SCIM covered in-depth",
            "Real-time project-based implementation",
            "Admin Console & Workflow automation training",
            "Assignments, labs & scenarios",
            "Mock interviews & certification guidance",
            "Best practices for Zero-Trust IAM",


        ],
        "courseOutcomes":[
            "Implement SSO using SAML/OIDC",
            "Configure Multi-Factor Authentication (Adaptive MFA)",
            "Manage users & groups using Universal Directory",
            "Automate lifecycle management with SCIM and Workflows",
            "Integrate Okta with AD/LDAP",
            "Build secure OAuth 2.0-based API access flows",
            "Implement Zero-Trust access controls",
            "Troubleshoot SSO, MFA & provisioning issues"


        ]
    },
}


const CourseDetails = () => {
    const { courseId } = useParams();
    const course = CourseDetailsData[courseId];

    if (!course) {
        return (
            <Container className="py-5 text-center">
                <h2 className="display-4">Course Not Found</h2>
                <p className="lead">The course ID <strong>`{courseId}`</strong> does not match any available course.</p>
                <Button href="/" variant="primary">Back to Home</Button>
            </Container>
        );
    }

    const courseOverview = course['course-overview'] || [];
    const formattedTitle = courseId.toUpperCase().replace(/-/g, ' ');
    
    // Theme Colors
    const ACCENT_COLOR = "#ffc400";
    const PRIMARY_COLOR = "#5043e7";

    return (
        <div className="course-details-wrapper pb-5">
            {/* ===== Banner Section ===== */}
            <div className="position-relative w-100 mb-4 mb-lg-5">
                {/* 1. The Image acts as the background base */}
                <Image
                    src={course.banner}
                    alt={formattedTitle}
                    className="w-100"
                    style={{ height: "40vh", minHeight: "250px", objectFit: "cover" }}
                />                

                {/* 2. Move the Header INSIDE the relative div and apply centering classes */}
                <header 
                    className="text-center position-absolute top-50 start-50 translate-middle w-100"
                    style={{ zIndex: 1 }}
                >
                    <h1 className="display-4 fw-bold mb-3" style={{ color: "#ffffff "}}>
                        {formattedTitle}
                    </h1>
                    <hr 
                        className="mx-auto border-4 opacity-100" 
                        style={{ width: "80px", borderColor: ACCENT_COLOR, borderRadius: "10px" }} 
                    />
                </header>
            </div>
            <Container>
                {/* ===== Header Hierarchy ===== */}
                

                <Row className="g-4 lg-g-5">
                    {/* ===== Main Content (Curriculum & Overview) ===== */}
                    <Col lg={8}>
                        <section className="mb-5 shadow-sm p-3 p-md-4 rounded bg-white">
                            <h2 className="h3 mb-4 fw-bold">Course Overview</h2>
                            <p className="text-muted lead" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                                {course.overview}
                            </p>
                        </section>

                        {courseOverview.length > 0 && (
                            <section className="mb-5 shadow-sm p-3 p-md-4 rounded bg-white">
                                <h2 className="h3 mb-4 fw-bold border-bottom pb-2">Course Curriculum</h2>
                                
                                {courseOverview.map((section, index) => (
                                    <div key={index} className="mb-4">
                                        {/* Standard Section Title */}
                                        {typeof section.section_title === "string" && (
                                            <div className="mb-3">
                                                <h4 className="h5 fw-bold text-primary">
                                                    {section.section_number}. {section.section_title}
                                                </h4>
                                                <ul className="list-unstyled ms-2 ms-md-3">
                                                    {section.topics?.map((topic, i) => (
                                                        <li key={i} className="mb-2 d-flex align-items-start">
                                                            <span className="me-2 text-warning">•</span>
                                                            <div>
                                                                {typeof topic === "string" ? topic : (
                                                                    <>
                                                                        <span className="fw-semibold">{topic.title}</span>
                                                                        {topic.subTopics && (
                                                                            <ul className="mt-1 text-muted small">
                                                                                {topic.subTopics.map((sub, si) => <li key={si}>{sub}</li>)}
                                                                            </ul>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Nested Sections (Selenium Style) */}
                                        {Array.isArray(section.section_sub) && (
                                            <div className="ms-3 border-start ps-3">
                                                {section.section_sub.map((sub, subIndex) => (
                                                    <div key={subIndex} className="mb-3">
                                                        <h5 className="h6 fw-bold">{sub.sub_title}</h5>
                                                        <ul className="text-muted small">
                                                            {sub.topics.map((t, ti) => <li key={ti}>{t}</li>)}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </section>
                        )}
                    </Col>

                    {/* ===== Sidebar (Features & Register) ===== */}
                    <Col lg={4}>
                        <div className="sticky-top" style={{ top: "100px", zIndex: "10" }}>
                            
                            {/* Key Features */}
                            <section className="mb-4 p-4 rounded text-white shadow" style={{ backgroundColor: PRIMARY_COLOR }}>
                                <h2 className="h4 mb-3 fw-bold" style={{ color: ACCENT_COLOR }}>Key Features</h2>
                                <ul className="list-unstyled mb-0">
                                    {course.objectives.map((obj, index) => (
                                        <li key={index} className="mb-2 d-flex align-items-start small">
                                            <span className="me-2">✔</span> {obj}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Training Outcomes */}
                            <section className="mb-4 p-4 rounded bg-light border shadow-sm">
                                <h2 className="h4 mb-3 fw-bold">Outcomes</h2>
                                <ul className="list-unstyled mb-0">
                                    {course.courseOutcomes.map((outcome, index) => (
                                        <li key={index} className="mb-2 d-flex align-items-start small text-muted">
                                            <span className="me-2">➔</span> {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Register CTA */}
                            <div className="text-center d-grid">
                                <Button
                                    href="https://forms.gle/DnmVqCU3FsKu4vVMA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="lg"
                                    className="fw-bold py-3 shadow"
                                    style={{ backgroundColor: PRIMARY_COLOR, border: "none" }}
                                >
                                    Register Now
                                </Button>
                                <p className="small text-muted mt-2 text-center">Limited seats available for the next batch!</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;