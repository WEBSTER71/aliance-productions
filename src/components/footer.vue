<template>
	<footer class="footer">
		<div class="footer__wrapper-top">
			<div class="footer__row-top _container">
				<router-link to="/" class="footer__logo"><img src="../assets/img/footer/logo.svg" alt=""></router-link>
				<a href="#" class="footer__phone">+7 (499) 686-10-14</a>
				<a href="#" class="footer__address">
					<div class="footer__icon"><img src="../assets/img/footer/map.svg" alt=""></div>
					<div class="footer__link">г. Мосвка, Холодильный пер. 4к1с8</div>
				</a>
				<a href="#" class="footer__email">
					<div class="footer__icon"><img src="../assets/img/footer/email.svg" alt=""></div>
					<div class="footer__link">a.dragunov@tdaliance.ru</div>
				</a>
				<div class="footer__social">
					<a href="https://vk.com" class="footer__vk"><img src="../assets/img/footer/vk.svg" alt=""></a>
					<a href="https://telegram.org/" class="footer__tg"><img src="../assets/img/footer/tg.svg" alt=""></a>
				</div>
			</div>
		</div>
		<div class="footer__wrapper-center">
			<div class="footer__row-center _container">
				<div class="footer__item">
					<router-link to="/contracts" class="footer__title">Контрактное производство</router-link>
					<div class="footer__column">
						<router-link to="/contract/car" class="footer__sub-title">Автомобильная химия</router-link>
						<router-link to="/contract/household" class="footer__sub-title">Бытовая химия</router-link>
						<router-link to="/contract/disinfectants" class="footer__sub-title">Дезинфицирующие средства</router-link>
					</div>
				</div>
				<div class="footer__item">
					<div class="footer__column footer__column_center">
						<router-link to="/contract/food" class="footer__sub-title">Пищевые аэрозоли</router-link>
						<router-link to="/contract/cosmetic" class="footer__sub-title">Косметическая продукция</router-link>
						<router-link to="/contract/paints" class="footer__sub-title">Краски аэрозольные</router-link>
					</div>
				</div>
				<div class="footer__item">
					<router-link to="/trade-marks" class="footer__title">Собственные марки</router-link>
					<div class="footer__column">
						<router-link to="/trade-mark/AG-TECH" class="footer__sub-title">Автохимия AG-Tech</router-link>
						<router-link to="/trade-mark/AP" class="footer__sub-title">Автохимия AP</router-link>
					</div>
				</div>
				<div class="footer__item footer__item_last">
					<router-link to="/about" class="footer__title">О компании</router-link>
					<router-link to="/news" class="footer__title">Новости</router-link>
					<router-link to="/contacts" class="footer__title">Контакты</router-link>
				</div>
			</div>
		</div>
		<div class="footer__wrapper-bottom">
			<div class="footer__row-bottom _container">
				<div class="footer__text-box-left">
					<div class="footer__text footer__text-1">© 2022 «Aliance Production». Все права защищены.</div>
					<router-link to="/politics" class="footer__text footer__text-2">Политики конфиденциальности</router-link>
				</div>
				<div class="footer__text-box-right">
					<div class="footer__text footer__text-3">Сделано в</div>
					<div class="footer__ruso"><img src="../assets/img/footer/ruso.svg" alt=""></div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'footerComponents',
}
</script>