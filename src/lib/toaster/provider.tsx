import { Toaster } from 'sonner'

export default function AchievementProvider () {
  return <Toaster expand offset={16} toastOptions={{
    style: {
      backgroundColor: "#181818",
      color: "#fafafa",
      padding: 0,
      paddingTop: 16,
    }
  }} />
}