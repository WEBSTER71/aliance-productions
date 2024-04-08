<template>
	<div v-if="$route.meta.titleNum == 1" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">О компании</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> О компании</div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Контрактное производство</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> Контрактное производство</div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2.1" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Автомобильная химия</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Контрактное производство </span><span>—</span> Автомобильная химия</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2.2" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Бытовая химия</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Контрактное производство </span><span>—</span> Бытовая химия</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2.3" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Дезинфицирующие средства</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Контрактное производство </span><span>—</span> Дезинфицирующие средства</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2.4" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Пищевые аэрозоли</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Контрактное производство </span><span>—</span> Пищевые аэрозоли</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2.5" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Косметическая продукция</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Контрактное производство </span><span>—</span> Косметическая продукция</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 2.6" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Краски аэрозольные</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Контрактное производство </span><span>—</span> Краски аэрозольные</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 3" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Собственные торговые марки</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> Собственные торговые марки</div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 3.1" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Автохимия AG-Tech</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Собственные торговые марки </span><span>—</span> Автохимия AG-Tech</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 3.2" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Автохимия AP</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span><span> Собственные торговые марки </span><span>—</span> Автохимия AP</div>
			</div>
			<div class="title__items">
				<div class="title__image"><img src="../assets/img/homepage/3z.png" alt=""></div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 4" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Блог</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> Блог</div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 5" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Новости</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> Новости</div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 6" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Контакты</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> Контакты</div>
			</div>
		</div>
	</div>
	<div v-else-if="$route.meta.titleNum == 7" class="title">
		<div class='title__container _container'>
			<div class="title__items">
				<div class="title__line _line"></div>
				<div class="title__title">Политика конфиденциальности</div>
				<div class="title__sub-title"><span>Главная </span><span>—</span> Политика конфиденциальности</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'titleComponents',
}
</script>