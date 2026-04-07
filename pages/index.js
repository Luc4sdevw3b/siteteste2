import Image from 'next/image'
function Home( ) {
    return (
    <>
    <h1>Faz o L</h1>
    <Image
    src="/jooj.gif"
    alt="Pássaro dançando"
    width={480}
    height={356}
    />
    </>
    )
}

export default Home;