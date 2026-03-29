import SectionWrapper from "@/components/SectionWrapper"

export default function MediaPage() {

  return (
    <SectionWrapper title="Media">

      <div className="grid md:grid-cols-2 gap-8">

        <div>

          <h3 className="text-xl font-semibold mb-3">
            Personal Introduction
          </h3>

          <video
            controls
            className="rounded-lg border border-gray-800"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>

        </div>

      </div>

    </SectionWrapper>
  )
}