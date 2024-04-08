<template>
	<div class="process">
		<div class='process__container _container'>
			<div class="process__items">
				<div class="process__line _line"></div>
				<div v-if="$route.meta.titleNum == 2.1" class="process__title">Изготовление автохимии</div>
				<div v-else-if="$route.meta.titleNum == 2.2" class="process__title">Изготовление бытовой химии</div>
				<div v-else-if="$route.meta.titleNum == 2.3" class="process__title">Изготовление<br>дезинфицирующих средств</div>
				<div v-else-if="$route.meta.titleNum == 2.4" class="process__title">Изготовление пищевых аэрозолей</div>
				<div v-else-if="$route.meta.titleNum == 2.5" class="process__title">Изготовление<br>косметической продукции</div>
				<div v-else-if="$route.meta.titleNum == 2.6" class="process__title">Изготовление аэрозольных красок</div>
				<div class="process__text">Но современная методология разработки позволяет оценить значение прогресса профессионального сообщества. Есть над чем задуматься: тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям. В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поставленных обществом задач.</div>
				<div class="process__list">
					<div class="process__content">
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-1.svg" alt=""></div>
							<div class="process__subtext">Полное описание товаров</div>
						</div>
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-2.svg" alt=""></div>
							<div class="process__subtext">Актуальные цены</div>
						</div>
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-1.svg" alt=""></div>
							<div class="process__subtext">Полное описание товаров</div>
						</div>
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-2.svg" alt=""></div>
							<div class="process__subtext">Актуальные цены</div>
						</div>
					</div>
					<div class="process__content">
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-3.svg" alt=""></div>
							<div class="process__subtext">Лаки и краски</div>
						</div>
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-1.svg" alt=""></div>
							<div class="process__subtext">Химические производства</div>
						</div>
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-3.svg" alt=""></div>
							<div class="process__subtext">Лаки и краски</div>
						</div>
						<div class="process__item">
							<div class="process__icon"><img src="../../assets/img/homepage/ico-1.svg" alt=""></div>
							<div class="process__subtext">Химические производства</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="process__img"><img src="../../assets/img/homepage/contracts-2.jpg" alt=""></div>
	</div>
</template>

<script>
export default {
	name: 'processComponents',
}
</script>