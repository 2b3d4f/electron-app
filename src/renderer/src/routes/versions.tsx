import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/versions')({
  component: RouteComponent
})

import Versions from '../components/Versions'

function RouteComponent(): React.JSX.Element {
  return (
    <div className="grow flex justify-center items-center bg-sky-50">
      <Versions />
    </div>
  )
}
