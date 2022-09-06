import users from './object.js'
import title from './title.js'


const header = document.getElementById('header')
const main = document.getElementById('main')

const loadElements = () => {
	const h1 = document.createElement('H1')
	h1.className = 'title'
	h1.innerHTML = title
	header.appendChild(h1)

	const displayCards = users
		.map((user) => {
			const { firstName, lastName, age, email, image } = user
			return `
				<div class="card">
						<img src=${image} alt=${firstName} class ='img' />
						<div class="card-body">
							<h3>${firstName} ${lastName}</h3>
							<h4>${age}years old</h4>
							<p>${email}</p>
						</div>
						<a href="/index.html" class= 'link'></a>
				</div>

		`
		})
		.join('\n')

	const section = document.createElement('SECTION')
	section.className = 'section-profile'
	section.innerHTML = displayCards

	main.appendChild(section)
}

export default loadElements;