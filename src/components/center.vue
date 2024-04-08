<template>
	<div class="center">
		<div class='center__container _container'>
			<div class="center__items">
				<div class="center__line _line"></div>
				<div class="center__title">Исследовательский центр Aliance production</div>
				<div class="center__text-box">
					<div class="center__text">Явные признаки победы институционализации рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира могут быть ограничены исключительно образом мышления. Лишь независимые государства набирают популярность среди определенных слоев населения, а значит, должны быть указаны как претенденты на роль ключевых факторов. Лишь акционеры крупнейших компаний могут быть призваны к ответу.</div>
					<div class="center__text">С учётом сложившейся международной обстановки, синтетическое тестирование требует определения и уточнения анализа существующих паттернов поведения. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада представляет собой интересный эксперимент проверки как самодостаточных, так и внешне зависимых концептуальных решений. Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует необходимость стандартных подходов.</div>
				</div>

			</div>
		</div>
		<swiper class="center-slider"
			:modules="modules"
			:space-between="30"
			:width="705"
			:loop="true"
			:looped-slides="5"
			:looped-slides-limit="false"
			:initial-slide="1"
			:speed="700"
			:navigation="{
				nextEl: '.center-slider__arrow-right',
				prevEl: '.center-slider__arrow-left'
			}">
			<swiper-slide class="center-slider__slide">
				<div class="center-slider__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
			</swiper-slide>
			<swiper-slide class="center-slider__slide">
				<div class="center-slider__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
			</swiper-slide>
			<swiper-slide class="center-slider__slide">
				<div class="center-slider__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
			</swiper-slide>
			<swiper-slide class="center-slider__slide">
				<div class="center-slider__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
			</swiper-slide>
		</swiper>
		<div class="center__container _container">
			<div class="center-slider__navigation">
				<div class="center-slider__arrow center-slider__arrow-left">
					<img src="../assets/img/homepage/arrow-left-btn.svg" alt="">
				</div>
				<div class="center-slider__arrow center-slider__arrow-right">
					<img src="../assets/img/homepage/arrow-right-btn.svg" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
	name: 'centerComponents',
	components: {
		Swiper, SwiperSlide,
	},
	setup() {
		return {
			modules: [Navigation],
		};
	}
}
</script>