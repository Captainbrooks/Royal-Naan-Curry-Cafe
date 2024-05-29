import React from 'react'

function ButtonSpinner() {
  return (
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
  )
}

export default ButtonSpinner
