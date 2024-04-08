<template>
	<div class="mission">
		<div class="mission__img"><img src="../assets/img/homepage/mission.jpg" alt=""></div>
		<div class="mission__container _container">
			<div class="mission__items">
				<div class="mission__line _line"></div>
				<div class="mission__title">Отношение к делу и к клиентам</div>
				<div class="mission__text">Кстати, интерактивные прототипы описаны максимально подробно. Повседневная практика показывает, что укрепление и развитие внутренней структуры говорит о возможностях соответствующих условий активизации. Внезапно, независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. С учётом сложившейся международной обстановки, синтетическое тестирование выявляет срочную потребность системы массового участия.<br><br>
				А ещё действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены сами себе. Не следует, однако, забывать, что выбранный нами инновационный путь в значительной степени обусловливает важность дальнейших направлений развития.</div>
				<router-link to="/about" v-if="$route.meta.missionMain == true" class="mission__button-box btn-line">
					<div class="btn-line-line"></div>
					<div class="btn-line-txt">Подробнее о компании</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'missionComponents',
}
</script>