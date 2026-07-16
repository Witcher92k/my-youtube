import { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import { SettingsIcon, ExpandIcon } from './utils/icons'
import { addMessage } from './utils/chatSlice'
import { generateRandomChatMessage } from './utils/liveChatData'
import { useDispatch, useSelector } from 'react-redux'

const SIMULATED_MESSAGE_INTERVAL_MS = 2000

const ChatWindow = () => {
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.chatMessagesArray)
  const [draft, setDraft] = useState('')
  const messagesEndRef = useRef(null)

  // Simulate an incoming live-chat stream
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessage(generateRandomChatMessage()))
    }, SIMULATED_MESSAGE_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [dispatch])

  // Keep the newest message in view
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const sendMessage = () => {
    const text = draft.trim()
    if (!text) return
    dispatch(addMessage({ id: crypto.randomUUID(), name: 'You', text }))
    setDraft('')
  }

  return (
    <div className="flex flex-col w-full lg:w-[350px] h-[400px] lg:h-[600px] bg-[#0f0f0f] border border-[#3f3f3f] rounded-xl overflow-hidden shrink-0 self-start">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#3f3f3f]">
        <span className="text-white text-sm font-semibold">Live chat</span>
        <div className="flex items-center gap-3">
          <SettingsIcon />
          <ExpandIcon />
        </div>
      </div>

      {/* Messages scrollable area */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 scrollbar-hide">
        {chatMessages.map((item) => (
          <ChatMessage key={item.id} name={item.name} text={item.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 px-3 py-2 border-t border-[#3f3f3f]">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          type="text"
          placeholder="Chat…"
          aria-label="Chat message"
          className="flex-1 bg-[#1f1f1f] text-sm text-white placeholder-gray-500 rounded-full px-3 py-1.5 outline-none border border-transparent focus:border-[#3ea6ff]"
        />
        <button
          onClick={sendMessage}
          disabled={!draft.trim()}
          className="text-sm font-medium text-[#3ea6ff] disabled:text-gray-600 px-2"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatWindow
