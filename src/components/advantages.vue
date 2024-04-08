<template>
	<div class="main-block__advantages advantages-block">
		<div v-if="$route.meta.advantagesMain == true" class="advantages-block__row advantages-block__row_main _container">
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-1.svg" alt=""></div>
				<div class="advantages-block__text">Непрерывная работа c 2017 года</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-2.svg" alt=""></div>
				<div class="advantages-block__text">Вся продукция сертифицирована</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-3.svg" alt=""></div>
				<div class="advantages-block__text">Контроль качества на всех этапах</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-4.svg" alt=""></div>
				<div class="advantages-block__text">Возможны поставки по всей России</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-5.svg" alt=""></div>
				<div class="advantages-block__text">Оперативное производство</div>
			</div>
		</div>
		<div v-else class="advantages-block__row advantages-block__row_other _container">
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-1.svg" alt=""></div>
				<div class="advantages-block__text">Непрерывная работа c 2017 года</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-2.svg" alt=""></div>
				<div class="advantages-block__text">Вся продукция сертифицирована</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-3.svg" alt=""></div>
				<div class="advantages-block__text">Контроль качества на всех этапах</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-4.svg" alt=""></div>
				<div class="advantages-block__text">Возможны поставки по всей России</div>
			</div>
			<div class="advantages-block__item">
				<div class="advantages-block__icon"><img src="../assets/img/homepage/advantages-5.svg" alt=""></div>
				<div class="advantages-block__text">Оперативное производство</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'advantagesComponents',
}
</script>