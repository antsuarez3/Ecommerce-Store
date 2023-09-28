import getBillboard from '@/actions/get-billboard'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'

export const revalidation = 0

const HomePage = async () => {
  const billboard = await getBillboard('96ffffe1-40df-41e5-8df7-95f9e6456ebb')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage
