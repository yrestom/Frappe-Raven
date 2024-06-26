import { createElement, useEffect, useRef } from "react"
import 'emoji-picker-element'
import './emojiPicker.styles.css'

import { Database } from "emoji-picker-element";

export const emojiDatabase = new Database();

const EmojiPicker = ({ onSelect }: { onSelect: (emoji: string) => void }) => {

    const ref = useRef<any>(null)

    useEffect(() => {
        const handler = (event: any) => {
            emojiDatabase.incrementFavoriteEmojiCount(event.detail.unicode)
            onSelect(event.detail.unicode)
        }
        ref.current?.addEventListener('emoji-click', handler)
        ref.current.skinToneEmoji = '👍'

        const style = document.createElement('style');
        style.textContent = `.picker { border-radius: 8px; box-shadow: var(--shadow-6); } input.search{ color: 'rgb(24 24 27)' } }`
        ref.current.shadowRoot.appendChild(style);

        return () => {
            ref.current?.removeEventListener('emoji-click', handler)
        }
    }, [])

    return createElement('emoji-picker', { ref })
}

export default EmojiPicker