const accordionItems = [
  {
    id: "01",
    title: "Risk Management",
    content:
      "Identifying potential risks in real-time can be challenging, especially in dynamic environments with multiple variables.",
    banner: "/accordion/risk-management.png",
    tabs: [
      {
        name: "Challenge",
        content: [
          {
            title: "Risk Identification",
            text: "Identifying potential risks in real time can be challenging, especially in dynamic environments with multiple variables.",
          },
          {
            title: "Communication Gaps",
            text: "Delays in communicating risks to relevant stakeholders can lead to increased and escalated incidents.",
          },
          {
            title: "Resource Strain",
            text: "Increasing workloads reduce the ability to work on high- importance tasks.",
          },
        ],
        color: "bg-[#99B9FF]",
      },
      {
        name: "Size Of Problem",
        content: [
          {
            title: "Cost of Headcount",
            text: "Takes about 20% bandwidth of operational headcount, leading to inefficiencies.",
          },
          {
            title: "Improved Response Times",
            text: "Automated tracking can reduce potential damages significantly.",
          },
          {
            title: "Potential Damages",
            text: "Failing to quickly address potential incidents can lead to up to 100m in damages.",
          },
        ],
        color: "bg-white",
      },
      {
        name: "Define Value",
        content: [
          {
            title: "Cost Savings",
            text: "Saves the company approximately 6 million per annum.",
          },
          {
            title: "Improved Response Times",
            text: "An automated tracker can reduce potential damages by 2% within the first 12 months.",
          },
          {
            title: "Response & Recovery",
            text: "Faster risk identification can lead to quicker response times, minimizing potential impact and facilitating recovery efforts.",
          },
        ],
        color: "bg-[#D6E8F7]",
      },
    ],
  },
  {
    id: "02",
    title: "Proposal Risk Management",
    content: "Risk assessments can be highly complex and error-prone.",
    banner: "/accordion/proposal.png",
    tabs: [
      {
        name: "Challenge",
        content: [
          {
            title: "Highly Complex",
            text: "Risk assessments can be highly complex and can be error-prone.",
          },
          {
            title: "Poorly Assessed Risks",
            text: "Failing to properly assess risks can lead to significant operational risks and financial losses.",
          },
          {
            title: "Resource Strain",
            text: "Increasing workloads reduce the ability to work on high-importance tasks.",
          },
        ],
        color: "bg-[#99B9FF]",
      },
      {
        name: "Size Of Problem",
        content: [
          {
            title: "Cost of Headcount",
            text: "Takes about 20% bandwidth of six operational headcount (approximately 60k per employee x 6 x 20% per annum = 72k).",
          },
          {
            title: "Cost of Management",
            text: "Takes about 20% bandwidth of 1 management headcount (approximately 150k per employee x 1 x 20% per annum = 60k) bandwidth of six operational headcount (approximately 60k per employee x 6 x 20% per annum = 72k).",
          },
          {
            title: "Operational Risks",
            text: "Incorrectly approving flawed proposals can lead to substantial financial risks.",
          },
        ],
        color: "bg-white",
      },
      {
        name: "Define Value",
        content: [
          {
            title: "Cost Savings",
            text: "Saves the company approximately 132k per annum.",
          },
          {
            title: "Increased Productivity",
            text: "Automating the process helps technical and engagement headcount focus on high-value work.",
          },
          {
            title: "Risk Mitigation",
            text: "Potentially avoid millions in damages and ensuring operational safety.",
          },
        ],
        color: "bg-[#D6E8F7]",
      },
    ],
  },
  {
    id: "03",
    title: "Training and Development",
    content:
      "Employees receive training that is not aligned with career goals or organizational needs.",
    banner: "/accordion/training.png",
    tabs: [
      {
        name: "Challenge",
        content: [
          {
            title: "Training Misalignment",
            text: "Employees receive training that is not aligned with career goals or organizational needs.",
          },
          {
            title: "Inefficient Learning Paths",
            text: "Without personalized learning paths and tools, employees may take longer to operationalize skills.",
          },
          {
            title: "Resource Allocation",
            text: "Managing and delivering training programs is resource-intensive and prone to inefficiencies.",
          },
        ],
        color: "bg-[#99B9FF]",
      },
      {
        name: "Size Of Problem",
        content: [
          {
            title: "Cost of Training",
            text: "Inefficient training programs (1k per employee x 5k employees x 30% inefficient training = 1.5m) wasted resources spent on training.",
          },
          {
            title: "Cost of Resource",
            text: "Time spent on ineffective training programs takes time away from work (60k per employee x 5k employees / 52 (1 week) = 5.7m).",
          },
          {
            title: "Loss of Productivity Gains",
            text: "Potential productivity efficiency gains from training of 3%. (60k per employee x 5k employees x 3% = 9m).",
          },
        ],
        color: "bg-white",
      },
      {
        name: "Define Value",
        content: [
          {
            title: "Reduces Cost of Training",
            text: "Saves the company by approximately 1.5 million per annum.",
          },
          {
            title: "Reduces Cost of Resource",
            text: "Effective training programs can potentially substantially reduce the cost of resources taken away by training.",
          },
          {
            title: "Increase Productivity",
            text: "More productive employees due to effective training can increase productivity by up to 3%.",
          },
        ],
        color: "bg-[#D6E8F7]",
      },
    ],
  },
  {
    id: "04",
    title: "Supply Chain",
    content:
      "Fluctuating demand makes it difficult to accurately forecast and plan inventory, leading to overstock or shortages.",
    banner: "/accordion/supply-chain.png",
    tabs: [
      {
        name: "Challenge",
        content: [
          {
            title: "Demand Forecasting",
            text: "Fluctuating demand makes it difficult to accurately forecast and plan inventory, leading to overstock or stockouts.",
          },
          {
            title: "Inventory Management",
            text: "Inefficient inventory management increases holding costs and reduces cash flow.",
          },
          {
            title: "Decision Complexity",
            text: "Supply chain decisions require a robust analysis of various metrics, which can be time-consuming and prone to errors.",
          },
        ],
        color: "bg-[#99B9FF]",
      },
      {
        name: "Size Of Problem",
        content: [
          {
            title: "Cost of Purchases",
            text: "The company spends approximately $100m on vendor purchases, with inefficiencies leading to unnecessary costs.",
          },
          {
            title: "Operational Inefficiencies",
            text: "Poor supply chain management results in lost sales opportunities and increased operational costs.",
          },
        ],
        color: "bg-white",
      },
      {
        name: "Define Value",
        content: [
          {
            title: "Cost Savings",
            text: "Optimizing purchasing decisions results in a 3% savings on vendor purchases, amounting to $300,000 on a $10 million spend.",
          },
          {
            title: "Improved Inventory Management",
            text: "Enhance inventory management, reducing holding costs and freeing up capital for other investments.",
          },
          {
            title: "Increase Productivity",
            text: "Provide data-driven insights to support more accurate and timely supply chain decisions, improving efficiency and responsiveness.",
          },
        ],
        color: "bg-[#D6E8F7]",
      },
    ],
  },
];

export { accordionItems };
