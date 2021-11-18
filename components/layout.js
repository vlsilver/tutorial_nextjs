import Head from 'next/dist/shared/lib/head'
import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import utilsStyles from '../styles/utils.module.css'



const name = "VLSILVER"
export const siteTile = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' herf='favicon.ico' />
                <meta
                    property="description"
                    content="Learn how build a personal website using Next.js"
                ></meta>

                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTile
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                ></meta>
                <meta name="og:title" content={siteTile}>
                </meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>
            <header className={styles.header}>
                {
                    home ? (
                        <>
                            <Image
                                priority
                                src="/images/profile.jpeg"
                                className={utilsStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            >
                            </Image>
                            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image
                                        priority
                                        src={"/images/profile.jpeg"}
                                        className={utilsStyles.borderCircle}
                                        height={108}
                                        width={108}
                                        alt={name}
                                    ></Image>
                                </a>
                            </Link>
                            <h2 className={utilsStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilsStyles.colorInherit}>
                                        {name}
                                    </a>
                                </Link>
                            </h2>
                        </>
                    )
                }
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </div>
            )}
        </div >
    )
}