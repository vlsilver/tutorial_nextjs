import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/dist/shared/lib/head'
import utilsStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return <Layout>
        {/* Add this <Head> tag*/}
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilsStyles.headingXl}>{postData.title}</h1>
            <div className={utilsStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    //Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
