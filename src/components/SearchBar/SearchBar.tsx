import { FC, useEffect, useRef } from 'react'

export interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch: onSearchChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="buscar" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  )
}

export default SearchBar
