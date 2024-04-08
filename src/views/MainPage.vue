<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<div class="main-block">
				<div class="main-block__frame">
					<div class="main-block__bg"><img src="../assets/img/homepage/main-bg.jpg" alt=""></div>
					<div class="main-block__container _container">
						<div class="main-block__content">
							<div class="main-block__line _line"></div>
							<div class="main-block__title">Комплексное обеспечение товарами и расходными материалами бизнеса</div>
							<div class="main-block__sub-title">Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от анализа существующих паттернов поведения.</div>
							<router-link to="/about" class="main-block__button btn"><div class="btn-txt">Подробнее о компании</div></router-link>
						</div>
						<advantages-components />
					</div>
				</div>
			</div>
			<step-components />
			<div class="contract">
				<div class='contract__container _container'>
					<div class="contract__line _line"></div>
					<div class="contract__title">Контрактное производство</div>
					<contract-components />
				</div>
			</div>
			<div class="mark">
				<div class='mark__container _container'>
					<div class="mark__line _line"></div>
					<div class="mark__title">Собственные торговые марки</div>
					<mark-components />
				</div>
			</div>
			<mission-components />
			<partner-components />
			<blog-components />
		</main>
		<offer-components />
		<footer-components />
	</div>
</template>

<script >
import headerComponents from '../components/header'
import offerComponents from '../components/offer'
import footerComponents from '../components/footer'
import advantagesComponents from '../components/advantages'
import stepComponents from '../components/step'
import contractComponents from '../components/contract'
import markComponents from '../components/mark'
import missionComponents from '../components/mission'
import partnerComponents from '../components/partner'
import blogComponents from '../components/blog'

export default {
	name: 'mainPage',
	components: {
		headerComponents,
		offerComponents,
		footerComponents,
		advantagesComponents,
		stepComponents,
		contractComponents,
		markComponents,
		missionComponents,
		partnerComponents,
		blogComponents,
	},
	mounted() {
		window.onscroll = function showHeader() {
			let header = document.querySelector('.header_scroll');
			if(window.pageYOffset >= 1){
				header.classList.remove('header_main');
			} else{
				header.classList.add('header_main');
			}
		}
	},
}
</script>