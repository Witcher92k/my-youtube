// Sample data for the simulated live chat stream
const NAMES = [
  'Aarav', 'Diya', 'Kabir', 'Ananya', 'Vihaan', 'Ishita', 'Rohan', 'Meera',
  'Arjun', 'Sana', 'Dev', 'Priya', 'Kunal', 'Nisha', 'Rahul', 'Tara',
]

const MESSAGES = [
  'This is amazing 🔥',
  'Hello from India 🇮🇳',
  'Who else is watching this live?',
  'GG',
  'Can you do a Q&A next?',
  'Love this channel ❤️',
  '😂😂😂',
  'First time catching a stream!',
  'The quality is so good today',
  'W stream',
  'Notifications squad ✋',
  'This part is my favourite',
  'POG',
  'Greetings from Mumbai!',
  'Underrated content honestly',
]

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const generateRandomChatMessage = () => ({
  id: crypto.randomUUID(),
  name: pick(NAMES),
  text: pick(MESSAGES),
})
