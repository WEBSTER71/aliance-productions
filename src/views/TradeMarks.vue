<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<title-components />
			<div class="mark">
				<div class='mark__container _container'>
					<mark-components />
				</div>
			</div>
		</main>
		<offer-components />
		<footer-components />
	</div>
</template>

<script >
import headerComponents from '../components/header'
import titleComponents from '../components/title'
import offerComponents from '../components/offer'
import footerComponents from '../components/footer'
import markComponents from '../components/mark'

export default {
	name: 'tradeMarksPage',
	components: {
		headerComponents,
		titleComponents,
		offerComponents,
		footerComponents,
		markComponents,
	},
}
</script>