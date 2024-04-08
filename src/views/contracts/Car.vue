<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<title-components />
			<contracts-components />
			<advantages-components />
			<process-components />
			<kinds-components />
			<center-components />
			<step-components />
			<partner-components />
		</main>
		<offer-components />
		<footer-components />
	</div>
</template>

<script >
import headerComponents from '../../components/header'
import titleComponents from '../../components/title'
import offerComponents from '../../components/offer'
import footerComponents from '../../components/footer'
import advantagesComponents from '../../components/advantages'
import contractsComponents from '../../components/products/contracts'
import processComponents from '../../components/products/process'
import kindsComponents from '../../components/products/kinds'
import centerComponents from '../../components/center'
import stepComponents from '../../components/step'
import partnerComponents from '../../components/partner'

export default {
	name: 'carPage',
	components: {
		headerComponents,
		titleComponents,
		offerComponents,
		footerComponents,
		advantagesComponents,
		contractsComponents,
		processComponents,
		kindsComponents,
		centerComponents,
		stepComponents,
		partnerComponents,
	},
}
</script>