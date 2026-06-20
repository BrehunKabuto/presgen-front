import { useRef, useState } from "react"

export const OtpInput = ({ onChange }: { onChange: (value: string) => void }) => {
  const [values, setValues] = useState(['', '', '', '', '', ''])
  const refs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null))

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return 

    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)
    onChange(newValues.join(''))

    
    if (value && index < 5) {
      refs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      refs[index - 1].current?.focus()
    }
  }

  return (
    <div className="flex gap-2">
      {values.map((val: any, i: any) => (
        <input
          key={i}
          ref={refs[i]}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          maxLength={1}
          className="w-10 h-12 text-center border-2 border-border-color rounded-lg text-lg font-bold bg-card text-text"
        />
      ))}
    </div>
  )
}