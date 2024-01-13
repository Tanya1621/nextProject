import Image from 'next/image';

function Home () {
    return <div><h1>Hello, friend!</h1>
    <Image
        src="/images/welcome-text.jpeg"
        height={500}
        width={500}
        alt="welcome"
    /></div>
}

export default Home;