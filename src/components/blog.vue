<template>
	<div class="blog">
		<div class='blog__container _container'>
			<div class="blog__line _line"></div>
			<div v-if="$route.meta.titleNum == 0" class="blog__title">Блог экспертов в области производства</div>
			<div v-else class="blog__title">Так же вас может заинтересовать:</div>
			<swiper class="blog-slider"
				:modules="modules"
				:slides-per-view="1"
				:space-between="30"
				:loop="true"
				:speed="700"
				:navigation="{
					nextEl: '.blog-slider__arrow-right',
					prevEl: '.blog-slider__arrow-left'
				}"
				:breakpoints="swiperOptions.breakpoints">
				<swiper-slide class="blog-slider__slide">
					<div class="blog-slider__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
					<div class="blog-slider__box-text">
						<div class="blog-slider__title">Современная методология разработки одухотворила всех причастных</div>
						<div class="blog-slider__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
					</div>
				</swiper-slide>
				<swiper-slide class="blog-slider__slide">
					<div class="blog-slider__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
					<div class="blog-slider__box-text">
						<div class="blog-slider__title">Сложно сказать, почему жизнь прекрасна</div>
						<div class="blog-slider__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
					</div>
				</swiper-slide>
				<div class="blog-slider__button-column">
					<router-link v-if="$route.meta.titleNum == 0" to="/blog" class="blog-slider__button-box btn-line">
						<div class="btn-line-line"></div>
						<div class="btn-line-txt">Весь блог</div>
					</router-link>
					<div class="blog-slider__navigation">
						<div class="blog-slider__arrow blog-slider__arrow-left">
							<img src="../assets/img/homepage/arrow-left-btn.svg" alt="">
						</div>
						<div class="blog-slider__arrow blog-slider__arrow-right">
							<img src="../assets/img/homepage/arrow-right-btn.svg" alt="">
						</div>
					</div>
				</div>
			</swiper>
		</div>
	</div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
	name: 'blogComponents',
	components: {
		Swiper, SwiperSlide,
	},
	setup() {
		return {
			swiperOptions: {
				breakpoints: {
					767: {
						slidesPerView: 2,
					},
				}
			},
			modules: [Navigation],
		};
	}
}
</script>