import { NextResponse } from 'next/server';

// Pre-defined responses for common questions
const RESPONSES = {
  greeting: [
    "Hello! How can I help you learn more about Vamsi's experience and skills?",
    "Hi there! I'm here to tell you about Vamsi's work in software engineering and AI. What would you like to know?",
    "Welcome! I can tell you about Vamsi's expertise in LLMs, NLP, and cloud computing. What interests you?"
  ],
  skills: [
    "Vamsi's key skills include:\n• Programming: Python, Java, TypeScript\n• ML/AI: PyTorch, NLP, LLMs\n• Cloud: AWS, Azure, Docker\n• Tools: Git, Linux, VS Code",
    "Vamsi specializes in:\n• LLMs and NLP Research\n• Cloud Computing (AWS, Azure)\n• Software Development\n• AI-driven Applications"
  ],
  experience: [
    "Vamsi's work experience includes:\n• Research Assistant at Texas Tech University\n• Associate Professional Software Engineer at DXC Technology\n• Junior Software Intern at Sola Info IT Solutions",
    "Vamsi has worked as a Research Assistant at Texas Tech University, focusing on AI and NLP research, and has professional experience at DXC Technology and Sola Info IT Solutions."
  ],
  education: [
    "Vamsi is currently pursuing a Master's in Computer Science at Texas Tech University. He completed his Bachelor's in Computer Science from Annamacharya Institute of Technology and Sciences.",
    "Vamsi's educational background includes a Master's in Computer Science from Texas Tech University and a Bachelor's in Computer Science from Annamacharya Institute of Technology and Sciences."
  ],
  contact: [
    "You can reach Vamsi through:\n• Email: vamsikvk1234@gmail.com\n• GitHub: github.com/Vamsi-Krishna63\n• LinkedIn: linkedin.com/in/vamsi-krishna-koppala-3b2088194",
    "To connect with Vamsi:\n• Email: vamsikvk1234@gmail.com\n• GitHub: github.com/Vamsi-Krishna63\n• LinkedIn: linkedin.com/in/vamsi-krishna-koppala-3b2088194"
  ],
  default: [
    "I can tell you about Vamsi's skills, experience, education, or contact information. What would you like to know?",
    "Feel free to ask about Vamsi's work in software engineering, AI research, or cloud computing. What interests you?",
    "I can help you learn about Vamsi's background in computer science and software development. What would you like to know?"
  ]
};

// Function to get a random response from an array
const getRandomResponse = (responses: string[]) => {
  return responses[Math.floor(Math.random() * responses.length)];
};

// Function to determine the type of question
const getQuestionType = (message: string): keyof typeof RESPONSES => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) return 'greeting';
  if (lowerMessage.match(/skill|expertise|technologies|programming|language/)) return 'skills';
  if (lowerMessage.match(/experience|work|job|position|role/)) return 'experience';
  if (lowerMessage.match(/education|study|degree|university|college/)) return 'education';
  if (lowerMessage.match(/contact|email|github|linkedin|reach/)) return 'contact';
  
  return 'default';
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Get the appropriate response type
    const responseType = getQuestionType(message);
    
    // Get a random response of that type
    const response = getRandomResponse(RESPONSES[responseType]);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 