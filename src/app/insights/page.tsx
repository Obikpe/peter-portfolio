import { getAllInsights } from "@/lib/markdown"
import InsightsClientView from "@/components/InsightsClientView"

// This is a Server Component by default (no "use client")
export default function InsightsPage() {
  const insights = getAllInsights()

  return (
    <InsightsClientView initialInsights={insights}>
       {/* Increased pt-32 to clear the fixed/sticky navigation header */}
       <div className="max-w-3xl mx-auto pt-22 pb-20">

      </div>
      </InsightsClientView>
  )
}