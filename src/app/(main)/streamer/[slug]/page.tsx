export default function StreamerPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      streamer {params.slug}
    </div>
  )
}