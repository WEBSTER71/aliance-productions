import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'main-page',
			component: () =>
			import ('../views/MainPage.vue'),
			meta: {
				headerMain: true,
				advantagesMain: true,
				missionMain: true,
				titleNum: 0,
			},
		},
		{
			path: '/about',
			name: 'about',
			component: () =>
			import ('../views/About.vue'),
			meta: {
				titleNum: 1,
			}
		},
		{
			path: '/contracts',
			name: 'contracts',
			component: () =>
			import ('../views/Contracts.vue'),
			meta: {
				titleNum: 2,
			},
		},
		{
			path: '/contract',
			meta: {
				bgProducts: true,
			},
			children: [
				{
					path: '/contract/car',
					name: 'car',
					component: () =>
					import ('../views/contracts/Car.vue'),
					meta: {
						titleNum: 2.1,
					}
				},
				{
					path: '/contract/household',
					name: 'household',
					component: () =>
					import ('../views/contracts/Household.vue'),
					meta: {
						titleNum: 2.2,
					}
				},
				{
					path: '/contract/disinfectants',
					name: 'disinfectants',
					component: () =>
					import ('../views/contracts/Disinfectants.vue'),
					meta: {
						titleNum: 2.3,
					}
				},
				{
					path: '/contract/food',
					name: 'food',
					component: () =>
					import ('../views/contracts/Food.vue'),
					meta: {
						titleNum: 2.4,
					}
				},
				{
					path: '/contract/cosmetic',
					name: 'cosmetic',
					component: () =>
					import ('../views/contracts/Cosmetic.vue'),
					meta: {
						titleNum: 2.5,
					}
				},
				{
					path: '/contract/paints',
					name: 'paints',
					component: () =>
					import ('../views/contracts/Paints.vue'),
					meta: {
						titleNum: 2.6,
					}
				},
			]
		},
		{
			path: '/trade-marks',
			name: 'trade-marks',
			component: () =>
			import ('../views/TradeMarks.vue'),
			meta: {
				titleNum: 3,
			}
		},
		{
			path: '/trade-mark',
			children: [
				{
					path: '/trade-mark/AG-TECH',
					name: 'AG-TECH',
					component: () =>
					import ('../views/marks/AG-TECH.vue'),
					meta: {
						titleNum: 3.1,
					}
				},
				{
					path: '/trade-mark/AP',
					name: 'AP',
					component: () =>
					import ('../views/marks/AP.vue'),
					meta: {
						titleNum: 3.2,
					}
				},
			]
		},
		{
			path: '/blog',
			name: 'blog',
			component: () =>
			import ('../views/Blog.vue'),
			meta: {
				titleNum: 4,
			}
		},
		{
			path: '/news',
			name: 'news',
			component: () =>
			import ('../views/News.vue'),
			meta: {
				titleNum: 5,
			}
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: () =>
			import ('../views/Contacts.vue'),
			meta: {
				titleNum: 6,
			}
		},
		{
			path: '/politics',
			name: 'politics',
			component: () =>
			import ('../views/Politics.vue'),
			meta: {
				titleNum: 7,
			}
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () =>
			import ('../views/NotFound.vue'),
		},
	],
	scrollBehavior() {
		return { top: 0 }
	},
})

export default router