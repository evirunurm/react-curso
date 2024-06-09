import { FC } from 'react'

export interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch: onSearchChange }) => (
  <div>
    <input type="text" placeholder="buscar" onChange={(e) => onSearchChange(e.target.value)} />
  </div>
)

export default SearchBar
