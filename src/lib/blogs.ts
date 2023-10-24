import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'src/blogs')

function getSortedBlogsData() {
  //get file name under src/blogs
  const fileName = fs.readdirSync(blogsDirectory)
  const allBlogsData = fileName.map((fileName) => {
    // remove .md from file name to get id
    const id = fileName.replace(/\.md$/, '')

    //read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //use gray-matter to parse the metadata section
    const matterResult = matter(fileContents)

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }

    return blogPost
  })

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

async function getBlogData(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // use gray-matter to parse the metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  }

  return blogPostWithHTML
}

export { getSortedBlogsData, getBlogData }
