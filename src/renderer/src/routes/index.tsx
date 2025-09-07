import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

import electronLogo from '../assets/electron.svg'

function Index(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex grow select-none flex-col justify-center items-center bg-sky-50">
      <img alt="logo" className="size-32" src={electronLogo} />
      <div className="mt-2 text-sm bg-sky-400 text-sky-50 px-4 py-1 rounded-full">
        Powered by electron-vite
      </div>
      <div className="mt-4 text-lg font-semibold text-sky-900">
        Build an Electron app with React and TypeScript
      </div>
      <p className="mt-1 text-sky-900">
        Please try pressing{' '}
        <kbd
          className="inline-block px-1 rounded-sm
         font-mono font-semibold bg-blue-200"
        >
          F12
        </kbd>{' '}
        to open the devTool
      </p>
      <div className="flex gap-4 mt-4">
        <div>
          <a
            href="https://electron-vite.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 rounded-full bg-sky-900 text-sm text-sky-100 font-semibold hover:bg-sky-800 cursor-pointer"
          >
            Documentation
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            onClick={ipcHandle}
            className="inline-block px-4 py-2 rounded-full bg-sky-900 text-sm text-sky-100 font-semibold hover:bg-sky-800 cursor-pointer"
          >
            Send IPC
          </a>
        </div>
      </div>
    </div>
  )
}
