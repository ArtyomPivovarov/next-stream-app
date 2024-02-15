export default function LivePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Live {params.id}</h1>
    </div>
  )
}