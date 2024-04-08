<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<title-components />
			<div class="about">
				<div class='about__container _container'>
					<div class="about__row">
						<div class="about__column">
							<div class="about__img"><img src="../assets/img/homepage/company.png" alt=""></div>
						</div>
						<div class="about__column">
							<div class="about__items">
								<div class="about__line _line"></div>
								<div class="about__title">мы - эксперты в области производства химии</div>
								<div class="about__text">Разнообразный и богатый опыт говорит нам, что перспективное планирование однозначно фиксирует необходимость поставленных обществом задач! Есть над чем задуматься: ключевые особенности структуры проекта могут быть объединены в целые кластеры себе подобных. Интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут описаны максимально подробно. Значимость этих проблем настолько очевидна, что перспективное планирование играет важную роль в формировании системы массового участия.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<advantages-components />
			<div class="production">
				<div class='production__container _container'>
					<div class="production__row">
						<div class="production__column">
							<div class="production__items">
								<div class="production__line _line"></div>
								<div class="production__title">Наше производство</div>
								<div class="production__text">Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает широкому кругу (специалистов) участие в формировании глубокомысленных рассуждений. Но граница обучения кадров создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий.<br><br>
								Реализация намеченных плановых заданий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для соответствующих условий активизации. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения.</div>
								<div class="production__list">
									<div class="production__content">
										<div class="production__item">
											<div class="production__icon"><img src="../assets/img/homepage/icon-6.svg" alt=""></div>
											<div class="production__subtext">Автомобильная химия</div>
										</div>
										<div class="production__item">
											<div class="production__icon"><img src="../assets/img/homepage/icon-11.svg" alt=""></div>
											<div class="production__subtext">Бытовая химия</div>
										</div>
										<div class="production__item">
											<div class="production__icon"><img src="../assets/img/homepage/icon-12.svg" alt=""></div>
											<div class="production__subtext">Дезинфицирующие средства</div>
										</div>
									</div>
									<div class="production__content">
										<div class="production__item">
											<div class="production__icon"><img src="../assets/img/homepage/icon-13.svg" alt=""></div>
											<div class="production__subtext">Пищевые аэрозоли</div>
										</div>
										<div class="production__item">
											<div class="production__icon"><img src="../assets/img/homepage/icon-5.svg" alt=""></div>
											<div class="production__subtext">Косметическая продукция</div>
										</div>
										<div class="production__item">
											<div class="production__icon"><img src="../assets/img/homepage/icon-4.svg" alt=""></div>
											<div class="production__subtext">Краски аэрозольные</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="production__column">
							<div class="production__img"><img src="../assets/img/homepage/product.jpg" alt=""></div>
						</div>
					</div>
				</div>
			</div>
			<mission-components />
			<center-components />
			<partner-components />
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
import advantagesComponents from '../components/advantages'
import missionComponents from '../components/mission'
import centerComponents from '../components/center'
import partnerComponents from '../components/partner'

export default {
	name: 'aboutPage',
	components: {
		headerComponents,
		titleComponents,
		offerComponents,
		footerComponents,
		advantagesComponents,
		missionComponents,
		centerComponents,
		partnerComponents,
	},
}
</script>