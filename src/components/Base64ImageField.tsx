'use client'

import { useField } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'
import { useId, useState } from 'react'

const MAX_IMAGE_BYTES = 3 * 1024 * 1024
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

export const Base64ImageField: TextFieldClientComponent = ({ path, field }) => {
  const { value, setValue } = useField<string>({ path })
  const inputId = useId()
  const [error, setError] = useState<string | null>(null)
  const imageValue = typeof value === 'string' ? value : ''

  const handleFile = (file: File | undefined): void => {
    setError(null)
    if (!file) return
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError('Formats acceptés : JPEG, PNG, WebP et GIF.')
      return
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setError('La taille maximale est de 3 Mo par image.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') setValue(reader.result)
    }
    reader.onerror = () => setError('Impossible de lire ce fichier.')
    reader.readAsDataURL(file)
  }

  return (
    <div className="base64-image-field">
      <label htmlFor={inputId}>{typeof field.label === 'string' ? field.label : path}</label>
      <input id={inputId} type="file" accept={ACCEPTED_TYPES.join(',')} onChange={(event) => handleFile(event.currentTarget.files?.[0])} />
      {imageValue ? <div className="base64-image-preview"><img src={imageValue} alt="Aperçu de l’image sélectionnée" /><button type="button" onClick={() => setValue('')}>Supprimer l’image</button></div> : null}
      {error ? <p role="alert">{error}</p> : null}
      <small>L’image est encodée en Base64 puis enregistrée dans PostgreSQL.</small>
    </div>
  )
}
