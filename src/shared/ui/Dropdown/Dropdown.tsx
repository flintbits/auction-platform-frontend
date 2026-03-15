import { useEffect, useRef, useState } from 'react'
import Typography from '../Typography/Typography'
import styles from './Dropdown.module.css'

type DropdownProps = {
  id: string,
  label: string,
  options: any[],
  error?: boolean,
  helperText?: string
  onChange: (val: string) => void
}

export default function Dropdown({ id, label, options, error, helperText, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOusideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        console.log("hello")
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOusideClick);
    return () => document.removeEventListener("mousedown", handleOusideClick)
  }, [])

  const handleDropdownToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleOptionSelect = (value: string, index: number) => {
    onChange(value)
    setSelectedIndex(index)
    setIsOpen(false)
  }


  return (
    <div ref={dropdownRef}>
      {label &&
        <label htmlFor={id} >{label}</label>
      }
      <div className={styles.container}>
        <button
          aria-expanded={isOpen}
          aria-controls="listbox"
          aria-haspop="listbox"
          type='button'
          className={`${styles.selectTrigger} ${error ? styles.error : ""}`}
          onClick={handleDropdownToggle}
        >{selectedIndex !== null ? options[selectedIndex].label : "Select"}</button>

        {isOpen &&
          <ul
            role="listbox"
            id="listbox"
            className={styles.options}>
            {(options ?? []).map((option, index) =>
              <li
                key={index}
                role="option"
                aria-selected={index === selectedIndex}
                className={styles.listItem}
                onClick={() => handleOptionSelect(option.value, index)}
              >{option.label}</li>)}
          </ul>
        }
      </div>

      <Typography
        as="p"
        className={error ? styles.helperError : ""}
        style={{ visibility: error ? "visible" : "hidden", minHeight: 18 }}
        weight="light"
        size="text-xs"
      >{helperText}</Typography>
    </div >
  )
}
