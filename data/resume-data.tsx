import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Alexander Densley',
	initials: 'AD',
	location: 'Provo, Utah',
	locationLink: 'https://maps.app.goo.gl/6A2D6gmPxufhUXhn8',
	about: 'build, ship, scale, repeat',
	summary: 'e/acc',
	avatarUrl: 'https://avatars.githubusercontent.com/u/89933800?v=4',
	personalWebsiteUrl: 'https://alxnder.co',
	contact: {
		email: 'densley.alexander@gmail.com',
		booking: 'https://cal.alxnder.co/chat',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/alexander-densley',
				icon: GitHubIcon,
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/alexander-densley/',
				icon: LinkedInIcon,
			},
			{
				name: 'X',
				url: 'https://x.com/alxnderco',
				icon: XIcon,
			},
		],
	},
	education: [
		{
			school: 'Brigham Young University',
			degree:
				"Bachelor's of Science in Computer Science and a minor in Entrepreneurship | GPA 3.9",
			start: '2018',
			end: '2024',
		},
	],
	work: [
		{
			company: 'Subtract',
			link: 'https://subtract.pro',
			badges: [],
			title: 'Co-founder / CTO',
			start: '2023',
			end: 'Present',
			description:
				'Co-founded Subtract in December of 2023 as CTO. Launched our beta in March of 2024. Currently scaling the company.',
		},
		{
			company: 'nCino',
			link: 'https://ncino.com',
			badges: [],
			title: 'Software Engineer Intern',
			start: '2023',
			end: '2024',
			description:
				'Worked with 5 engineers to overhaul our key consumer product in VueJS and Ruby on Rails, achieving 98% adoption and 200,000 monthly views, boosting revenue by $2.7 million. Refined loan details code, cutting 15,000 lines for better readability and less technical debt, increasing revenue by $1.8 million.',
		},
		{
			company: 'Cotopaxi',
			link: 'https://www.cotopaxi.com',
			badges: [],
			title: 'Social Entrepreneur Fellow',
			start: '2022',
			end: 'Present',
			description:
				'Cotopaxi sponsored me and the other fellows to spend a month in Mexico City, Mexico helping local families run and scale their own family businesses. ',
		},
		{
			company: 'Levinthal Capital',
			link: 'https://www.linkedin.com/company/levinthal-capital/about/',
			badges: [],
			title: 'Levinthal Fellow',
			start: '2022',
			end: 'Present',
			description:
				'Led by Mike Levinthal, 13 other fellows and myself met with business leaders from around the world every week for 6 months to discuss the ways that founders and leaders can create a better world.',
		},
		{
			company: 'Y-Video',
			link: 'https://yvideo.byu.edu/',
			badges: ['Remote'],
			title: 'Full Stack Developer',
			start: '2022',
			end: '2023',
			description:
				'Worked with 3 engineers on an open-source project focused on providing high school teachers and college professors with a suite of video editing tools to legally modify and share copyrighted footage with students to streamline video-based learning.',
		},
		{
			company: 'BYU Broadcasting',
			link: 'https://www.byutv.org/',
			badges: [],
			title: 'Infrastructure Engineer',
			start: '2022',
			end: '2022',
			description:
				"Revised BYUtv's user personalization history storage db enhancing data collection per session by at least 50% and cutting redundant data by 83%. Updated an internal microservice to streamline user data handling, reducing code redundancy by 30% and API calls by 50%. Implemented an AWS workflow for faster business intelligence updates, shifting from weekly to daily user data integration into content recommendations.",
		},
	],
	skills: [
		'JavaScript',
		'TypeScript',
		'React/Next.js',
		'tRPC',
		'Node.js',
		'Tailwind CSS',
		'Ruby on Rails',
		'graphQL',
		'postgreSQL',
	],
	projects: [
		{
			title: 'dyt.to',
			techStack: [
				'Side Project',
				'TypeScript',
				'Next.js',
				'Tailwind CSS',
				'shadcn/ui',
				'supabase',
			],
			description: 'Easy to share short links for anything',
			link: {
				href: 'https://dyt.to/',
			},
		},
		{
			title: 'readme.gg',
			techStack: [
				'Side Project',
				'TypeScript',
				'Next.js',
				'dnd-kit',
				'Tailwind CSS',
				'shadcn/ui',
				'supabase',
			],
			description:
				'A simple and easy to use tool to create and share readme files',
			link: {
				href: 'https://readme.gg/',
			},
		},
		{
			title: 'alxnder.co',
			techStack: ['Side Project', 'Next.js', 'TailwindCSS', 'shadcn/ui'],
			description: "My personal website - you're on it right now",
			link: {
				href: 'https://alxnder.co/',
			},
		},
		{
			title: "Help, I'm hungry!",
			techStack: [
				'Side Project',
				'Next.js',
				'TailwindCSS',
				'shadcn/ui',
				'openai API',
			],
			description:
				'Create fun and unique recipes with whatever you have in the fridge using AI',
			link: {
				href: 'https://helpimhungry.com/',
			},
		},
		{
			title: 'Talked',
			techStack: [
				'Side Project',
				'Next.js',
				'TailwindCSS',
				'shadcn/ui',
				'supabase',
			],
			description: 'A platform to help young athletes find mentors and coaches',
			link: {
				href: 'https://trytalked.com/',
			},
		},
		{
			title: 'Pay me back',
			techStack: ['Side Project', 'Next.js', 'TailwindCSS', 'shadcn/ui'],
			description:
				'A simple tool to calculate how much everyone owes each other when someone covers the bill. Takes into account sales tax and other fees and splits accordingly.',
			link: {
				href: 'https://paymeback.app/',
			},
		},
		{
			title: 'whenisgood.app',
			techStack: [
				'Side Project',
				'Next.js',
				'TailwindCSS',
				'shadcn/ui',
				'supabase',
			],
			description:
				'A modern revamp of the old whenisgood.net website making it more accessible and user friendly',
			link: {
				href: 'https://whenisgood.app/',
			},
		},
	],
} as const
