export default function StreamerMediaPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      media streamer { params.slug }
    </div>
  )
}