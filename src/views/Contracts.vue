<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<title-components />
			<div class="contract contract_product">
				<div class='contract__container _container'>
					<contract-components />
				</div>
			</div>
			<div class="seo">
				<div class='seo__container _container'>
					<div class="seo__title">SEO Заголовок</div>
					<div class="seo__sub-title">Также как дальнейшее развитие различных форм деятельности предполагает независимые способы реализации существующих финансовых и административных условий. Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект играет важную роль в формировании как самодостаточных, так и внешне зависимых концептуальных решений. Внезапно, интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть...</div>
					<a href="#" class="seo__button">
						<div class="seo__button-txt _icon-read-more-btn">Читать больше</div>
					</a>
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
import contractComponents from '../components/contract'

export default {
	name: 'contractPage',
	components: {
		headerComponents,
		titleComponents,
		offerComponents,
		footerComponents,
		contractComponents,
	},
}
</script>