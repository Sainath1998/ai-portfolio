export const portfolioData = {
    name: "Sainath Kamble",
    role: "Customer Success Engineer",
    tagline: "Software Engineer turned Customer Success Specialist. I bridge the gap between complex technical engineering and seamless client experiences, with deep expertise in CDN, caching, and performance optimization.",
    email: "sainathkamble263@gmail.com",
    phone: "+91 8073504800",
    linkedin: "https://www.linkedin.com/in/sainath-kamble-49429518b/",
    leetcode: "https://leetcode.com/sainathkamble263/",
    experience: [
        {
            role: "Customer Success Engineer",
            company: "The N7 Nitrogen Platform (CDN)",
            period: "06/2025 - Present",
            location: "Mumbai, India",
            achievements: [
                "Spearheaded client onboarding and platform architecture setup, collaborating with sales and technical leads to ensure zero-friction CDN integration.",
                "Architected automation tools using Golang and Node.js for high-speed log analysis, cache invalidation, and automated performance benchmarking.",
                "Drove technical Proof of Concepts (POCs) for high-value prospects, successfully demonstrating platform speed and ROI.",
                "Conducted deep-dive website performance audits, optimizing Core Web Vitals and global cache hit ratios for enterprise clients.",
                "Managed high-stakes CDN troubleshooting, resolving complex edge-routing issues and TTL inconsistencies across globally distributed nodes."
            ]
        },
        {
            role: "Solution Engineer",
            company: "Gammastack",
            period: "09/2024 - 05/2025",
            location: "Bangalore, India",
            achievements: [
                "Engineered scalable, high-performance slot game engines leveraging the speed and concurrency of Node.js and Golang.",
                "Developed and validated complex RNG (Random Number Generator) logic using high-volume statistical simulations (10M+ rounds) to ensure regulatory compliance.",
                "Optimized backend simulation cycles by 40% through advanced parallelization and efficient use of worker threads.",
                "Significantly improved API reliability and error handling, leading to a 30% reduction in production escalations."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Vnnogile Solutions Pvt Ltd",
            period: "01/2024 - 08/2024",
            location: "Thane, India",
            achievements: [
                "Architected and implemented high-throughput backend services for marquee clients, including Tim Hortons India.",
                "Designed and maintained resilient asynchronous microservices and cron jobs in Golang for critical business logic."
            ]
        },
        {
            role: "Software Engineer",
            company: "Vnnogile Solutions Pvt Ltd",
            period: "05/2022 - 12/2023",
            location: "Thane, India",
            achievements: [
                "Directed the end-to-end development of over 100+ production-grade APIs, adhering to strict RESTful principles and clean architecture.",
                "Developed robust and scalable backend systems using both Golang and Node.js to support growing user demands."
            ]
        }
    ],
    skills: [
        { category: "Backend Architecture", items: ["Node.js", "Express.js", "Golang", "Gin-Gonic", "GORM", "Sequelize"] },
        { category: "CDN & Web Performance", items: ["Cache Tuning", "Core Web Vitals", "Latency Reduction", "Global Routing"] },
        { category: "Infrastructure & Cache", items: ["PostgreSQL", "MySQL", "Redis (Pub/Sub)", "BigQuery", "ETL Pipelines"] },
        { category: "Tools & Cloud Ecosystem", items: ["AWS", "GCP", "Postman", "Zapier", "Make", "GitLab CI/CD", "Linux Admin"] },
        { category: "Security & Compliance", items: ["JWT & OAuth", "Rate Limiting", "IP Whitelisting", "RNG Validation"] }
    ],
    projects: [
        {
            name: "The N7 Nitrogen Platform",
            description: "A flagship CDN optimization project where I lead onboarding, performance audits, and automation tool development for enterprise-scale traffic.",
            tech: ["CDN", "Performance Engineering", "Lighthouse", "Golang"]
        },
        {
            name: "Zem Public Slot Games",
            description: "Implemented high-stakes gaming logic and RNG verification systems, handling millions of simulated rounds for statistical fairness.",
            tech: ["Node.js", "Worker Threads", "Statistics", "Backend"]
        },
        {
            name: "Tim Hortons India",
            description: "Scaled backend infrastructure for a global food chain's Indian operations, including feedback systems and multi-channel campaign management.",
            tech: ["Node.js", "API Design", "CronJobs", "SSR"]
        },
        {
            name: "Certably Solutions",
            description: "Developed a secure property rental ecosystem featuring Stripe integrations and advanced fraud detection algorithms.",
            tech: ["Stripe", "Security", "Backend"]
        },
        {
            name: "Trupti Sweets",
            description: "Built a high-conversion e-commerce platform integrated with Shiprocket for real-time logistics and automated order fulfillment.",
            tech: ["Ecommerce", "Logistics", "API"]
        }
    ]
};
