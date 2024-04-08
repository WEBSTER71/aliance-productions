<template>
	<div class="kinds">
		<div class='kinds__container _container'>
			<div class="kinds__items">
				<div class="kinds__line _line"></div>
				<div v-if="$route.meta.titleNum == 2.1" class="kinds__title">Виды автохимии</div>
				<div v-else-if="$route.meta.titleNum == 2.2" class="kinds__title">Виды бытовой химии</div>
				<div v-else-if="$route.meta.titleNum == 2.3" class="kinds__title">Виды дезинфицирующих средств</div>
				<div v-else-if="$route.meta.titleNum == 2.4" class="kinds__title">Виды пищевых аэрозолей</div>
				<div v-else-if="$route.meta.titleNum == 2.5" class="kinds__title">Виды косметической продукции</div>
				<div v-else-if="$route.meta.titleNum == 2.6" class="kinds__title">Виды аэрозольных красок</div>
				<div class="kinds__text">Но современная методология разработки позволяет оценить значение прогресса профессионального сообщества. Есть над чем задуматься: тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям.</div>
				<div class="kinds__list">
					<div class="kinds__content">
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Антискотч</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Многоцелевая смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Жидкий ключ</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Высокотемпературная смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Универсальный очиститель деталей</div>
						</div>
					</div>
					<div class="kinds__content">
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Силиконовая смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Цепная смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Медная смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Графитовая смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель кондиционера пенный</div>
						</div>
					</div>
					<div class="kinds__content">
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель тормозных дисков</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель битумных пятен</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель кондционера</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель дросельной заслонки</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель обивки</div>
						</div>
					</div>
					<div class="kinds__content">
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Тефлоновая смазка</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Очиститель двигателя</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Универсальный очиститель</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Чернитель шин</div>
						</div>
						<div class="kinds__item">
							<div class="kinds__dash">—</div>
							<div class="kinds__subtext">Чернитель шин + очистка</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'kindsComponents',
}
</script>