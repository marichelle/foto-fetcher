import { useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? (
            <ChevronDownIcon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  )
}

export default ExpandablePanel
