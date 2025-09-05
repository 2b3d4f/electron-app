import { useState } from 'react'

function Versions(): React.JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="fixed bottom-4 inset-x-0 mx-auto w-max flex text-blue-900 bg-blue-200 font-mono font-bold rounded-full py-2 *:not-last:border-r *:border-blue-900 *:px-4">
      <li>Electron v{versions.electron}</li>
      <li>Chromium v{versions.chrome}</li>
      <li>Node v{versions.node}</li>
    </ul>
  )
}

export default Versions
