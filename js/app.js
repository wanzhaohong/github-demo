import { contributors } from '../assets/contributors.js'

const namesList = document.getElementById('names-list')

// Display the number of contributors
document.getElementById('count').innerText = contributors.length.toString()

contributors.forEach((contributor) => {
  // Create link element
  const linkElement = document.createElement('a')
  linkElement.appendChild(document.createTextNode(contributor.name))
  linkElement.href = contributor.githubProfile
  linkElement.target = '_blank'
  linkElement.rel = 'noopener noreferrer'

  // Create list element
  const newName = document.createElement('li')
  newName.appendChild(linkElement)
  namesList.appendChild(newName)
})
