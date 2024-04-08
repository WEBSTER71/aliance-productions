<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<title-components />
			<div class="info">
				<div class='info__container _container'>
					<div class="info__content">
						<a href="#" class="info__phone">+7 (499) 686-10-14</a>
						<a href="#" class="info__address">
							<div class="info__icon"><img src="../assets/img/homepage/map.svg" alt=""></div>
							<div class="info__link">г. Мосвка, Холодильный пер. 4к1с8</div>
						</a>
						<a href="#" class="info__email">
							<div class="info__icon"><img src="../assets/img/homepage/email.svg" alt=""></div>
							<div class="info__link">a.dragunov@tdaliance.ru</div>
						</a>
						<div class="info__social">
							<a href="#" class="info__vk"><img src="../assets/img/homepage/vk.svg" alt=""></a>
							<a href="#" class="info__tg"><img src="../assets/img/homepage/tg.svg" alt=""></a>
						</div>
					</div>
				</div>
			</div>
			<div class="map">
				<div class='map__container _container'>
					<div id="map" class="map__content">
						<!--<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.ru/maps/213/moscow/house/kholodilny_pereulok_4/Z04YcAVkSUAPQFtvfXtxeHhiYA==/inside/?from=tabbar&ll=37.623109%2C55.710165&source=serp_navig&tab=inside&utm_medium=mapframe&utm_source=maps&z=16" style="color:#eee;font-size:12px;position:absolute;top:14px;">Холодильный переулок, 4 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUvM0qwoB" width="1440" height="600" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>-->
					</div>
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
import { loadYmap } from 'vue-yandex-maps'

export default {
	name: 'contactsPage',
	components: {
		headerComponents,
		titleComponents,
		offerComponents,
		footerComponents,
	},
	async mounted() {
		const settings = { apiKey: '89cc17af-d31b-4368-ae80-984bddafc12e',};
		await loadYmap(settings);
		let center = [55.70950694841489,37.61785699008613];
		let mark = [55.709414, 37.624058];
		function init() {
			let map = new ymaps.Map('map', {
				center: center,
				zoom: 16
			});

			let placemark = new ymaps.Placemark(mark, {}, {
				iconLayout: 'default#image',
				iconImageHref: 'https://i.postimg.cc/ZCMDKZTL/ymap.png',
				iconImageSize: [250, 70],
				iconImageOffset: [-30, -65],
			});

			//map.controls.remove('geolocationControl'); // удаляем геолокацию
			//map.controls.remove('searchControl'); // удаляем поиск
			//map.controls.remove('trafficControl'); // удаляем контроль трафика
			//map.controls.remove('typeSelector'); // удаляем тип
			// //map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
			map.controls.remove('rulerControl'); // удаляем контрол правил
			//map.controls.remove('zoomControl'); // удаляем контрол зуммирования
			//map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

			map.geoObjects.add(placemark);
		}
		ymaps.ready(init);
	}
}
</script>