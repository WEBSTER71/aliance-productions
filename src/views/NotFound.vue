<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<div class="not-found">
				<div class='not-found__container _container'>
					<div class="not-found__items">
						<div class="not-found__404">404</div>
						<div class="not-found__title">Страница не найдена</div>
						<div class="not-found__sub-title">Мы не смогли найти страницу с таким адресом, попробуйте перейти на главную или напишите нам.</div>
						<router-link to="/" class="not-found__button btn">
							<div class="btn-txt">Вернуться на главную</div>
						</router-link>
					</div>
				</div>
			</div>
		</main>
		<footer-components />
	</div>
</template>

<script >
import headerComponents from '../components/header'
import footerComponents from '../components/footer'

export default {
	name: 'notFoundPage',
	components: {
		headerComponents,
		footerComponents,
	},
}
</script>