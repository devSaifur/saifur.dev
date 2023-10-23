import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

export { getSortedBlogsData }
