<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<title-components />
			<div class="blog">
				<div class='blog__container _container'>
					<swiper class="blog-sliders"
						:modules="modules"
						:slides-per-view="1"
						:space-between="30"
						:speed="700"
						:grid="{
							fill: 'row',
							rows: 5,
						}"
						:pagination="{
							clickable: true,
							el: '.blog-sliders__pagination',
							bulletClass: 'blog-sliders__pagination-num',
							bulletActiveClass: 'blog-sliders__pagination-num-active',
						}"
						:breakpoints="swiperOptions.breakpoints">
						<!-- 
							:navigation="{
							nextEl: '.blog-sliders__arrow-right',
							prevEl: '.blog-sliders__arrow-left'
						}"
					-->
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-1.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Современная методология разработки одухотворила всех причастных</div>
								<div class="blog-sliders__text">Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</div>
							</div>
						</swiper-slide>
						<swiper-slide class="blog-sliders__slide">
							<div class="blog-sliders__bg"><img src="../assets/img/homepage/blog-2.jpg" alt=""></div>
							<div class="blog-sliders__box-text">
								<div class="blog-sliders__title">Сложно сказать, почему жизнь прекрасна</div>
								<div class="blog-sliders__text">Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</div>
							</div>
						</swiper-slide>
						<div class="blog-sliders__button-column">
							<div class="blog-sliders__pagination">
								<span class="blog-sliders__pagination-num">1</span>
								<span class="blog-sliders__pagination-num">2</span>
								<span class="blog-sliders__pagination-num">3</span>
								<span class="blog-sliders__pagination-num">4</span>
								<span class="blog-sliders__pagination-num">5</span>
							</div>
						</div>
					</swiper>
				</div>
			</div>
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
import {Swiper, SwiperSlide} from 'swiper/vue'
import { Grid, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/pagination';

export default {
	name: 'blogPage',
	components: {
		headerComponents,
		titleComponents,
		offerComponents,
		footerComponents,
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
			modules: [Grid, Pagination],
		};
	},
}
</script>