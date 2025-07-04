import React from 'react'

interface TextInputProps {
  label?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const TextInput: React.FC <TextInputProps> = ({ label, type = 'text', placeholder, value, onChange, name }) => {


  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={{ display: 'block', marginBottom: '4px' }}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: '8px',
          width: '100%',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  )
}

export default TextInput
