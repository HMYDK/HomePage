export interface Quote {
  content: string;
  author: string;
  category: "wisdom" | "inspiration" | "life" | "success";
}

export const quotes: Quote[] = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success",
  },
  {
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "wisdom",
  },
  {
    content: "Stay hungry, stay foolish.",
    author: "Stewart Brand",
    category: "inspiration",
  },
  {
    content: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "success",
  },
  {
    content: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "wisdom",
  },
  {
    content: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "wisdom",
  },
  {
    content:
      "Life is not about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    category: "life",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "inspiration",
  },
  {
    content: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "wisdom",
  },
  {
    content: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    category: "success",
  },
  {
    content:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: "wisdom",
  },
  {
    content:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "inspiration",
  },
];
