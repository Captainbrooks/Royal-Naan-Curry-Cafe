import React from 'react'

export default function ButtonSpinner() {
  return (
<button class="btn btn-light" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
  )
}
