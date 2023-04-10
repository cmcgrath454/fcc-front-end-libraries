import Navbar from './Navbar.js';

function Reflection() {
	return (
		<div id='reflection'>
			<Navbar header='Reflection' />
			<section>
				<h2>Overview</h2>
				<p>
					The main reason I pursued this course and certification was that I was interested in learning new front-end tools to
					enhance my skills. Though I had some experience building front-ends using CSS, SASS, Vanilla JS, and Bootstrap, this
					course provided me with a deeper understanding of available front-end technology. In this reflection, I discuss the
					challenges I encountered and what I learned during this course.
				</p>
			</section>
			<section>
				<h2>Bootstrap & SASS</h2>
				<p>
					Bootstrap and SASS were not new to me, as I had prior experience using them in school and for my personal portfolio. I
					find Bootstrap classes useful for mobile-first styling and time-saving. SASS is a tool I find extremely useful for
					modularizing styles to keep projects organized and maintainable.
				</p>
				<p>
					I styled my <a href='https://colinmcgrath.tech'>personal portfolio</a> almost exclusively with Bootstrap, because it
					provides a simple and intuitive style. Initially in this project, I used Bootstrap classes to style elements quickly
					while focusing on functional requirements. After completing the projects, I created a design concept and went back and
					fully restyled each app SASS with some Bootstrap SASS modules to help with mobile responsiveness.
				</p>
			</section>
			<section>
				<h2>JQuery</h2>
				<p>
					Though I had little experience with JQuery before this course, the hands-on exercises gave me a better understanding of
					how useful it can be in manipulating the DOM while keeping the code concise. When I started working on the projects for
					completing the certification, I was thinking of how and when I could use JQuery. I decided to spend some time
					researching how and why people use JQuery in React projects. After reading some articles, I decided for a few reasons
					not to use JQuery in these projects.
					<ol>
						<li>
							React uses a Virtual DOM for updating only the smallest necessary parts of the DOM to improve performance and speed.
						</li>
						<li>
							All of these projects naturally provided opportunities to use and maintain state and allow React to manipulate the
							DOM, which kept the code clean and readable in my opinion.
						</li>
						<li>
							I was most invested in learning how to use React well, with the proper best practices, so I didn't want to force
							JQuery into the project when I couldn't find any justification for it.
						</li>
					</ol>
					If you're interested in how I came to this conclusion, or when JQuery can be useful in React projects, check out the
					links to the articles I read below.
					<ul>
						<li>
							<a href='https://forum.freecodecamp.org/t/when-should-i-use-jquery-vs-react/191356/2'>
								When should I use Jquery vs React? (FreeCodeCamp Forum)
							</a>
						</li>
						<li>
							<a href='https://www.upgrad.com/blog/jquery-vs-react/#:~:text=jQuery%20directly%20interacts%20with%20the,suitable%20for%20large%20size%20applications.'>
								Jquery vs React: Difference between jQuery and React
							</a>
						</li>
						<li>
							<a href='https://bretcameron.medium.com/react-intro-for-developers-who-know-jquery-1e9dd65863a8' target='_'>
								A React.js Introduction for Developers who know JQuery
							</a>
						</li>
					</ul>
				</p>
			</section>
			<section>
				<h2>React</h2>
				<p>
					As I mentioned, I was really interested in learning as much as I could about React during this certification. I knew
					almost nothing about how to use React, but I saw how widespread its use was, and wanted to know more. This whole website
					was built with React, and it was a great learning experience. I faced many challenges, but I wanted to take my time to
					make sure I was doing things the right way using best practices. Below, I am going to explain two of the biggest
					challenges I encountered and the solutions I found.
				</p>
				<p>
					<h3>React Hooks</h3>
					<p>
						The first challenge that I encountered was that React had shifted away from using classes and towards using functions
						with hooks. I had to spend a good amount of time reading through the documentation to figure out how to apply the
						knowledge I learned about state and component methods to the new modern way of using React. Luckily, I found the
						theory of the course was still applicable, even though the implementations were slightly different. It was a great
						opportunity for me to learn how to adapt to new changes quickly and draw on what I had learned to help me understand
						how the new implementations worked.
					</p>
					<h3>React Routing</h3>
					<p>
						Because I wanted to host all 5 projects on one React application, I knew I would have to figure out a way to implement
						page routing. I read through the React Router documentation and implemented a Browser Router with routes to each
						project and back to the main page.
					</p>
					<p>
						As soon as I deployed the project to GitHub pages, I realized that the Browser Router wasn't working. I spent some
						time looking into the issue and figured out that GitHub Pages doesn't support this type of routing. I also discovered
						Hash Routing is supported by GitHub Pages. So, I had to pivot and quickly learn about hash routing, and reimplement my
						solution.
					</p>
				</p>
			</section>
			<section>
				<h2>Redux</h2>
				<p>
					This course also covered Redux and Redux-React, which I understand as another way of implementing state but with a
					single point of truth, which could be useful in complex applications with many components. I don't think any of these
					projects necessarily warranted using Redux with React, but I knew that I wanted to have practice implementing it myself.
				</p>
				<p>
					Similar to React, there had been a large shift in the modern way to implement Redux in React, so I also had to spend
					time researching new methods and best practices. I decided to use Redux on the timer app because it felt like it had the
					most opportunity to write a large number of actions and also had multiple components altering portions of the timer
					state.
				</p>
				<p>
					I felt that I became much more confident in my ability to use Redux and my knowledge of when it could be useful in a
					React project by implementing it in the timer project. Earlier, I discussed how I didn't use JQuery because I felt it
					wasn't justified in this application. I also felt like Redux wasn't strictly necessary for any of these projects, but
					the use I found for it wasn't counter-productive to the application as a whole and I felt I needed to know how to
					implement Redux in React to fully round out my knowledge of React.
				</p>
			</section>
		</div>
	);
}

export default Reflection;
