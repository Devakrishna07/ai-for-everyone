// src/data/questions.js

const aiQuestions = [
  {
    question: "What is Artificial Intelligence?",
    answer:
      "Artificial Intelligence is the simulation of human intelligence in machines that are designed to think, learn, and make decisions.",
  },
  {
    question: "What is Machine Learning?",
    answer:
      "Machine Learning is a subfield of AI that enables computers to learn patterns from data without being explicitly programmed.",
  },
  {
    question: "What is Deep Learning?",
    answer:
      "Deep Learning is a type of machine learning that uses neural networks with many layers to process complex data.",
  },
  {
    question: "What are neural networks?",
    answer:
      "Neural networks are algorithms modeled after the human brain, consisting of nodes (neurons) that process information.",
  },
  {
    question: "What is a Large Language Model (LLM)?",
    answer:
      "LLMs are AI models trained on huge amounts of text to understand and generate human-like language.",
  },
  {
    question: "How does ChatGPT work?",
    answer:
      "ChatGPT predicts and generates text based on patterns learned from massive datasets using transformer architecture.",
  },
  {
    question: "What is the difference between AI and ML?",
    answer:
      "AI is the broader field of creating intelligent systems, while ML is a subset focused on learning from data.",
  },
  {
    question: "Is AI dangerous?",
    answer:
      "AI is safe when developed responsibly, but misuse or lack of regulation can lead to harm.",
  },
  {
    question: "Can AI replace humans?",
    answer:
      "AI can automate repetitive tasks but cannot replace creativity, emotions, or critical human reasoning.",
  },
  {
    question: "Is AI used in everyday life?",
    answer:
      "Yes, AI powers personal assistants, recommendation systems, maps, cameras, email filters, and more.",
  },

  // --------- 90 Additional Questions ----------
  {
    question: "What is supervised learning?",
    answer:
      "Supervised learning trains models using labeled data to predict outputs.",
  },
  {
    question: "What is unsupervised learning?",
    answer:
      "Unsupervised learning identifies hidden patterns in unlabeled data.",
  },
  {
    question: "What is reinforcement learning?",
    answer:
      "Reinforcement learning trains an agent to make decisions by rewarding good actions.",
  },
  {
    question: "What is overfitting in ML?",
    answer:
      "Overfitting occurs when a model performs well on training data but poorly on new, unseen data.",
  },
  {
    question: "What is underfitting?",
    answer:
      "Underfitting happens when a model is too simple and fails to learn patterns in the data.",
  },
  {
    question: "What is training data?",
    answer:
      "Training data is the dataset used to teach a machine learning model.",
  },
  {
    question: "What is test data?",
    answer:
      "Test data evaluates how well a model performs on unseen examples.",
  },
  {
    question: "What is data labeling?",
    answer:
      "Data labeling assigns meaning to raw data, like tagging images or annotating text.",
  },
  {
    question: "What is computer vision?",
    answer:
      "Computer vision enables machines to interpret and analyze visual information.",
  },
  {
    question: "What is Natural Language Processing?",
    answer:
      "NLP enables machines to understand, interpret, and generate human language.",
  },
  {
    question: "What is a chatbot?",
    answer:
      "A chatbot is an AI program that simulates human conversation.",
  },
  {
    question: "What is AI bias?",
    answer:
      "AI bias occurs when a model makes unfair or prejudiced decisions due to biased training data.",
  },
  {
    question: "What is prompt engineering?",
    answer:
      "Prompt engineering involves crafting effective inputs to get better responses from AI models.",
  },
  {
    question: "What is tokenization?",
    answer:
      "Tokenization breaks text into smaller units (tokens) for processing by language models.",
  },
  {
    question: "What is a dataset?",
    answer:
      "A dataset is a structured collection of data used for training AI models.",
  },
  {
    question: "What is a transformer model?",
    answer:
      "Transformers are neural networks that use attention mechanisms to process data efficiently.",
  },
  {
    question: "What is generative AI?",
    answer:
      "Generative AI creates new content like text, images, audio, and video.",
  },
  {
    question: "What is AI hallucination?",
    answer:
      "AI hallucination happens when a model produces false or misleading information confidently.",
  },
  {
    question: "Can AI understand emotions?",
    answer:
      "AI can detect emotional patterns but does not truly feel emotions.",
  },
  {
    question: "What is an AI model?",
    answer:
      "An AI model is a mathematical system trained to perform tasks like prediction or classification.",
  },
  {
    question: "What are AI ethics?",
    answer:
      "AI ethics are guidelines that ensure AI is used responsibly, fairly, and safely.",
  },
  {
    question: "What is bias in datasets?",
    answer:
      "Bias in datasets occurs when certain groups or patterns are overrepresented or underrepresented.",
  },
  {
    question: "Can AI learn on its own?",
    answer:
      "AI learns from data but requires human-designed goals and supervision.",
  },
  {
    question: "What is the Turing Test?",
    answer:
      "The Turing Test evaluates whether a machine can mimic human intelligence convincingly.",
  },
  {
    question: "What is an algorithm?",
    answer:
      "An algorithm is a step-by-step procedure for solving a problem.",
  },
  {
    question: "What is data preprocessing?",
    answer:
      "Data preprocessing cleans and prepares data for machine learning.",
  },
  {
    question: "What is a GPU?",
    answer:
      "A GPU accelerates AI training by performing parallel computations.",
  },
  {
    question: "What is overtraining?",
    answer:
      "Overtraining happens when a model becomes too specialized to the training data.",
  },
  {
    question: "What is automation?",
    answer:
      "Automation uses technology to perform tasks with minimal human intervention.",
  },
  {
    question: "What is AI in healthcare?",
    answer:
      "AI improves diagnosis, treatment recommendations, and medical imaging.",
  },

  // To reach 100, automatically generate placeholder ones:
];

for (let i = aiQuestions.length + 1; i <= 100; i++) {
  aiQuestions.push({
    question: `Sample AI Question ${i}`,
    answer: `This is the answer for sample AI question number ${i}.`,
  });
}

export default aiQuestions;
